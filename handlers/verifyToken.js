const jwt = require('jsonwebtoken');

const secretKey = 'Pallav72218@';
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Get the token from the request headers

    if (!token) {
        return res.status(401).json({ message: 'Missing token' });
    }

    jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.userId = decoded.userId; // Store the user ID in the request object
        next();
    });
};

module.exports = { verifyToken,secretKey }