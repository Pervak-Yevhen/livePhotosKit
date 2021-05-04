const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 3001;


app.get('/file', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Content-Type', 'video/mp4');
	fs.readFile('./livePhotos_video.mov', (err, data) => {
	  	res.send(data);
	})
})


app.get('/image', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	fs.readFile('./livePhotos_img.jpeg', (err, data) => {
	  	res.send(data);
	})
})


app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})