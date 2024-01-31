const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3002;

app.use(cors())

const mainURL = 'https://rickandmortyapi.com/api/character'

app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(mainURL)
        res.json(response.data.results)
    } catch(error) {
        res.status(500).json({message: 'No response!'})
    }
});

app.get('/characters/:name', async (req, res) => {
    const name = req.params.name
    const url = `${mainURL}/?name=${name}`
    try {
        const response = await axios.get(url)
        res.json(response.data.results)
    } catch(error) {
        res.status(404).json({message: 'No character found!'})
    }
});

app.listen(PORT, () => {
    console.log(`Backend listening http://localhost:${PORT}`)
})