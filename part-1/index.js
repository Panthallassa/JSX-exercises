// First component, renders and h1 with text
function FirstComponent() {
	return <h1>My very first component</h1>;
}

// Named component, acceots a "name" prop and displays it
function NamedComponent(props) {
	return <p>My name is {props.name}</p>;
}

// App component, renders FirstComponent and NamedComponent
function App() {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name='John' />
		</div>
	);
}

// Render App component
ReactDOM.render(<App />, document.getElementById("root"));
