const { response } = require('express');
const express = require('express');
const { appendFile } = require('fs');
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

app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
// starts the server to begin listening 
app.listen(PORT, () => console.log(`App listening http://localhost:${PORT}`));