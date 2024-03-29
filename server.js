const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 1,
        'birthName': 'who cares',
        'birthLocation': 'London, England' 
    },
    'rapper 2': {
        'age': 2,
        'birthName': 'Rapper Name 2',
        'birthLocation': 'Somewhere, USA' 
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown' 
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()

    if (rappers[rapperName]) {
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
    }

})

app.listen(process.env. PORT || PORT, () => {
    console.log(`The server is now running on ${PORT}`)
})