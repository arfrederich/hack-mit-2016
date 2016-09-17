
var App = React.createClass({
  render: function() {
    return (
      <div style={style} className="container">
        Anna
      </div>
    );
  }
});

ReactDOM.render(
  <App url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
