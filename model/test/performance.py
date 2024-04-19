# Assume we have a list of actual items the user interacted with
actual = ['Galle', 'Bentota', 'Mirissa']

# Assume we have a list of items recommended by the system
recommended = ['Galle', 'Galle', 'Bentota']

# Calculate precision and recall
precision = len(set(recommended) & set(actual)) / len(set(recommended))
recall = len(set(recommended) & set(actual)) / len(set(actual))

print(f'Precision: {precision}')
print(f'Recall: {recall}')