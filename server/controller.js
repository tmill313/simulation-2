module.exports = {
    getListings: (req, res, next) => {
        const db = req.app.get('db');

        db.getListings().then(listings => res.status(200).send(listings));
    },
    createListing: (req, res, next) => {
        const db = req.app.get('db');

        const{body} = req;
        db.createListing(body.propName, body.propDesc, body.address, body.city, body.state, body.zip, body.imageurl, +body.loanAmount, +body.monthlyMort, +body.desiredRent)
    },
    deleteListing: (req, res, next) => {
        const db = req.app.get('db');

        const {params} = req;
        db.deleteListing(+params.id).then(listings => res.status(200).send(listings));
    },
    newUser: (req, res, next) => {
        const db = req.app.get('db');

        const{body} = req;
        db.newUser(body.username, body.password).then(() => res.status(200).send())
    }
    







}