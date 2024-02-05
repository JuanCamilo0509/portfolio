import '../styles/level.css'
function Level({ color }) {
	const startPoint = [176.0, 103.0, 88.0]; // This is one of the extreme points of the gradient.
	const finalPoint = [143.0, 167.0, 140.0]; // This is the other extreme point of the gradient.

	// Subtract vectors element-wise
	const u = finalPoint.map((a, i) => a - startPoint[i]);
	const v = startPoint;

	// Calculate t
	const t = ((color[0] - v[0]) / u[0]) * 100;

	const fillcolor = `rgb(${color.join(', ')})`;

	return (
		<div className="container_of_levels">
			<div className="level_container">
				<div className="arrow_container">
					<div className="arrow" style={{ bottom: `calc(${t}% - 0.75vw)` }} >
						<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M-7.15256e-07 0V20L20 10" fill={fillcolor} />
						</svg>
					</div>
				</div>
				<div className="level_bar_container">
					<div className="level_bar"></div>
				</div>
			</div >
		</div>
	)
}

export default Level
