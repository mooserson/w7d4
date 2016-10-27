import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
// import {receiveAllPokemon,requestAllPokemon} from './actions/pokemon_actions';
// import {fetchAllPokemon} from './util/api_util';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl);
    window.store = store;
    // store.dispatch(requestAllPokemon());
});
