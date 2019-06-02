import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map(band => <li>{band.name}</li>)

  render() {
    return(
      <div>
        BandsContainer
        <BandInput />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
export default connect(mapStateToProps)(BandsContainer)
