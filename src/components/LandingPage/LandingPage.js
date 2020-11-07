import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <section className="info">
          <h1>FIFO Petful Adoptions</h1>
          <img
            src="https://media.istockphoto.com/photos/young-dog-hugging-a-cat-as-friends-in-white-background-picture-id160389127"
            alt="A dog and cat sitting nicely next to each other"
          ></img>
          <p>
            FIFO Petful Adoptions is a First In First Out pet adoption service!
            That means every pet finds a home and both you and the pet don't
            have to wait long to be matched.
          </p>
          <p className="question">Neat! How do I adopt?</p>
          <p>
            It's simple... Start by clicking the button below to go to the{' '}
            <a href="/adopt">adoption page</a>. Add you name to the list, wait
            your turn, then click to adopt a cat or a dog!
          </p>
        </section>

        <section className="buttons">
          <Link to="/adopt">
            <button className="landing-adopt">Adopt!</button>
          </Link>
        </section>
      </div>
    );
  }
}
