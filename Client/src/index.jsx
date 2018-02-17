import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/ListItem.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  load(input){
    axios.post('/', {
      name: `${input}`
    })
    .then(() => {
      console.log('catss')
      return axios.get('/')
    })
    .then((response) => {
      // console.log(cats)
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
        <List list={this.state.list}/>
        <Search onSearch={this.load.bind(this)}/>

      </div>)
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
