var React = require('react');
var axios = require('axios');
var Image = require('Image');
var Title = require('Title');
var Rating = require('Rating');
var Address = require('Address');
import styled from 'styled-components';

var Shownearhotels  = React.createClass({

  getInitialState: function() {
    return {
      allhotels: []
    }
  },
  componentDidMount: function() {
   var _this = this;

    const location = window.navigator && window.navigator.geolocation
    
    if (location) {
      location.getCurrentPosition((position) => {
        var lat = position.coords.latitude.toFixed(4);
        var long = position.coords.longitude.toFixed(4);
        var encodedLat = encodeURIComponent(lat);
        var encodedLong = encodeURIComponent(long);
        console.log("lat and long value is",lat,long);
      });
      }
    this.serverRequest = 
     axios({
            url: `https://developers.zomato.com/api/v2.1/geocode?lat=12.9626&lon=77.6480`,
            method: 'get',
            headers: {
                'user-key': '8e989760d4b1a6e056306a5742dabada',
                'Content-Type': 'application/json'
            }
           })
           .then(response => {
              const meal = response.data.nearby_restaurants;
              console.log("data value is",meal);
               _this.setState({
                  allhotels: response.data.nearby_restaurants
                });
           }) 
           .catch(err => {
             console.log(err);
             // throw new Error(response.data.message);
           });
  },
  render: function() {
    return (
      <div>
        <h1>Hotels</h1>
        {this.state.allhotels.map(function(hotel) {
          return (
              <Card>
              <Image source={hotel.restaurant.featured_image} text={hotel.restaurant.name} />
              <Title title={hotel.restaurant.name} /> 
              <Rating rating={hotel.restaurant.user_rating.aggregate_rating} />
              <Address location={hotel.restaurant.location.address} />
              </Card>
          );
        })}
      </div>
    )
  }
});

module.exports = Shownearhotels;

const Card = styled.a`
  max-width: 350px;
  width: 100%;
  display: inline-block;
  border-radius: 3px;
  text-decoration: none;
  color: #000;
  margin: 0 10px 15px;
    box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
`;