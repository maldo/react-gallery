import React from 'react';
import './Image.css';
import { Modal } from 'react-overlays';

class Image extends React.Component {
	constructor(){
		super();

		this.state = {
			isHover: false,
			showModal: false
		}
	}

	render() {
		return(
			<div className="containerImage"
			onClick={this._showImage.bind(this)}
			data-title={this.props.image.title}>
				<img
					src={this.props.image.url}
					alt={this.props.image.title}
					className="img"
				/>
				<Modal
					aria-labelledby='modal-label'
					style={this.modalStyle}
					backdropStyle={this.backdropStyle}
					show={this.state.showModal}
					onHide={this._closeImage.bind(this)}
					>
					<div style={this.dialogStyle()} >
						<h2 id='modal-label'>{this.props.image.title}</h2>
						<h4 className="subtitle">Photo taken by {this.props.image.username} on {this.props.image.date}</h4>
						<img
							src={this.props.image.url}
							alt={this.props.image.title}
							className="img"
						/>
					</div>
				</Modal>
			</div>
		);
	}

	_handleImageOver() {
		if (this.state.isHover) {
			return (
				<div>
					{this.props.image.id}
				</div>
			);
		} 
	}

	_showImage() {
		fetch(`/api/photo/${this.props.image.id}/${this.props.image.secret}`)
			.then((response) => {
				return response.json();
			})
			.then((body) => {
				this.props.image.date = body.photo.dates.taken;
				this.props.image.username = body.photo.owner.realname || body.photo.owner.username;
				this.setState({ showModal: true });
			})
			.catch(()=> {
				setTimeout(()=>{
					this.setState({loadingFlag: false});
				}, 1000);
			});
	}

	_closeImage() {
		this.setState({ showModal: false });
	}

	modalStyle = {
		position: 'fixed',
		zIndex: 1040,
		top: 0, bottom: 0, left: 0, right: 0
	};

	backdropStyle = {
		...this.modalStyle,
		zIndex: 'auto',
		backgroundColor: '#000',
		opacity: 0.5
	};

	dialogStyle() {
		let top = 50;
		let left = 50;

		return {
			position: 'absolute',
			top: top + '%', left: left + '%',
			transform: `translate(-${top}%, -${left}%)`,
			border: '1px solid #e5e5e5',
			backgroundColor: 'white',
			boxShadow: '0 5px 15px rgba(0,0,0,.5)',
			padding: 20
		};
	};
}

export default Image;