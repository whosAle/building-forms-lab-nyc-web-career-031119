// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state={name: ""};

  handleChange = (e) => this.setState({name: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({name: ""});
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="enter band name here" onChange={this.handleChange} value={this.state.name}/>
          <input type="submit" name="submit" />

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", band: band})
  };
}

export default connect(null, mapDispatchToProps)(BandInput)
