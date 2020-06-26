const express = require("express");
const app = express();
const cors = require("cors");
const { check, validationResult } = require("express-validator");

app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 8080;

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.post(
  "/contact",
  [
    check('email').isEmail().withMessage('Must be valid email'),
    check('message').isLength({ min: 30 }).withMessage("Message must be at least 30 chars long")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     return res.status(422).json(errors)
    }
    res.json({ message: "We collect your data" });
  }
);

app.listen(PORT, () => {
  console.log("SERVER IS STARTING ON PORT ", 8080);
});
