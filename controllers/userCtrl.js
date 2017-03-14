var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {

  login:function(req, res, next){
    users.forEach(function(element){
      console.log('this is req.body', req.body)
      // console.log('this is element', element);
      // console.log('this is index', index)
      // console.log('this is element.name', element.name)
      if(element.name === req.body.name && element.password === req.body.password){
        req.session.currentUser = element;
        console.log('this is req.session.currentUser', req.session.currentUser)
        next()
      }

    })
      res.send({ userFound: false });
  },
  userName: function(req,res,next){
    res.send({ userFound: true,
                currentUser: req.session.currentUser});
  }

}
