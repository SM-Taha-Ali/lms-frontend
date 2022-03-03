const connection = require('./dbconn');
var express = require('express')
var cors = require('cors')

// Connection to MongoDB
connection();
const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/auth', require('./routes/auth'))
app.use('/api/country', require('./routes/country'))
app.use('/api/religion', require('./routes/religion'))

const PORT = process.env.PORT || 5000

// if (process.env.NODE_ENV == "production"){
//   app.use(express.static("client/build"))
//   const  path = require("path");
//   app.get("*", (req,res)=> {
//     res.sendFile(path.resolve(__dirname,"client","build","index.html"));
//   })
// }

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})