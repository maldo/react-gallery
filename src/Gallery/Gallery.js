import React from 'react';
import './Gallery.css';
import Image from '../Image/Image.js'

class Gallery extends React.Component {

	constructor() {
		super();
		this.state = {
			images: []
		};
	}

	componentDidMount() {
		fetch('/api/photos')
			.then((response) => {
				return response.json();
			})
			.then((body) => {
				this.setState({
					images: body
				});
			});
	}

	render() {
		return (
			<div className="gallery">
				{this._handleImage()}
			</div>
		);
	}

	_handleImage() {
		return this.state.images.map((image, i)=> {
			return (
				<Image image={image} key={i}/>
			)
		});
	}
}

export default Gallery;