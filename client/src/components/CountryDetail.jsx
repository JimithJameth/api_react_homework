import React from 'react';

class CountryDetail extends React.Component {
  render(){
    if(!this.props.country){
      return null;
    }
    return (
      <div>
      <h3>{this.props.country.name}</h3>
      <h3>{this.props.country.capital}</h3>
      <img src={this.props.country.flag}/>
      </div>
    );
  }
}

module.exports = CountryDetail;
