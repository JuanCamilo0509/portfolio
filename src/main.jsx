import React from 'react'
import Card_view from './card_view.jsx'
import ReactDOM from 'react-dom/client'
import Skills from './skills.jsx'
import Home_Page from './homePage.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
	{
		path: '/',
		element: <Home_Page />
	},
	{
		path: '/skills',
		element: <Skills />
	},
	{
		path: '/projects',
		element: <Card_view state="projects" />
	},
	{
		path: '/education',
		element: <Card_view state="education" />
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
