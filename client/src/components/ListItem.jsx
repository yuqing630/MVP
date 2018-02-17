
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
  }

  onChange (e) {
    this.setState({
      input: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.input);
    this.setState({
      input:''
    })
  }

  render() {
    return (<div>
      Enter a Pokemon Name or Id: <input value={this.state.input} onChange={this.onChange}/>
      <button onClick={this.search}> Search </button>
    </div>)
  }
}

export default Search;
