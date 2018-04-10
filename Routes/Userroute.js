module.exports = (app,users,router)=>{
  
  app.use('/api', router);
  router.route('/user')
    .get((req,res)=>{
      res.send(users)
      //READ
    })
    .post((req,res)=>{
      const {name,surname,job} = req.body
      if(!name&&!surname&&!job){
        res.send('data is not provide');
      }
      console.log(req.body);
        const id = users.length + 1;
        var user = {};
        user.id = id;
        user.name = name;
        user.surname = surname;
        user.job =job;
        users.push(user);
       res.send(users);
       //CREATE
    })
  router.route('/user/:id')
    .get((req,res)=>{
      const {id} = req.params
     
     const result =  users.filter(data=>data.id == id)
      res.send(result);
    })
    .put((req,res)=>{
      const {name,surname,job} = req.body
      if(!name&&!surname&&!job){
        res.send('data is not provide');
      }
      const {id} = req.params
      const index = id - 1
      users[index].name = name
      users[index].surname = surname
      users[index].job = job
      res.send(users)
    
    })
    .delete((req,res)=>{
    const {id} = req.params
      var removeIndex = users.map(function(item) { return item.id; }).indexOf(id);
      users.splice(removeIndex, 1);
      res.send(users)
    
    
    })
}