import React from 'react';
import './../styles/card.css';

function Card({ name, description, date, img, logo, state, link }) {
	let content;
	switch (state) {
		case "projects":
			content = (
				<model-viewer
					className="glb_file"
					src={`Assets/3dmodels/${img}`}
					camera-controls
				/>
			);
			break;
		case "experience":
			content = (
				<img className='image_section' src={`/Assets/Elements/${img}.png`} alt='' />
			);
		default:
			content = (
				<img className='image_section' src={`/Assets/Elements/${img}`} alt='' />
			);

	}
	return (
		<div className="container_section_card">
			<div className="visual_container">
				{content}
			</div>
			<a className='a_container_info_section' href={link}>
				<div className="container_info_section">
					<div className="info_section">
						<div className="logo_section">
							<img className='section_img_logo' src={`/Assets/Logos/${logo}`} alt="" />
						</div>
						<div className="description_section">
							<p className="place">{name}</p>
							<p className="thing">{description}</p>
							<p className="date">{date}</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}

export default Card;
