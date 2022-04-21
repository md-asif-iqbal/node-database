const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 8080
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World its mee &You!')
  })
  const users = [
    {
            id:1,
            name:'sabana',
            email:'sabana@gmail.com',
            phone:'01715778820'
    },
    {
            id:2,
            name:'sabnor',
            email:'sabana103@gmail.com',
            phone:'01715778824'
    },
    {
            id:3,
            name:'Purnima',
            email:'purnima104@gmail.com',
            phone:'01715778825'
    },
    {
            id:4,
            name:'sabana mobin',
            email:'sabana105@gmail.com',
            phone:'01715778810'
    },
    {
            id:5,
            name:'Purnima mobins',
            email:'sabana103@gmail.com',
            phone:'01715778814'
    },
    {
            id:6,
            name:'sabana husband mobin',
            email:'sabana104@gmail.com',
            phone:'01715778815'
    }
  ]
  app.get('/users',(req , res ) =>{
          console.log('query',req.query);
      if(req.query.name){
        //       filter by search query /..'.''.'.'
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
      }
      else{
        res.send(users)
      }
  })
  app.get('/user/:id', (req ,res) =>{
    
    const id = parseInt(req.params.id);
    const user= users.find(u => u.id===id);
    res.send(user);
    console.log(user);
  })
  app.post('/user', (req , res ) =>{
          const user=req.body;
          user.id = users.length+1;
          users.push(user);
          res.send(user);
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
