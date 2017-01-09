import React from 'react';
import './Gallery.css';
import Image from '../Image/Image.js'

class Gallery extends React.Component {

	constructor() {
		super();
		this.state = {
			images: [],
			loading: false
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this._handleScroll.bind(this));
		this._getPhotos();
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this._handleScroll.bind(this));
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

	_getPhotos() {
		fetch('/api/photos')
			.then((response) => {
				return response.json();
			})
			.then((body) => {
				this.setState({
					images: this.state.images.concat(body),
					loadingFlag: false
				});
			})
			.catch(()=> {
				setTimeout(()=>{
					this.setState({loadingFlag: false});
				}, 1000);
			});
	}

	_handleScroll() {
		if ((window.innerHeight + window.scrollY) + (Math.round((1/4) * document.body.offsetHeight)) >= document.body.offsetHeight) {
			if(!this.state.loadingFlag){
				this.setState({loadingFlag:true});
				this._getPhotos();
			}
		}
	}
}

export default Gallery;