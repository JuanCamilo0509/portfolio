import './../styles/card.css'

function Card({ name, description, date, abr, state, link }) {
	return (
		<>
			<div className="container_studieCard">
				<div className="imgUn_container">
					{state === "projects" ? (
						<model-viewer
							className="glb_file"
							src={`Assets/3dmodels/${abr}.glb`}
							camera-controls
						/>
					) : (
						<img className='un_img' src={`/Assets/Elements/${abr}.png`} alt='' />
					)}
				</div>
				<div className="infoUn">
					<div className="descriptionUn">
						<p className="place">{name}</p>
						<p className="thing">{description}</p>
						<p className="date">{date}</p>
					</div>
					<div className="logoUn">
						<a className='un_a_img' href={link}>
							<img className='un_img_logo' src={`/Assets/Logos/${abr}.svg`} alt="" />
						</a>
					</div>
				</div>
			</div >
		</>
	)
}

export default Card
