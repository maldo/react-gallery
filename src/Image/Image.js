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
			<div className="containerImage">
				<img
				src={this.props.image.url}
				className="img"
				onClick={() => this._showImage(this.props.image)}
				onMouseOver={this._mouseOver.bind(this)}
				onMouseOut={this._mouseOut.bind(this)}
				/>
				{this._handleImageOver(this.props.image)}
			</div>
		);
	}

	_handleImageOver(image) {
		if (this.state.isHover) {
			return (
				<div className="over">
					{image.id}
				</div>
			);
		} 
	}

	_mouseOver(event) {
		this.setState({isHover: true});
	}

	_mouseOut(event) {
		this.setState({isHover: false});
	}

	_showImage(image) {
		alert('Aqui la imagen en grande ' + image.id);
	}
}

export default Image;