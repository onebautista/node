const express = require('express')

const app = express()
app.set('port', 3000)

const data = {
  "GH": "Success",
  "DD": "Succes",
  "UE": "Failed"
}
app.post('/', (req, res) => {
  res.json(data)
})


app.listen(app.get('port'), () => {
  console.log('server running on port', app.get('port'));
})
