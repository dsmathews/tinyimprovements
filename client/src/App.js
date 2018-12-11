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
      this.setState({ cardFile: res.data })
    })

  }

  componentDidMount() {
    this.getCards();
    console.log(this.state.cardFile);
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-md-3'>
            <ModeLoad
              getCards={this.getCards}
            />
          </div>
          <div className='col-md-9'>
            {this.state.cardFile.map(kudo => (
              <Kudo
                to={kudo.to}
                from={kudo.from}
                title={kudo.title}
                message={kudo.body}
                key={kudo._id}

              />
            ))}
          </div>
        </div>
      </div>
    );

  }
}

export default App;
