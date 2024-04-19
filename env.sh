#!/bin/bash



# Activate the virtual environment
.venv/Scripts/activate

#change dir to model
cd model/src

# Run the Python script
python main.py

read -p "Press any key to continue..."