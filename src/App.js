import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      houses: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://my-json-server.typicode.com/karenhernandeze/Casas/db')
    .then(response => response.json())
    .then(data => this.setState({houses: data.housesdb})); //console.log(users));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { houses, searchField } = this.state;
    const filteredHouses = houses.filter(house => 
      house.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1> EH ASESORES INMOBILIARIOS </h1>
      <SearchBox 
      placeholder='Busca un inmueble'
      handleChange={this.handleChange}
      />
      <CardList houses={filteredHouses}/> 
      </div>
    )
  }
}

export default App;
