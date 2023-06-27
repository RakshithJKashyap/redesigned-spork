# Start with a base image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the backend files
COPY . /app

# Install backend dependencies
RUN pip install --no-cache-dir fastapi uvicorn
# Expose the backend port
EXPOSE 8000

# Start the backend server with uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]


