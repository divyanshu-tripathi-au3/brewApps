const express = require('express')
const app = express();

//required path
const config = require('./config')
const booksRoute = require('./routes/books')

//cors setting
const cors = require('cors')
app.use(cors({ credentials: true, origin: "*" , optionsSuccessStatus : 200 }));


// body-parser setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Route configuration
app.get('/', (req, res) => res.send('Welcome to brewApps'))
app.use("/api/books", booksRoute);


app.listen(config.PORT, () => console.log(`Server is running at http://localhost:${config.PORT}`))