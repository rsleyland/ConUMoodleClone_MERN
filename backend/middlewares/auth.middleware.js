import jwt from 'jsonwebtoken';
import Admin from '../models/admin.model.js';


const adminOnly = async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        const userID = jwt.verify(token, process.env.JWT_SECRET)._id;
        if (userID) {
            const admin = await Admin.findById(userID);
            if (admin) {
                next();
            }
            else res.status(400).json("You are not an administrator")
        }
        else res.status(400).json("Token expired or tampered with, please re-login")
    }
    else res.status(400).json("Must be an administrator to access this api route")
};

export { adminOnly };


// course/delete/123

// {
//     "department": "COMP",
//     "code": 335,
//     "instructor": "62042c54612ab214baf126e6"
// }

// {
//     "email": "rsleyland@hotmail.co.uk",
//     "password": "unsecurepassword"
// }

// {
//     "email": "admin@admin.com",
//     "password": "unsecurepassword"
// }