import Contact from './modules/contact.jsx'
import Header from './modules/header.jsx'
import Card from './modules/card.jsx'
import data from './data/data.json'
import './card_view.css'

function cards_view({ state }) {
	let cardList;

	switch (state) {
		case "projects":
			cardList = data.projects;
			break;
		case "education":
			cardList = data.studies;
			break;
		case "experience":
			cardList = data.experience;
	}

	return (
		<>
			<Header title={state} />
			<div className="container_projects">
				{cardList.map((element, index) => (
					<Card
						key={index}
						name={element.name}
						description={element.description}
						date={element.date}
						logo={element.logo}
						img={element.img}
						link={element.link}
						state={state}
					/>
				))}
			</div>
			<Contact app={data.contacts} />
		</>
	)
}

export default cards_view
