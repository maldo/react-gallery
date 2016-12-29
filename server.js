const express = require('express');
const rp = require('request-promise');

const app = express();

const flickrOptions = {
	api_key: '6fd98d981b8efae4fe890c04ab5f2574',
	secret: '7512dba463e56332',
	format: 'json',
	method: 'flickr.photos.getRecent',
	nojsoncallback: '1',
	per_page: '50'
};

app.get('/photos', function (req, res) {
	const url = generateUrl(flickrOptions);
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
				url: generatePhotoUrl(photo)
			});
		});
		console.log('Sending photos through our API');
		res.send(toSend);
	});
});

app.listen(8000, () => {
	console.log('Gallery app listening on port 8000!');
});

function generateUrl(obj) {
	return `https://api.flickr.com/services/rest/?method=${obj.method}&api_key=${obj.api_key}&per_page=${obj.per_page}&format=${obj.format}&nojsoncallback=${obj.nojsoncallback}`;
}

function generatePhotoUrl(photo) {
	return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}