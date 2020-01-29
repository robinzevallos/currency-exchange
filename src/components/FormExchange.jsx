import React from 'react'
import Calculate from 'components/Calculate'
import InputTemplate from 'components/InputTemplate'
import 'styles/divisagroup.css'
import DivisaBase from 'containers/DivisaBase'
import { connect } from 'react-redux';
import { activeDivisaBase } from 'store/divisaBase/reducer';
import { getLatest } from 'services/moneyChangeService'
import { format, clearFormat } from 'infrastructure/currencyConvert'

const FormExchange = ({ divisaBase }) => {
   const [valueTarget, setvalueTarget] = React.useState('');
   const [exchangeRate, setExchangeRate] = React.useState('');

   React.useEffect(() => {
      callServiceExchangeRate();
      //Refresh
      const minutes = 10;
      const timer = setInterval(() => {
         callServiceExchangeRate();
      }, minutes * 60 * 1000);
      return () => {
         clearInterval(timer);
      };
   }, [])

   const callServiceExchangeRate = () => {
      const subscription = getLatest().subscribe(response => {
         setExchangeRate(response.rates.USD)
         console.log('exchangeRate: ' + response.rates.USD)
      })
      return () => subscription.unsubscribe()
   }

   const calculate = e => {
      e.preventDefault()
      const valueBase = divisaBase

      if (valueBase) {
         const value = Number(clearFormat(valueBase))
         const valueConverted = (value * exchangeRate).toFixed(4)
         const valueTarget = format(valueConverted)
         setvalueTarget(valueTarget)
      } else {
         setvalueTarget('')
      }
   }
   return (
      <form
         className="container-divisagroup"
         onSubmit={e => calculate(e)}
      >
         <div>
            <DivisaBase />
            <InputTemplate
               symbol="$"
               placeholder="0.0000"
               value={valueTarget}
               readOnly
            />
         </div>
         <Calculate />
      </form>
   )
}

const mapStateToProps = state => {
   return {
      divisaBase: activeDivisaBase(state)
   }
}

export default connect(mapStateToProps)(FormExchange)
