const fs = require('fs');
module.exports = function (req, res, next) {
  
   if(req.method==="GET" && req.path === "/check" && req.query.hasOwnProperty('obj')) {
     fs.stat(req.query.obj, (err, stats) => {
      if (err) { 
        next(err);
       } else  
         res.status(200).json({"obj": req.query.obj,"mtime":stats.mtime});
      });
    } else  next();
}
