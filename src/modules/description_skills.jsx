import '../styles/skills.css';

function Description({ text, data, paint }) {
	const value = data[text] ? data[text][1] : "Hover an item";
	const fillcolor = `rgb(${paint.join(', ')})`;

	return (
		<>
			<div className="skill_description">
				<h2 style={{ color: fillcolor }}>{text}</h2>
				<p>{value}</p>
			</div>
		</>
	);
}

export default Description;
