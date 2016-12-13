function qEasterEgg(req, res, next) {
  const path = req.path;
  // If path includes letter 'q'
  if (path.indexOf('q') !== -1) {

    // Render easter egg page
    res.render('q-easter-egg');
  }
  else {

    next();

  }
}
module.exports = qEasterEgg
