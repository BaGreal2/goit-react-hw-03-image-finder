import React, {Component} from 'react';

export default class Searchbar extends Component {
  state={
    searchQuery: '',
  }
  onSubmit=(e)=>{
    e.preventDefault()
    this.props.onSubmit(this.state.searchQuery);
    this.setState({
      searchQuery: "",
    })
  }
  onChange=(e)=>{
    this.setState({
      searchQuery: e.target.value,
    })
    }
  render(){
    const {searchQuery}=this.state;
  return (
    <header className="Searchbar">
  <form onSubmit={this.onSubmit} className="SearchForm">
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={searchQuery}
      onChange={this.onChange}
    />
  </form>
</header>
  );
  }
}