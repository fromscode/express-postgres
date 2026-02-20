class notFoundError extends Error {
    constructor(string) {
        super(string);
        this.status = 404;
    }
}

module.exports = (req, res, next) => {
    next(new notFoundError("Cannot find the resource you were looking for"));
};
