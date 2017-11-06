import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="search-bar">
          <h4 className="col-md-2">YTSearch</h4>
          <input className="col-md-10"
            value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
        </div>
      </div>
    );
  };

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;
