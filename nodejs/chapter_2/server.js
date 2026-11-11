// The address of this server connected to the network is: 
// URL http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383

let data = ['Hong Dyhengmesa']

// Middleware
app.use(express.json())



/* Type 1 -
  Website endpoints (these endpoint are for sending back html and they
  typically code when a user enters a url in a broswer)
*/
app.get('/', (req, res) =>{
    res.send(`
       <body style="background:pink; color:blue;">
          <h1>
            Data:
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
          </h1>
       </body>
    `)
})

app.get('/dashboard', (req, res) =>{
    console.log('User requested the home page website')
    res.send(`
        <body>
           <h1>dashboard</h1>
           <a href="/">Home</a>
        </body>
        <script>console.log('This is my script')</script>
        `)
})

// Type 2 - API endpoints
// CRUD-method - create-post read-get update-put and delete-delete
app.get('/api/data', (req, res) =>{
    console.log("This was a data");
    res.status(201).send(data)
})

app.post('/api/data', (req, res) =>{
    // someone wants to create a user (for example when they click a sign up button)
    const newEntry = req.body;
    console.log(newEntry)
    data.push(newEntry.nameUser)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) =>{
    data.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))