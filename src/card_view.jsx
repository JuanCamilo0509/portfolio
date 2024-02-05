import Contact from './modules/contact.jsx'
import Header from './modules/header.jsx'
import Card from './modules/card.jsx'
import data from './data/data.json'
import './card_view.css'

function cards_view({ state }) {
	return (
		<>
			<Header title={state} />
			<div className="container_projects">
				<div className="padding_container">
					{state === "Projects" ? (
						data.projects.map((element, _) => {
							return (
								<Card name={element.name} description={element.description} date="" abr={element.name} state="projects" link={"./"} />
							)
						})
					) : (
						data.studies.map((element, _) => {
							return (
								<Card name={element.name} description={element.thing} date={element.date} abr={element.abr} state="studies" link={"./"} />
							)
						})
					)}
				</div>
				<Contact app={data.contacts} />
			</div>
		</>
	)
}

export default cards_view
