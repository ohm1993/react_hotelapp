var React = require('react');
import styled from 'styled-components';

var Address = React.createClass({
render: function() {
    return (
       <Header>Location-{this.props.location}</Header>
    )
  }
});

module.exports = Address;

const Header = styled.h2`
    text-align: center;
    color: #000;
    margin: 0;
    font-family: monospace;
    font-size: 16px;
    line-height: 32px;
`;
