const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Olá mundo')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}...`)
})