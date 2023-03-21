const express = require('express')
const app = express()

const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World! I am ASMAE ELAZRAK')
  })

app.listen(port,()=>{
    console.log(console.log(`Server running on port ${port}`))
})
