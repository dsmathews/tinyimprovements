import React, { Component } from 'react';
import * as $ from 'axios';
import Header from './components/header';
import Kudo from './components/Kudo';
import ModeLoad from './components/ModeLoad';
// import Mode from './components/Mode'

class App extends Component {
  state = {
    cardFile: []
  }

  getCards = () => {
    $.get('/api/kudos').then((res) => {
      this.setState({cardFile: res.data })
    })
  }

  componentDidMount() {
    this.getCards();
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
        <div className='col-md-3'>
        <ModeLoad />
        </div>
        <div className='col-md-9'>
        {this.state.cardFile.map(kudos => (
          <Kudo 
          to={kudos.to}
          from={kudos.from}
          title={kudos.title}
          message={kudos.body}
          key={kudos._id}
        
        />
        ))}
        </div>
        </div>
      </div>
    );

}
}

export default App;
