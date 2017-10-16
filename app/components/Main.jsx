var React = require('react');
var Navigation = require('Navigation');

// Stateless functional component
var Main = (props) => {
	return (
		<div>
			<div>
				<Navigation/>
				<div>
					<h1>Main.jsx rendered</h1>
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;
