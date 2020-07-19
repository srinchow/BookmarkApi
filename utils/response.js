module.exports = (req, res, next) => {
    res.sendError = (err, msg = 'Internal server error', status = 200) => {
      err && console.log('[ERROR] ', err);
      console.log(msg);
      res.status(200).send({ success: false, msg });
    };
    res.sendSuccess = (data, msg, status = 200) => {
      console.log(msg);
      let user = req.user;
      if(user) {
        user.password = undefined;
        user.token = undefined;
        delete user.token;
        delete user.password;
      }
      res.status(200).send({ success: true, msg, ...(data && { data }), ...(user && { user }) });
    };
    next();
  };
  