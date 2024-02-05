import React, { useState } from 'react';
import '../styles/skills.css'
import Level from '../modules/level'
function Skills({ data }) {
	const [rgb, setRGB] = useState([149.6, 154.2, 129.6]);
	const obtenerColor = function(event) {
		const color = event.currentTarget.querySelector('.color');
		const color_background = window.getComputedStyle(color).getPropertyValue('background-color');

		// Extraer los componentes RGB del color obtenido
		const [r, g, b] = color_background.match(/\d+/g);

		// Actualizar el estado con el nuevo color RGB
		setRGB([parseFloat(r), parseFloat(g), parseFloat(b)]);
	};
	return (
		<>
			<Level color={rgb} />
			<div className="grid_container">
				<div className="grid">
					{Object.entries(data).map(([app, color], index) => (
						<div key={index} onMouseOver={obtenerColor} className="skill_container">
							<div className="color" style={{ backgroundColor: color }}></div>
							<img className='img_skill' src={`/Assets/Logos/${app}.svg`} alt="" />
						</div>
					))}
				</div>
			</div >
		</>
	)
}

export default Skills
