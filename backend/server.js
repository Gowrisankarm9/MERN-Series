import express from "express";
import notes from './data/notes.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config()
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('API is running..');
})

app.get('/api/notes', (req,res) =>{
    res.json(notes);
})

app.get('/api/notes/:id', (req,res) =>{
    const node = notes.find((n) => n._id === req.params.id)
    res.send(node);
})

app.listen(port, () => console.log(`listening on local host ${port}`));