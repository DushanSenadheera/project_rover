#import libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sys
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from sklearn.metrics.pairwise import cosine_similarity