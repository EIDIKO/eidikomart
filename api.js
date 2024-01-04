// Require the necessary modules
import fetch from 'node-fetch';

// Define a function to make HTTP GET requests and return JSON responses
export async function getJsonData(url) {
  try {
    // Make the GET request
    const response = await fetch(url);

    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const jsonData = await response.json();

    // Return the parsed JSON data
    return jsonData;
  } catch (error) {
    // Handle any errors that occurred during the request
    // eslint-disable-next-line no-console
    console.error('Error making GET request:', error.message);
    throw error;
  }
}

