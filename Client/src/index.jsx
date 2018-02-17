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
    // console.log('in here')
  }


  load(input){
    axios.post('/', {
      name: `${input}`
    })
    .then(() => {
      // console.log('axios.get')
      axios.get('/data')
      .then((response)=>{
        // console.log(response.data)
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

  // load(){
  //   $.ajax({
  //     url:'/',
  //     type:'GET',
  //     headers:["Content-Type":"application/json"],
  //     success:(data)=>{
  //       console.log(data)
  //       this.setState({
  //         list: data
  //       })
  //     },
  //     error:(err)=>{
  //       console.log('err',err)
  //     }
  //   })
  // }

 // favorite()

  render () {
      console.log(this.state.list)
      return (<div>
        <h1>Pokemon List</h1>

        <Search onSearch={this.load.bind(this)}/>
        <List items={this.state.list} onClick={this.favorite}/>
        <button onClick={this.filter}>Favorite</button>
      </div>)
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
