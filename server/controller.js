module.exports = {
    getListings: (req, res, next) => {
        const db = req.app.get('db');

        db.getListings().then(listings => res.status(200).send(listings));
    }






}