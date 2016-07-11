
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './hello';
import { Provider } from 'react-redux';
import store from '../../store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Hello />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('content'));
