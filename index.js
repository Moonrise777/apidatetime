const express = require('express');
const moment = require('moment');
const cors = require("cors");
const bodyParser = require("body-parser"); 
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/public/'));

app.get('/', (req, res) => {
    const now = moment();
    const data = {
        date: now.format('YYYY-MM-DD'),
        time: now.format('HH:mm:ss')
    };
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
