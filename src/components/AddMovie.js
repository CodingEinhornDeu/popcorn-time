import React, { Component } from 'react'
import './AddMovie.css'

class AddMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      rating: ""
    };
  }

  // handleTitleChange = (event) =>{
  //   this.setState({title:event.target.value});
  // }
  // handleYearChange = (event) =>{
  //   this.setState({year:event.target.value});
  // }
  // handleRatingChange = (event) =>{
  //   this.setState({rating:event.target.value});
  // }

  handleInputChange = (event) => {
    const nameOfTheInput = event.target.name;
    this.setState({ [nameOfTheInput]: event.target.value });

  }

  render() {
    return (
      <div className="AddMovie">
        <h2>Add Movie</h2>
        <form>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange} />
            Year
            <input
              type="number"
              min="1900"
              max="2050"
              name="year"
              value={this.state.year}
              onChange={this.handleInputChange} />
            Rating
            <input
              type="text"
              name="rating"
              value={this.state.rating}
              onChange={this.handleInputChange} />
            <button>Submit</button>
          </label>
        </form>
      </div>
    )
  }
}

export default AddMovie;