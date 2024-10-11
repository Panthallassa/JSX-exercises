// Tweet component
function Tweet({ username, name, date, message }) {
	return (
		<div className='tweet'>
			<h3>
				{name} (@{username})
			</h3>
			<p>{message}</p>
			<small>{date}</small>
		</div>
	);
}

// App component
function App() {
	return (
		<div>
			<Tweet
				username='heheheidi'
				name='Heidi Grieser'
				date='October 1, 2024'
				message='This is my first tweet'
			/>
			<Tweet
				username='rararandy'
				name='Randy Zook'
				date='October 4, 2024'
				message='Happy Birthday Ben!!!'
			/>
			<Tweet
				username='bebeben'
				name='Ben Shore'
				date='October 9, 2024'
				message='We love React!!'
			/>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
