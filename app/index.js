/* (FIRST)
focused
independent
reusable
small
testable
*/

var React = require('react');
var ReactDOM = require('react-dom');

var ITEMS = {
	item1: "Todo1",
	item2: "Todo2"
}

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
						<li>{this.props.data.item1}</li>
						<li>{this.props.data.item2}</li>
					</ul>
				</div>
			</div>
			);
	}
});

ReactDOM.render(<App data={ITEMS}/>, document.getElementById('container'));
