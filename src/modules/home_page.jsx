import '../styles/home_page.css'
import data from '../data/data.json'
function Home_Page() {
	return (
		<>
			<div className="container_homepage">
				<div className="container_profile_img">
					<div className="img_profile">
						<img src={data.aboutMe.image} />
					</div>
				</div>
				<div className="description">
					<div className="separator">
						<h1 className="title">About Me</h1>
						<div className="name">Juan Camilo Guevara Hernández</div>
					</div>
					<div className="language_p">
						<div className="languages">
							{
								data.aboutMe.country.map((country) => {
									return (
										<div className="language">
											<img className='img_language' src={`/Assets/Flags/${country}.svg`} />
										</div>
									)
								})
							}
						</div>
						<div className="parrafo">
							{data.aboutMe.description}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home_Page
