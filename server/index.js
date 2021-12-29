const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/routes')

const PORT = 3001 

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/', router)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))