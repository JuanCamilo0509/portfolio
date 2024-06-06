import React, { useState } from 'react';
import '../styles/skills.css'
import Description from './description_skills';
import Level from '../modules/level'
function Skills({ data }) {
	const [rgb, setRGB] = useState([149.6, 154.2, 129.6]);
	const [app_name, setNAME] = useState("");
	const getData = function(event) {
		const color = event.currentTarget.querySelector('.color');
		const color_background = window.getComputedStyle(color).getPropertyValue('background-color');
		const [r, g, b] = color_background.match(/\d+/g);

		const urlElement = event.currentTarget.querySelector('.img_skill');
		const imgUrl = urlElement.src;
		const name = imgUrl.split('/').pop().split(".")[0];
		setNAME(name)
		setRGB([parseFloat(r), parseFloat(g), parseFloat(b)]);
	};
	return (
		<>
			<div className="grid_container">
				<Level color={rgb} />
				<div className="grid">
					{Object.entries(data).map(([app, [color, _]], index) => (
						<div key={index} onMouseOver={getData} className="skill_container">
							<div className="color" style={{ backgroundColor: color }}></div>
							<img className='img_skill' src={`/Assets/Logos/${app}.svg`} alt="" />
						</div>
					))}
				</div>
				<Description text={app_name} data={data} paint={rgb} />
			</div >
		</>
	)
}

export default Skills
