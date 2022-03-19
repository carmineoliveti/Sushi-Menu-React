import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import california from './components/images/california.png';
import dragon from './components/images/dragon.png';
import dynamite from './components/images/dynamite.png';
import philadelphia from './components/images/philadelphia.png';
import rainbow from './components/images/rainbow.png';
import shrimp from './components/images/shrimp.png';
import { Component } from 'react';

class App extends Component {
state= {
  cards: [
    {id:0, nome:"California", prezzo:1.99, immagine: california, quantità: 0},
    {id:1, nome:"Dragon", prezzo:3.49, immagine: dragon, quantità: 0},
    {id:2, nome:"Dynamite", prezzo:2.49, immagine: dynamite, quantità: 0},
    {id:3, nome:"Philadelphia", prezzo:0.99, immagine: philadelphia, quantità: 0},
    {id:4, nome:"Rainbow", prezzo:2.99, immagine: rainbow, quantità: 0},
    {id:5, nome:"Shrimp", prezzo:1.49, immagine: shrimp, quantità: 0},
  ]
}

handleDelete = cardId => {
  const updateCards = this.state.cards.filter(card => card.id !== cardId);
  this.setState({cards: updateCards});
}

handleIncrement = card => {
  const cards = [...this.state.cards];
  const id = cards.indexOf(card);
  cards[id] = {...card};
  cards[id].quantità++;
  this.setState({cards});
}

render() {
  return (
    <div>
    <Navbar />
    <div className='container'>
      <div className='row'>
        {this.state.cards.map(card =>(
          <Card 
          key={card.id}
          card={card}
          onDelete = {this.handleDelete}
          onIncrement = {this.handleIncrement} />
        ))}
      </div>
    </div>
    </div>
  );
}
}

export default App;
