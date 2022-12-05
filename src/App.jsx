import { useState } from 'react'
import './App.css'

export default function App() {

	const usernames = [
		{ id: 1, username: "a" },
		{ id: 2, username: "b" },
		{ id: 3, username: "c" },
		{ id: 4, username: "d" },
		{ id: 5, username: "e" },
		{ id: 6, username: "f" },
		{ id: 7, username: "g" },
	]

	const [data, setData] = useState(usernames);

	const handleDelete = (id) => {
		const newData = data.filter(data => data.id !== id)
		setData(newData)
	}

	return (
		<>
			<h1>List of Data</h1>
			{data.map(data => <div>{data.id}. {data.username}
				<button onClick={() => handleDelete(data.id)} >Delete</button>
			</div>
			)}
		</>
	)
}
