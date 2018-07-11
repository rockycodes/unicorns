import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUnicorns} from '../store'

class Unicorns extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchTheUnicorns()
  }
  render() {
    const unicorns = this.props.unicorns
    if (!unicorns) return <div> loading </div>;
    return (
        <div id="items">
        {unicorns.length && unicorns.map(unicorn => (
          <div key={unicorn.id}>
            <p>Name: {unicorn.name}</p>
            <p>Description: {unicorn.description}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapProps = (state) => {
  return {
    unicorns: state.unicorns
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchTheUnicorns() {
      dispatch(fetchUnicorns())
    }
  }
}

export default connect(mapProps, mapDispatch)(Unicorns)