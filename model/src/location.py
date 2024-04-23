#import libraries
import pandas as pd
import json
import sys
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics.pairwise import linear_kernel

#laod the dataset
df = pd.read_csv('../model/data/southern.csv')

# Combine the 'Location', 'Category', 'Budget', and 'Duration' columns into a single 'Features' column
df['Features'] = df['Location'] + ' ' + df['Category'] + ' ' + df['Budget'].astype(str) + ' ' + df['Duration'].astype(str)

# Calculate TF-IDF matrix
tfidf = TfidfVectorizer(stop_words='english')
df['Features'] = df['Features'].fillna('')
tfidf_matrix = tfidf.fit_transform(df['Features'])

# Calculate cosine similarity matrix
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

# Function to recommend locations based on similarity score
def recommend_locations(user_input_location, user_input_categories, user_input_budget, user_input_duration, cosine_sim=cosine_sim):
    # Create a new dataframe to store the user's input
    user_df = pd.DataFrame([[user_input_location, ' '.join(user_input_categories), user_input_budget, user_input_duration]], columns=['Location', 'Category', 'Budget', 'Duration'])
    user_df['Features'] = user_df['Location'] + ' ' + user_df['Category'] + ' ' + user_df['Budget'].astype(str) + ' ' + user_df['Duration'].astype(str)
    user_tfidf = tfidf.transform(user_df['Features'])

    # Calculate the cosine similarity between the user's input and the locations in the dataframe
    cosine_sim_user = linear_kernel(user_tfidf, tfidf_matrix)

    # Get the top 10 most similar locations
    sim_scores = list(enumerate(cosine_sim_user[0]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[0:10]
    location_indices = [i[0] for i in sim_scores]
    recommended_locations = df.iloc[location_indices]
    return recommended_locations

# Get user input
user_input_location = "Tangalle"
user_input_category = ["point of interests", "beaches", "nature & wildlife"]
user_input_budget = 1100
user_input_duration = 7

# Recommend locations based on the user's input
recommendations = recommend_locations(user_input_location, user_input_category, user_input_budget, user_input_duration)

# print the results as a JSON string
print(json.dumps(
    {
        "location": recommendations.to_dict('records')
    }
))