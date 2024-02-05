import Contact from './modules/contact.jsx'
import HomePage from './modules/home_page.jsx'
import data from './data/data.json'
import './App.css'
import Header from './modules/header.jsx'

function App() {
	return (
		<>
			<Header title="About Me" />
			<HomePage p={data.aboutMe} />
			<Contact />
		</>
	)
}

export default App
