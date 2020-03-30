import React, { Component } from 'react';
import Cell from './Cell'
class Matrix extends Component {

  genRow = (vals, i) => {
    console.log(vals)
    return vals.map((val, index) => <div className="cell"><Cell value={val} key={i.toString() + index}></Cell></div>) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    //! Mapping through array, then t hrough each row 
    return this.props.values.map((rowVals, i) => <div className="row" key={i}>{this.genRow(rowVals, i)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}


export default Matrix

Matrix.defaultProps = {
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]
}