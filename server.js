const express = require('express');
const app = express();


// GET method
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// POST method
app.post('/bookings', (req, res) => {
    // Handle the POST request here
    res.send('User created successfully');
});

// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
