var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();
      alert('Not yet wired up!');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Hotel App</li>
            <li>
              <IndexLink to="/login" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</IndexLink>
            </li>
            <li>
              <Link to="/shownearbyhotels" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Hotels</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
