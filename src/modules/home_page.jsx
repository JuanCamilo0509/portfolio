import '../styles/home_page.css'
function Home_Page({ p }) {
	return (
		<>
			<div className="container_homepage">
				<div className="container_profile_img">
					<div className="img_profile">
						<img src="/Assets/Elements/profile_image.png" />
					</div>
				</div>
				<div className="description">
					<div className="separator">
						<h1 className="title">About Me</h1>
						<div className="name">Juan Camilo Guevara Hernández</div>
					</div>
					<div className="language_p">
						<div className="languages">
							<div className="language"><img className='img_language' src="/Assets/Flags/German.svg" alt="" /></div>
							<div className="language"><img className='img_language' src="/Assets/Flags/UK.svg" alt="" /></div>
							<div className="language"><img className='img_language' src="/Assets/Flags/colombia.svg" alt="" /></div>
						</div>
						<div className="parrafo">
							{p}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home_Page
