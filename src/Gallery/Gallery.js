import React from 'react';
import './Gallery.css';
import Image from '../Image/Image.js';
import Infinte from 'react-infinite';

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
			<Infinte
				elementHeight={360}
				useWindowAsScrollContainer
				infiniteLoadBeginEdgeOffset={200}
				onInfiniteLoad={this._handleInfiniteLoad.bind(this)}>
				<div className="gallery">
					{this._handleImage()}
				</div>
			</Infinte>
		);
	}

	_handleInfiniteLoad() {
		this.setState({
            isInfiniteLoading: true
        });
		fetch('/api/photos')
			.then((response) => {
				return response.json();
			})
			.then((body) => {
				this.setState({
					isInfiniteLoading: false,
					images: this.state.images.concat(body)
				});
			});
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