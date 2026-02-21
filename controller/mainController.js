const db = require("../db/queries");

exports.getHome = async (_, res) => {
    const usernames = await db.getAllUsernames();
    res.render("index", { usernames: usernames });
};

exports.getNew = (_, res) => {
    res.render("new");
};

const { body, validationResult, matchedData, query } = require("express-validator");

exports.postNew = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username cannot be empty")
        .escape(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).render("new", {
                errors: errors.array(),
            });
        } else {
            const { username } = matchedData(req);
            await db.insertUsername(username);
            res.redirect("/");
        }
    },
];

exports.getSearch = [
    query('param')
        .notEmpty().withMessage('Search field cannot be empty')
        .escape(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).render('search', { errors: errors.array(), results: [] })
        }
        else {
            const { param } = req.query;
            const rows = await db.searchUser(param);
            res.render('search', { results: rows });
        }
    }
]
