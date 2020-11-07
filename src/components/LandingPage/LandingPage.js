import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <section>
          <h1>FIFO Petful Adoptions</h1>
        </section>
        <section>
          <Link to="/adopt">
            <button className="lp-adopt-button">Click here to adopt</button>
          </Link>
        </section>
      </div>
    );
  }
}
