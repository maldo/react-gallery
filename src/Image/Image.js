import React from 'react';
import './Image.css';

class Image extends React.Component {
	constructor(){
		super();

		this.state = {
			isHover: false
		}
	}

	render() {
		return(
			<div className="containerImage"
			onClick={() => this._showImage(this.props.image)}
			data-title={this.props.image.title}>
				<img
				src={this.props.image.url}
				className="img"
				/>
			</div>
		);
	}

	_handleImageOver(image) {
		if (this.state.isHover) {
			return (
				<div>
					{image.id}
				</div>
			);
		} 
	}

	_showImage(image) {
		alert('Aqui la imagen en grande ' + image.title);
	}
}

export default Image;