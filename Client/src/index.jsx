import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/ListItem.jsx'
import axios from 'axios'
import Favorite from './components/favorites.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.filter = this.filter.bind(this)
  }


  load(input){
    axios.post('/', {
      name: `${input}`
    })
    .then(() => {
      axios.get('/data')
      .then((response)=>{
        this.setState({
          list: response.data
        })
      }).catch(response=>{
        console.log(response)
      })
    })
    .catch(response => {
      console.log(response)
    })
  }

  favorite(pokemon){

  var newList = this.state.list.map(function(name, i){
    if(name.name === pokemon){
      console.log(name.name)
      return name.like= true
    }
  })
  this.setState({
    list:newList
  })
  axios.post('/add', {
    name: `${pokemon}`
  })
  .then((response)=>{
    console.log(response)
  }).catch(response=>{
    console.log(response)
  })
 }
 filter(){
   axios.get('/fave')
   .then((response)=>{
    //  console.log(this)
     this.setState({
       list: response.data
     })
   }).catch(response => {
     console.log(response)
   })
 }


  render () {
      // console.log(this.state.list)
      return (<div>
        <h1>Pokemon List</h1>

        <Search onSearch={this.load.bind(this)}/>
        <List items={this.state.list} handleClick={this.favorite.bind(this)}/>
        <button onClick={this.filter}>Favorite</button>
      </div>)
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
