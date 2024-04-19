import pandas as pd
import json
import sys
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics.pairwise import linear_kernel

print("Hello from Python!")


# location = sys.argv[1]
# price = sys.argv[2]
# category = sys.argv[3]
# duration = sys.argv[4]

# Load the dataset
df = pd.read_csv('../data/southern.csv')

# Combine the location and category into a single string
df['Combined'] = df['Location'] + ' ' + df['Category']

# Create a TF-IDF vectorizer and fit it to the combined features
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(df['Combined'])

# Define a function to get recommendations based on cosine similarity
def get_recommendations(user_input):
    # Transform the user input
    user_input_transformed = vectorizer.transform([user_input])

    # Compute cosine similarity between the user input and all items
    cosine_sim = cosine_similarity(user_input_transformed, tfidf_matrix)

    # Get the top 10 most similar items
    sim_scores = list(enumerate(cosine_sim[0]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[0:10]

    # Get the item indices
    item_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar items
    return df['Title'].iloc[item_indices]

# Assume we have some user input
user_input = 'Galle point of interests'

# Get recommendations
recommendations = get_recommendations(user_input)
print(recommendations)

# Load the dataset
df = pd.read_csv('../data/eat.csv')

# Combine the 'Location', 'Category', 'Rating', and 'Reviews' columns into a single 'Features' column
df['Features'] = df['Location'] + ' ' + df['Rating'].astype(str) + ' ' + df['Review'].astype(str)

# Calculate TF-IDF matrix
tfidf = TfidfVectorizer(stop_words='english')
df['Features'] = df['Features'].fillna('')
tfidf_matrix = tfidf.fit_transform(df['Features'])

# Calculate cosine similarity matrix
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

# Function to recommend locations based on similarity score
def recommend_locations_based_on_features(index, cosine_sim=cosine_sim):
    sim_scores = list(enumerate(cosine_sim[index]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[0:11]
    location_indices = [i[0] for i in sim_scores]
    recommended_locations = df.iloc[location_indices]
    return recommended_locations

# Get user input
user_input_location = "Weligama"

# Find the index of the location that matches the user's input
location_index = df.loc[(df['Location'] == user_input_location)].index[0]

# Recommend locations based on the user's input
recommendations = recommend_locations_based_on_features(location_index)
print(recommendations.to_string(index=False))

# Load the dataset
df = pd.read_csv('../data/accomadations.csv')

# Combine the 'Location', 'Category', 'Rating', and 'Reviews' columns into a single 'Features' column
df['Features'] = df['Location'] + ' ' + df['Rating'].astype(str) + ' ' + df['Review'].astype(str)

# Calculate TF-IDF matrix
tfidf = TfidfVectorizer(stop_words='english')
df['Features'] = df['Features'].fillna('')
tfidf_matrix = tfidf.fit_transform(df['Features'])

# Calculate cosine similarity matrix
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

# Function to recommend locations based on similarity score
def recommend_locations_based_on_features(index, cosine_sim=cosine_sim):
    sim_scores = list(enumerate(cosine_sim[index]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[0:11]
    location_indices = [i[0] for i in sim_scores]
    recommended_locations = df.iloc[location_indices]
    return recommended_locations

# Get user input
user_input_location = "Galle"

# Find the index of the location that matches the user's input
location_index = df.loc[(df['Location'] == user_input_location)].index[0]

# Recommend locations based on the user's input
recommendations = recommend_locations_based_on_features(location_index)
print(recommendations.to_string(index=False))

# data = sys.argv[1]

# Convert the DataFrame to a list of dictionaries
# recommendations_list = recommendations.to_dict('records')

# print the results as a JSON string
print(json.dumps(
    {
        #"location": recommendations.to_string(index=False), 
        #"accomadation": result2,
        "food": "dasd"
    }
))