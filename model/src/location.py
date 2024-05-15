import pandas as pd
import json
import sys
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from math import radians, cos, sin, asin, sqrt

# load dataset
df = pd.read_csv('../model/data/southern.csv')

# Combine to feature column
df['Features'] = df['Location'] + ' ' + df['Category'] + ' ' + df['Budget'].astype(str) + ' ' + df['Duration'].astype(str)

tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(df['Features'])

# calculate the distance between two points using their coordinates
def haversine(lon1, lat1, lon2, lat2):
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a))
    r = 6371  # Radius of earth in kilometers
    return c * r

# Function to recommend locations based on similarity score
def recommend_locations(user_input_location, user_input_categories, user_input_budget, user_input_days):
    user_input_duration = user_input_days * 6  # Calculate total duration based on number of days

    # Create a new dataframe to store the user's input
    user_df = pd.DataFrame([[user_input_location, ' '.join(user_input_categories), user_input_budget, user_input_duration]], columns=['Location', 'Category', 'Budget', 'Duration'])
    user_df['Features'] = user_df['Location'] + ' ' + user_df['Category'] + ' ' + user_df['Budget'].astype(str) + ' ' + user_df['Duration'].astype(str)
    user_tfidf = tfidf.transform(user_df['Features'])

    # Calculate the cosine similarity 
    cosine_sim_user = linear_kernel(user_tfidf, tfidf_matrix)

    # Get the most similar locations
    sim_scores = list(enumerate(cosine_sim_user[0]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Filter locations based on duration, location, categories, and budget
    location_indices = [i[0] for i in sim_scores if df.iloc[i[0]]['Duration'] <= user_input_duration and df.iloc[i[0]]['Location'] == user_input_location and any(category in df.iloc[i[0]]['Category'] for category in user_input_categories) and df.iloc[i[0]]['Budget'] <= user_input_budget]
    
    # If there are not enough locations in the input location, get other locations
    if len(location_indices) < user_input_duration / 6:
        remaining_duration = user_input_duration - sum(df.iloc[i]['Duration'] for i in location_indices)
        other_location_indices = [i[0] for i in sim_scores if df.iloc[i[0]]['Duration'] <= remaining_duration and df.iloc[i[0]]['Location'] != user_input_location and any(category in df.iloc[i[0]]['Category'] for category in user_input_categories) and df.iloc[i[0]]['Budget'] <= user_input_budget]
        for index in other_location_indices:
            location_duration = df.iloc[index]['Duration']
            if remaining_duration - location_duration >= 0:
                location_indices.append(index)
                remaining_duration -= location_duration
            else:
                break

    # Get the coordinates of the input location
    input_location_coordinates = df[df['Location'] == user_input_location][['lati', 'long']].values[0]

    # Calculate the distance from the input location to each location in the DataFrame
    df['Distance'] = df.apply(lambda row: haversine(input_location_coordinates[1], input_location_coordinates[0], row['long'], row['lati']), axis=1)

    # Sort the locations by distance
    location_indices = sorted(location_indices, key=lambda x: df.iloc[x]['Distance'])

    # Split locations into days based on a maximum of 6 hours per day
    recommended_locations_per_day = []
    current_day_duration = 0
    current_day_locations = []
    for index in location_indices:
        location_duration = df.iloc[index]['Duration']
        if current_day_duration + location_duration > 6:
            if current_day_locations:
                recommended_locations_per_day.append(df.iloc[current_day_locations])
            current_day_duration = location_duration
            current_day_locations = [index]
        else:
            current_day_locations.append(index)
            current_day_duration += location_duration
        if len(recommended_locations_per_day) == user_input_days:
            break
    if current_day_locations and len(recommended_locations_per_day) < user_input_days:
        recommended_locations_per_day.append(df.iloc[current_day_locations])

    
    return recommended_locations_per_day

# Get user input
user_input_location = sys.argv[1]
user_input_category =  sys.argv[4] 
user_input_budget = int(sys.argv[2])  
user_input_days = int(sys.argv[3]) 


recommendations = recommend_locations(user_input_location, user_input_category, user_input_budget, user_input_days)

recommendations_list = []
for i, day in enumerate(recommendations):
    recommendations_list.append({
        "Day": i + 1,
        "Locations": day.to_dict('records'),
        })

print(json.dumps(recommendations_list,))


