import jwt from 'jsonwebtoken';

const setUserIDFromCookie = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        const userID = jwt.verify(token, process.env.JWT_SECRET)._id;
        if (userID) {
            req.body.userID = userID;
            next();
        }
        else res.status(400).json("Token expired or tampered with, please re-login")
    }
    else res.status(400).json("Must be an logged in to request this api route")
};

export { setUserIDFromCookie };