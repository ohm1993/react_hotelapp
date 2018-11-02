var React = require('react');
import styled from 'styled-components';

var Title = React.createClass({
render: function() {
    return (
       <Header>{this.props.title}</Header>
    )
  }
});

module.exports = Title;

const Header = styled.h2`
    text-align: center;
    color: #000;
    margin: 0;
    font-family: monospace;
    font-size: 24px;
    line-height: 32px;
`;
