import React, {Component} from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.addClick = this
      .addClick
      .bind(this);
    // setInterval(this.addClick, 1000);
  }
  addClick() {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p className="Super-center">Serotonin
            <img
              src={window.location.origin + '/img/serotonin-white-outline.png'}
              alt="serotonin-white-outline"
              className="Main-logo"/>
            Incremental</p>
          <p>You have clicked {this.state.clicks}
            &nbsp;times.</p>
          <button onClick={this.addClick}>+1</button>
        </header>
      </div>
    );
  }
}

export default App;
