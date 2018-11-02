var React = require('react');
import styled from 'styled-components';

var Rating = React.createClass({
render: function() {
    return (
       <Header>Rating -{this.props.rating}</Header>
    )
  }
});

module.exports = Rating;

const Header = styled.h2`
    text-align: center;
    color: #d03131;
    margin: 0;
    font-family: monospace;
    font-size: 16px;
    line-height: 32px;
`;
