import config from '../config';

const PetfulApiService = {
  getPeople() {
    return fetch(`${config.REACT_APP_API_BASE}/people`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  addPerson(name) {
    return fetch(`${config.REACT_APP_API_BASE}/people`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getPets() {
    return fetch(`${config.REACT_APP_API_BASE}/pets`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  removePetAndPerson(type) {
    return fetch(`${config.REACT_APP_API_BASE}/pets/${type}`, {
      method: 'DELETE',
    });
  },
};

export default PetfulApiService;
