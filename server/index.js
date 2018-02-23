const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./controller');

const app = express();
const port = 3030;

const connectionString='postgres://vhzaqgeraqdnqb:7a88163c55f0315516a93d9d3415f4ed679c5c625ab2433510cd3b489407eee9@ec2-107-22-175-33.compute-1.amazonaws.com:5432/d5e2jq9ev8likl?ssl=true';

app.use(bodyParser.json());
app.use(cors());


app.get('/listings', ctrl.getListings)
app.post('/createListing', ctrl.createListing)
app.delete('/deleteListing/:id', ctrl.deleteListing)
app.post('/newUser', ctrl.newUser)











massive(connectionString).then(db => {
    app.set('db', db);
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})