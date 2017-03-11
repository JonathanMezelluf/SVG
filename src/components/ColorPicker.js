import React from 'react'
import ReactDOM from 'react-dom'
import { ChromePicker } from 'react-color'
import './ColorPicker.scss'


function clicker(self) {
  if (!self.state.clickerOpen) return ""

  return (
    <div className="picker-wrapper" onClick={self.toggle}>
      <ChromePicker color={self.props.color}
        onChange={self.onColorPickerChange}/>
    </div>
  )
}

class ColorPicker extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      clickerOpen: false
    }

    this.onColorPickerChange = (color) => {
      this.props.onColorChange(color.hex)
    }

    this.onColorTextChange = (event) => {
      this.props.onColorChange(event.target.value)
    }

    this.toggle = (event) => {

      // Only toggle off when clicking outside
      if (event.target.className != "picker-wrapper"
        && this.state.clickerOpen) {
        return
      }

      this.setState((prevState) => {
        prevState.clickerOpen = !prevState.clickerOpen
        return prevState
      })
    }
  }

  render() {
    const style = {
      background: this.props.color
    }

    return (
      <div className="color-picker">
          {clicker(this)}
          <div className="combined-color">
            <div className="color-button" style={style}
              onClick={this.toggle}>
            </div>
            <input type="text"
              value={this.props.color}
              className="right"
              onChange={this.onColorTextChange}/>
          </div>
      </div>
    )
  }
}

export default ColorPicker
