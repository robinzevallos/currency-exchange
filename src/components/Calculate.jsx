import React from 'react'
import 'styles/calculate.css'

const Calculate = ({ onClick }) => {
   return (
      <div>
         <button
            type="submit"
            className="ripple"
            onClick={onClick}
            >CALCULATE
         </button>
      </div>
   )
}

export default Calculate
