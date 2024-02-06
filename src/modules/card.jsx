import React from 'react';
import './../styles/card.css';

function Card({ name, description, date, img, state, link }) {
	let content;

	switch (state) {
		case "projects":
			content = (
				<model-viewer
					className="glb_file"
					src={`Assets/3dmodels/${img}.glb`}
					camera-controls
				/>
			);
			break;
		case "experience":
			content = (
				<img className='un_img' src={`/Assets/Elements/${img}.png`} alt='' />
			);
		default:
			content = (
				<img className='un_img' src={`/Assets/Elements/${img}.png`} alt='' />
			);

	}

	return (
		<div className="container_studieCard">
			<div className="imgUn_container">
				{content}
			</div>
			<div className="infoUn">
				<div className="descriptionUn">
					<p className="place">{name}</p>
					<p className="thing">{description}</p>
					<p className="date">{date}</p>
				</div>
				<div className="logoUn">
					<a className='un_a_img' href={link}>
						<img className='un_img_logo' src={`/Assets/Logos/${img}.svg`} alt="" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
