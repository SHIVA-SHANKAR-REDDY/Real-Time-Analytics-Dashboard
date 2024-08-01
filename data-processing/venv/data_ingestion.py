# data-processing/data_ingestion.py
import requests
import pandas as pd

def send_data_to_server(data):
    url = 'http://localhost:5000/data'
    response = requests.post(url, json=data)
    if response.status_code == 200:
        print("Data sent successfully")
    else:
        print("Failed to send data")

# Simulating data ingestion
while True:
    data = {'metric': 'temperature', 'value': 25, 'timestamp': pd.Timestamp.now().isoformat()}
    send_data_to_server(data)
