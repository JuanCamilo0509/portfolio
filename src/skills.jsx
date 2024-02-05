import Contact from './modules/contact.jsx'
import Skills from './modules/skills.jsx'
import data from './data/data.json'
import './App.css'
import Header from './modules/header.jsx'

function App() {
	return (
		<>
			<Header title="Skills" />
			<Skills data={data.skills} />
			<Contact />
		</>
	)
}

export default App
