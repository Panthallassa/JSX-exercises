// Person Comoponent
function Person({ name, age, hobbies }) {
	const displayName =
		name.length > 8 ? name.slice(0, 6) : name;

	return (
		<div className='person'>
			<p className='heading'>
				Learn some information about this person:
			</p>
			<h2>Name: {displayName}</h2>
			<p>Age: {age}</p>

			{age >= 18 ? (
				<h3>Please go vote!</h3>
			) : (
				<h3>You must be 18.</h3>
			)}

			<h4>Hobbies:</h4>
			<ul>
				{hobbies.map((hobby, index) => (
					<li key={index}>{hobby}</li>
				))}
			</ul>
		</div>
	);
}

// App component
function App() {
	return (
		<div>
			<Person
				name='Des'
				age={17}
				hobbies={["Drawing", "Video games "]}
			/>
			<Person
				name='Bryn'
				age='28'
				hobbies={["Coding", "Bird Watching"]}
			/>
			<Person
				name='Lana'
				age='22'
				hobbies={["Salsa", "RC airplane flying"]}
			/>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
