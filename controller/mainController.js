exports.getHome = (_, res, next) => {
    res.render("index");
};

exports.getNew = (_, res) => {
    res.render("new");
};

const { body, validationResult, matchedData } = require("express-validator");

exports.postNew = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username cannot be empty")
        .escape(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).render("new", {
                errors: errors.array(),
            });
        } else {
            const { username } = matchedData(req);
            console.log(`Username to be saved: ${username}`);
            res.redirect("/");
        }
    },
];
