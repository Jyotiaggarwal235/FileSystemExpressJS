const express = require('express');  
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//create a file
app.post('/personInfo', function (req, res) {  
    fs.writeFile('person.txt', req.body.name, function (err) {
        if (err) return console.log(err);
      });
    res.send(`${req.body.name} is saved to file`);  
 }) 
 
//read file
app.get('/personInfo', function (req, res) { 

    fs.readFile('person.txt', (err, data) => {
        if (err) {
          console.error(err)
          
        }
            res.send(data);
      })
  
})
 
//delete  a file
 app.delete('/personInfo', function (req, res) {  

    fs.unlink('person.txt', function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
    }); 
    res.send('File Deleted!!!');  
 })  


 //update a file
 app.put('/personInfo', function (req, res) {  
    fs.appendFile('person.txt', 'Aggarwal', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    res.send('Aggarwal');  
 })  ;

 app.listen(9000,()=>{
    console.log("listening on port 9000");
  });