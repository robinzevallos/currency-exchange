import React from 'react'
import 'styles/inputtemplate.css'

export default class InputTemplate extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         focusContainer: ''
      }
      this.inputRef = React.createRef();
   }

   focusInput() {
      this.setState({ focusContainer: 'focus' })
   }

   blurInput() {
      this.setState({ focusContainer: '' })
   }

   clickContainer() {
      this.inputRef.current.focus()
   }

   render() {
      return (
         <div
            className={`${'container-inputtemplate '}${this.state.focusContainer}`}
            onClick={() => this.clickContainer()}
            >
            <label>{this.props.symbol}</label>
            <input
               readOnly={this.props.readOnly}
               ref={this.inputRef}
               placeholder={this.props.placeholder}
               type="text"
               value={this.props.value}
               onChange={this.props.onChange}
               onFocus={() => this.focusInput()}
               onBlur={() => this.blurInput()}
            />
         </div>
      )
   }
}
