import Data from '../data/data.json';
import '../styles/contact.css';

function Contact() {
	let copiar = (app) => {
		let texto;
		let mensaje;
		switch (app) {
			case "discord": {
				texto = Data.contacts.discord;
				mensaje = "The id name of Discod has been copied"
				break;
			}
			case "gmail": {
				texto = Data.contacts.gmail;
				mensaje = "The gmail address has been copied"
				break;
			}
			default: {
				texto = "";
				break;
			}
		}
		navigator.clipboard.writeText(texto).then(function() {
			alert(mensaje);
		}).catch(function(err) {
			console.error('No se pudo copiar al portapapeles: ', err);
		});
	};

	return (
		<div className="container_contacts">
			<div onClick={() => copiar("discord")} className="link_contact">
				<img className='contact_image' src={`Assets/Logos/discord.svg`} alt="Discord" />
			</div>
			<div onClick={() => copiar("gmail")} className="link_contact">
				<img className='contact_image' src={`Assets/Logos/gmail.svg`} alt="Gmail" />
			</div>
			<a className="link_contact" href={Data.contacts.githubB}>
				<img className='contact_image' src={`Assets/Logos/Github.svg`} alt="GitHub" />
			</a>
		</div>
	);
}

export default Contact;
