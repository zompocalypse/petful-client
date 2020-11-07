import React, { Component } from 'react';
import PetfulApiService from '../../services/petful-api-service';

import './AdoptMain.css';

export default class AdoptMain extends Component {
  state = {
    error: null,
    dogs: [],
    cats: [],
    people: [],
    loggedInUser: '',
    name: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ error: null });
    this.setState({ loading: true });

    PetfulApiService.getPeople()
      .then((res) => {
        this.setState({
          people: res,
        });
      })
      .catch((res) => this.setState({ error: res.error }));

    PetfulApiService.getPets()
      .then((res) => {
        this.setState({
          dogs: res.dogs,
          cats: res.cats,
          loading: false,
        });
      })
      .catch((res) => this.setState({ error: res.error }));
  }

  renderPeopleQueue = () => {
    let queueOfPeople = [];
    for (let i = 0; i < this.state.people.length; i++) {
      if (i === 0) {
        queueOfPeople.push(<h3 key={i}>~ {this.state.people[i]} ~</h3>);
      } else {
        queueOfPeople.push(<p key={i}>{this.state.people[i]}</p>);
      }
    }
    if (this.state.people.length === 1) {
      this.addMorePeopleToQueue();
    }
    return queueOfPeople;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddToList = (e) => {
    e.preventDefault();
    PetfulApiService.addPerson(this.state.name).then((res) => {
      this.setState({
        people: [...this.state.people, res],
        loggedInUser: res,
        name: '',
      });
    });

    this.timeout = setInterval(() => {
      let dogOrCat = Math.floor(Math.random() * 2);
      let type;
      if (dogOrCat === 0) {
        type = 'dog';
      } else {
        type = 'cat';
      }

      PetfulApiService.removePetAndPerson(type).then((res) => {
        PetfulApiService.getPets()
          .then((res) => {
            this.setState({
              dogs: res.dogs,
              cats: res.cats,
            });
          })
          .catch((res) => this.setState({ error: res.error }));
        PetfulApiService.getPeople()
          .then((res) => {
            this.setState({
              people: res,
            });
          })
          .catch((res) => this.setState({ error: res.error }));
      });
    }, 5000);
  };

  addMorePeopleToQueue = () => {
    let addNewPeopleTimer = setTimeout(() => {
      if (this.state.people === 5) {
        clearTimeout(addNewPeopleTimer);
      }

      const randomPeople = [
        'Julian',
        'Ricky LaFleur',
        'Bubbles',
        'Detroit Velvet Smooth',
        'Treena Lahey',
        'Sam Losco',
        'J-Roc',
        'Test Person',
      ];

      const randomPerson =
        randomPeople[Math.floor(Math.random() * randomPeople.length)];

      if (this.state.people.length < 5) {
        PetfulApiService.addPerson(randomPerson)
          .then((res) => {
            this.setState({
              people: [...this.state.people, res],
            });
          })
          .catch((res) => this.setState({ error: res.error }));
      }
    }, 5000);
  };

  handleAdoption = (type) => {
    PetfulApiService.removePetAndPerson(type).then((res) => {
      PetfulApiService.getPeople()
        .then((res) => {
          this.setState({
            people: res,
          });
        })
        .catch((res) => this.setState({ error: res.error }));
      PetfulApiService.getPets()
        .then((res) => {
          if (type === 'dog') {
            this.setState({
              dogs: res.dogs,
            });
          }
          if (type === 'cat') {
            this.setState({
              cats: res.cats,
            });
          }
        })
        .catch((res) => this.setState({ error: res.error }));
    });
  };

  render() {
    const { dogs, cats, people, loggedInUser, error, loading } = this.state;
    let errorMessage;
    if (error) {
      errorMessage = <p className="error">There was an error</p>;
    } else if ((dogs.length === 0 || cats.length === 0) && !loading) {
      return <div className="loading">No pets left to adopt!!!</div>;
    } else if (loggedInUser === people[0]) {
      clearInterval(this.timeout);
    } else if (loggedInUser === people[0]) {
      this.addMorePeopleToQueue();
    } else if (people.length > 5) {
      clearInterval(this.addNewPeopleTimer);
    }

    return (
      <div>
        <section className="header">
          <h1>Adopt a pet today!</h1>
          {errorMessage}
        </section>
        {this.state.loading ? (
          <p>Loading the pets!!!</p>
        ) : (
          <>
            <section className="form">
              <form
                className="add-to-list"
                onSubmit={(e) => this.handleAddToList(e)}
              >
                <label htmlFor="name">Enter your name to get in line!</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name-input"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
                ></input>
                <br />
                <button className="button" type="submit">
                  Get in line
                </button>
              </form>
              <p>&#x2193;</p>
            </section>
            <section className="queue">
              <h2>The FIFO Queue</h2>
              <div>{this.renderPeopleQueue()}</div>
            </section>
            <section className="pet-queue">
              <div className="adopt-dog">
                <h2>Meet {this.state.dogs[0].name}</h2>
                <p className="age">{this.state.dogs[0].age} years old</p>
                <img
                  className="adoption-pic"
                  src={this.state.dogs[0].imageURL}
                  alt={this.state.dogs[0].description}
                ></img>
                <p>Gender: {this.state.dogs[0].gender}</p>
                <p>Breed: {this.state.dogs[0].breed}</p>
                <p>How I got here: {this.state.dogs[0].story}</p>
                {this.state.loggedInUser === this.state.people[0] && (
                  <button
                    type="button"
                    onClick={(e) => this.handleAdoption('dog')}
                  >
                    Adopt!
                  </button>
                )}
              </div>
              <div className="adopt-cat">
                <h2>Meet {this.state.cats[0].name}!</h2>
                <p className="age">{this.state.cats[0].age} years old</p>
                <img
                  className="adoption-pic"
                  src={this.state.cats[0].imageURL}
                  alt={this.state.cats[0].description}
                ></img>
                <p>Gender: {this.state.cats[0].gender}</p>
                <p>Breed: {this.state.cats[0].breed}</p>
                <p>How I got here: {this.state.cats[0].story}</p>
                {this.state.loggedInUser === this.state.people[0] && (
                  <button
                    className="button"
                    type="button"
                    onClick={(e) => this.handleAdoption('cat')}
                  >
                    Adopt!
                  </button>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    );
  }
}
