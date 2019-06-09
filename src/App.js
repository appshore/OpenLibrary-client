import React from 'react';

import List from './List';
import Search from './Search';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    this.search = this.search.bind(this);
  }

  search(results) {
    this.setState({ results });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>
            Technical test
          </h2>
        </header>
        <div className="content">
          <h3 className="search">
            <Search onSearch={this.search} />
          </h3>
          <div>
            <List list={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
