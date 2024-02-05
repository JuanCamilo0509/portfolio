import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

function Header({ title }) {
	return (
		<div className="container_header">
			<div className="title_home">
				<div className="home">
					<Link to="/">
						<img src={"/Assets/Logos/rustB.svg"} alt="" />
					</Link>
				</div>
				<div className="title">{title}</div>
			</div>
			<div className="sections">
				<p className="section">
					<Link to="/projects">
						Projects
					</Link>
				</p>
				<p className="section">
					<Link to="/education">
						Education
					</Link>
				</p>
				<p className="section">
					<Link to="/skills">
						Skills
					</Link>
				</p>
				<p className="section">
					<Link to="/experience">
						Experience
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Header;
