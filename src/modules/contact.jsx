import Data from '../data/data.json'
import '../styles/contact.css'
function Contact() {
	return (
		<div className="container_contacts">
			{Object.entries(Data.contacts).map(([app, link]) => {
				return (
					<>
						<a className="link_contact" href={link}>
							<img className='contact_image' src={`/Assets/Logos/${app}.svg`} />
						</a>
					</>
				)
			})}
		</div>
	)
}

export default Contact
