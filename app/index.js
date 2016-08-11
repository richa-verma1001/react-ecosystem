var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
	render: function(){
		return (
			<div className="panes">
				<div className="leftPane">
				<input />
				<button className="button">NoActionBtn</button>
				</div>
				<div className="rightPane">
					<ul>
						<li>Item1</li>
						<li>Item2</li>
					</ul>
				</div>
			</div>
			);
	}
});

ReactDOM.render(<App />, document.getElementById('container'));
