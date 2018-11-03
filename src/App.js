import React, {Component} from 'react';
import './App.css';
import SimpleStorage from "react-simple-storage";
import netlifyIdentity from 'netlify-identity-widget'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brainhealth: 100,
      contentment: 100,
      bodyhealth: 100,
      serotonininsystem: 0,
      clicks: 0
    };
    this.addClick = this
      .addClick
      .bind(this);

    this.handleLogIn = this
      .handleLogIn
      .bind(this);

    // setInterval(this.addClick, 1000);
  }

  addClick() {
    const clickValue = (this.state.clicks + 1).toString()
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }
  handleLogIn() {
    // You can import the widget into any component and interact with it.
    netlifyIdentity.open()
  }

  render() {
    return (
      <div className="App">
        <SimpleStorage parent={this}/>
        <header className="App-header">

          <div>
            {/* <button onClick={this.handleLogIn}>Log in with netlify</button> */}
          </div>

          <div className="Super-center">Serotonin
            <img
              src={window.location.origin + '/img/serotonin-white-outline.png'}
              alt="serotonin-white-outline"
              className="Main-logo"/>
            Incremental</div>

          <div>You have clicked {this.state.clicks}
            &nbsp;times.</div>
          <button onClick={this.addClick}>+1</button>
        </header>
      </div>
    );
  }
}

export default App;
