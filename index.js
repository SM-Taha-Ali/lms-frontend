const connection = require('./dbconn');
var express = require('express')
var cors = require('cors')

// Connection to MongoDB
connection();
const app = express()
app.use(cors())
app.use(express.json())


// Registration Routes
app.use('/api/auth', require('./routes/auth'))

// General Domain Routes
app.use('/api/country', require('./routes/domain/general/country'))
app.use('/api/religion', require('./routes/domain/general/religion'))
app.use('/api/city', require('./routes/domain/general/city'))
app.use('/api/province', require('./routes/domain/general/province'))
app.use('/api/district', require('./routes/domain/general/district'))
app.use('/api/area', require('./routes/domain/general/area'))
app.use('/api/mother_tng', require('./routes/domain/general/mother_tng'))
app.use('/api/bloodgroup', require('./routes/domain/general/blood_grp'))

// Academics Domain Routes
app.use('/api/dclass', require('./routes/domain/student/dclass'))
app.use('/api/dgroup', require('./routes/domain/student/dgroup'))
app.use('/api/dsection', require('./routes/domain/student/dsection'))
app.use('/api/dsubgroup', require('./routes/domain/student/dsubgroup'))
app.use('/api/dsubject', require('./routes/domain/student/dsubject'))
app.use('/api/subBind', require('./routes/domain/student/subBind'))

// Fee Domain Route
app.use('/api/feedomain', require('./routes/domain/fee/feedomain'))

// Exam Domain Route
app.use('/api/examdomain', require('./routes/domain/exam/examdomain'))

// Management Routes

// Batches
app.use('/api/batches', require('./routes/management/batches/batches'))


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