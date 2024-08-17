// Define the API endpoint and options
const apiUrl = 'https://type.fit/api/quotes';
const options = {
    method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
    headers: {
        'Content-Type': 'application/json',
        // Add any other necessary headers
    }
};

// Make the AJAX call
fetch(apiUrl, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        console.log(data); // Handle the data from the API
        // You can update the UI with the data here
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
