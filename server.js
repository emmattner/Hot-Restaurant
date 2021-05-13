const { response } = require('express');
const express = require('express');
const { request } = require('http');
const path = require('path');

const app = express();
const PORT =  process.env.PORT || 8080;

app.get('/', (request, response) => {
    response.sendFile(path.resolve('./index.html'));
})

const reservation = [
    {
        
    }
]

// starts the server to begin listening 
app.listen(PORT, () => console.log(`App listening http://localhost:${PORT}`));