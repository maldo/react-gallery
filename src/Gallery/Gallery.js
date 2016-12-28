import React from 'react';
import './Gallery.css';
import Image from '../Image/Image.js'

class Gallery extends React.Component {

	constructor() {
		super();
		this.state = {
			images: [
				{url: 'https://c6.staticflickr.com/1/261/31759510341_dd20e9859e_n.jpg', id: 1},
				{url: 'https://c1.staticflickr.com/1/546/31489432360_be65f69fce_n.jpg', id: 2},
				{url: 'https://c1.staticflickr.com/1/764/31846051296_d3f8038f35_n.jpg', id: 3},
				{url: 'https://c4.staticflickr.com/1/703/31888213035_6114b01797_n.jpg', id: 4},
				{url: 'https://c8.staticflickr.com/2/1538/26644267191_e1ff076b81_n.jpg', id: 5},
				{url: 'https://c1.staticflickr.com/1/324/31056295944_2478dd1f83_n.jpg', id: 6},
				{url: 'https://c6.staticflickr.com/1/501/31909693885_83377e6856_n.jpg', id: 7},
				{url: 'https://c6.staticflickr.com/1/381/31084753413_8b872b2db7_n.jpg', id: 8},
				{url: 'https://c5.staticflickr.com/1/782/31746988892_d53420b14a_n.jpg', id: 9},
				{url: 'https://c6.staticflickr.com/1/261/31759510341_dd20e9859e_n.jpg', id: 10}
			]
		};
	}

	render() {
		return (
			<div className="gallery">
				{this._handleImage()}
			</div>
		);
	}

	_handleImage() {
		return this.state.images.map((image)=> {
			return (
				<Image image={image} key={image.id}/>
			)
		});
	}
}

export default Gallery;