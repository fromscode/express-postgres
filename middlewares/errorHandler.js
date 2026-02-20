module.exports = (err, req, res, next) => {
    res.status(err.status || 500).render("error", { err: err });
};
