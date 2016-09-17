
var UserProfile = React.createClass({
  render: function() {
    return (
      <div className="userProfile">
        <div>Name</div>

      </div>
    );
  }
});

var Timeline = React.createClass({
  render: function() {
    return (
      <div className="timeline">
        <div>Event 1</div>
        <div>Event 2</div>
        <div>Event 3</div>
        <div>Event 4</div>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <UserProfile />
        <Timeline />
      </div>
    );
  }
});

ReactDOM.render(
  <App url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
