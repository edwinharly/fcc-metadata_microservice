'use strict';
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.post('/get-file-size', upload.single('file'), (req, res) => {
     let data = req.file;
     console.log(data);
     res.send({
         "size":data.size.toString()
     });
});

app.listen(process.env.PORT || 8080, (req, res) => {
    console.log('Server is running on port 8080');
});