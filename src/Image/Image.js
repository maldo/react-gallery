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
			<div className="containerImage" onClick={() => this._showImage(this.props.image)}>
				<img
				src={this.props.image.url}
				className="img"
				/*onClick={() => this._showImage(this.props.image)}*/
				/*onMouseOver={this._mouseOver.bind(this)}
				onMouseOut={this._mouseOut.bind(this)}*/
				data-content="5"
				/>
				{/*this._handleImageOver(this.props.image)*/}
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