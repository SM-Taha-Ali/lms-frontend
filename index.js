const connection = require('./dbconn');
var express = require('express')
var cors = require('cors')

// Connection to MongoDB
connection();
const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/auth', require('./routes/auth'))
app.use('/api/country', require('./routes/domain/general/country'))
app.use('/api/religion', require('./routes/domain/general/religion'))
app.use('/api/dclass', require('./routes/domain/student/dclass'))
app.use('/api/dgroup', require('./routes/domain/student/dgroup'))
app.use('/api/dsection', require('./routes/domain/student/dsection'))
app.use('/api/dsubgroup', require('./routes/domain/student/dsubgroup'))
app.use('/api/feedomain', require('./routes/domain/fee/feedomain'))

const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"))
  const  path = require("path");
  app.get("*", (req,res)=> {
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
  })
}

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})