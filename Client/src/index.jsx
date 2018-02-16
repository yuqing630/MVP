import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  load(){
    axios.post('/', {

    })
    .then(() => {
      return axios.get('/')
    })
    .then((response) => {
      this.setState({
        list: response.data
      })
    })
    .catch(response => {

      console.log(response)
    })
  }



  render () {
      return (<div>
        <h1>Pokemon List</h1>
        <List items={this.state.list}/>

      </div>)
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
