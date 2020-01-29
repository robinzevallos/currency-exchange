import React from 'react'
import InputTemplate from 'components/InputTemplate'
import { connect } from 'react-redux'
import { divisaToExchange } from 'store/divisaBase/actions'
import { activeDivisaBase } from 'store/divisaBase/reducer';
import { format, clearFormat, isValidFormat } from 'infrastructure/currencyConvert'

const DivisaBase = ({ dispatch, value }) => {

   let amount

   const handleExchangeBase = e => {
      amount = e.target.value;
      amount = clearFormat(amount)

      const isAmountValid = isValidFormat(amount)

      if (!amount || isAmountValid) {
         amount = format(amount)
         dispatch(divisaToExchange(amount))
      }
   }
   return (
      <InputTemplate
         symbol="€"
         placeholder="0.0000"
         value={value}
         onChange={e => handleExchangeBase(e)}
      />
   )
}

const mapStateToProps = state => {
   return {
      value: activeDivisaBase(state)
   }
}

export default connect(mapStateToProps)(DivisaBase)

