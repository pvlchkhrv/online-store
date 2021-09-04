const { decode } = require("jsonwebtoken");

module.exports = function(role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }
    try {
      const token = req.headers.authorizationt.split(' ')[1] // Bearer sasdasdasdads
      if (!token) {
        return res.status(401).json({ message: "authorization" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({message: 'Access denied'})
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ message: 'No authorization' });
    }
  }
}

