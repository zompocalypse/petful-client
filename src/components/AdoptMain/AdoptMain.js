import React, { Component } from 'react';
import PetfulApiService from '../../services/petful-api-service';

export default class AdoptMain extends Component {
  state = {
    error: null,
    dogs: [],
    cats: [],
    people: [],
    loggedInUser: '',
  };
  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}
