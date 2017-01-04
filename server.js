const express = require('express');
const rp = require('request-promise');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(helmet())

let flickrOptions = {
	api_key: '6fd98d981b8efae4fe890c04ab5f2574',
	secret: '7512dba463e56332',
	format: 'json',
	nojsoncallback: '1',
	per_page: '25'
};

app.get('/api/photos', function (req, res) {
	const url = generateUrl(flickrOptions, 'flickr.photos.getRecent');
	console.log('Request photos to flickr');
	rp(url, {
		transform: function (body) {
	        return JSON.parse(body);
	    }
	})
	.then((resF)=>{
		console.log('SUCCESS Request photos to flickr');
		let toSend = resF.photos.photo.map((photo) => {
			return({
				title: photo.title,
				url: generatePhotoUrl(photo),
				id: photo.id,
				secret: photo.secret
			});
		});
		console.log('Sending photos through our API');
		res.send(toSend);
	})
	.catch((e) => {
		console.log(e);
		res.sendStatus(500);
	});
});

app.get('/api/photo/:id/:secret', function(req, res){
	const url = generateUrlForInfo(flickrOptions, 'flickr.photos.getInfo', req.params.id, req.params.secret);
	console.log('Request info for photo ('+ req.params.id +') to flickr');
	rp(url, {
		transform: function (body) {
	        return JSON.parse(body);
	    }
	})
	.then((resF)=>{
		console.log('SUCCESS Request info for photo ('+ req.params.id +') to flickr');
		console.log('Sending info photo through our API');
		res.send(resF);
	})
	.catch((e) => {
		console.log(e);
		res.sendStatus(500);
	});
});

/**
 * Virtual route to serve static files
 */
app.use('/static', express.static('build/static'));

/**
 * Firts request to serve the index.html 
 */
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

app.listen(8000, () => {
	console.log('Gallery app listening on port 8000!');
});

function generateUrl(obj, method) {
	return `https://api.flickr.com/services/rest/?method=${method}&api_key=${obj.api_key}&per_page=${obj.per_page}&format=${obj.format}&nojsoncallback=${obj.nojsoncallback}`;
}

function generateUrlForInfo(obj, method, id, secret) {
	return `https://api.flickr.com/services/rest/?method=${method}&api_key=${obj.api_key}&photo_id=${id}&secret=${secret}&format=${obj.format}&nojsoncallback=${obj.nojsoncallback}`;
}

function generatePhotoUrl(photo) {
	return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}