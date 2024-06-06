import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

function Header({ title }) {
	function capitalization(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	return (
		<div className="container_header">
			<div className="title_home">
				<div className="home">
					<img src={"/Assets/Logos/Brand.svg"} alt="" />
				</div>
				<div className="title">{capitalization(title)}</div>
			</div>
			<div className="sections">
				<Link to="/">
					<div className="section">
						<p>
							About me
						</p>
					</div>
				</Link>
				<Link to="/skills">
					<div className="section">
						<p>
							Skills
						</p>
					</div>
				</Link>
				<Link to="/projects">
					<div className="section">
						<p>
							Projects
						</p>
					</div>
				</Link>
				<Link to="/education">
					<div className="section">
						<p>
							Education
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
