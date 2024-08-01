# Use an official python image as the base image
FROM python:3.8

# Set the working directory
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (if needed)
EXPOSE 6000

# Start the application
CMD ["python", "data_ingestion.py"]
