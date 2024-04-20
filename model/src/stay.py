import pandas as pd
import json
import sys
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics.pairwise import linear_kernel

# Load the dataset
df = pd.read_csv('../model/data/accomadations.csv')

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
acc_recommendations = recommend_locations_based_on_features(location_index)

# print the results as a JSON string
print(json.dumps(
    {
        "accomadations": acc_recommendations.to_dict('records')
    }
))