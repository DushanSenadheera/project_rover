import json
import sys

fnum = int(sys.argv[1])
snum = int(sys.argv[2])

# calculate something
result1 = fnum + snum
result2 = fnum * snum

# print the results as a JSON string
print(json.dumps(
    {
        "sum": result1, 
        "product": result2,
        "test": "dasd"
    }
))