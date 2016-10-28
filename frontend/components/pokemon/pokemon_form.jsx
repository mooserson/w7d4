import React from 'react';
import {withRouter} from 'react-router';

const TYPES = [
  "bug",
  "dragon",
  "electric",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water"
];

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      attack:"",
      defense:"",
      image_url:"",
      move_1:"",
      move_2:"",
      poke_type:"bug",
      items:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const pokemon = Object.assign({}, this.state);
    pokemon['move'] = [pokemon.move_1, pokemon.move_2];
    this.props.createPokemon({pokemon});
    this.setState({
      name:"",
      attack:"",
      defense:"",
      image_url:"",
      move_1:[],
      move_2:[],
      poke_type:"bug",
      items:[]
    });
  }

  handleErrors(){
    if (this.props.errors.length > 0) {
      return this.props.errors.map( error => (
        <li key={error}>{error}</li>
      ));
    }
  }

  render(){
    return(
      <form className="new-pokemon-form" onSubmit={this.handleSubmit}>
        {this.handleErrors()}
        <label>Name
          <input
            className="input"
            ref="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.update('name')}
            required/>
        </label>
        <label>Attack
          <input
            className="input"
            ref="attack"
            value={this.state.attack}
            placeholder="Attack"
            onChange={this.update('attack')}
            required/>
        </label>
        <label>Defense
          <input
            className="input"
            ref="defense"
            value={this.state.defense}
            placeholder="Defense"
            onChange={this.update('defense')}
            required/>
        </label>
        <label>Move 1
          <input
            className="input"
            ref="move1"
            value={this.state.move_1}
            placeholder="Move 1"
            onChange={this.update('move_1')}
            required/>
        </label>
        <label>Move 2
          <input
            className="input"
            ref="move2"
            value={this.state.move_2}
            placeholder="Move 2"
            onChange={this.update('move_2')}
            required/>
        </label>
        <label>Poke Type
        <select onChange={this.update('poke_type')} defaultValue={this.state.poke_type}>
          {TYPES.map((type) => (
            <option className="input" value={type} key={type}>{type}</option>
          ))
          }
        </select>
        </label>
        <label>Image Url
          <input
            className="input"
            ref="image_url"
            value={this.state.image_url}
            placeholder="Image Url"
            onChange={this.update('image_url')}
            required/>
        </label>

        <button className="create-button">Create Pokeman!</button>
      </form>
    );
  }
}
export default withRouter(PokemonForm);
