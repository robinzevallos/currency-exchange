import React from 'react'
import { getHistorical } from 'services/moneyChangeService'
import 'styles/historical.css'

export default class Historical extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         isLoaded: false,
      }

      this.data = []
   }

   formatDate(userDate) {
      let date = new Date(userDate);
      const y = date.getFullYear().toString();
      const m = (date.getMonth() + 1).toString()
      const d = date.getDate().toString();
      const zero = m.length === 1 ? '0' : ''
      date = `${y}-${zero}${m}-${d}`
      return date;
   }

   componentDidMount() {
      const date = new Date();
      const days = 3

      for (let i = 0; i < days; i++) {
         const userDate = date.setDate(date.getDate() - 1)

         getHistorical(this.formatDate(userDate))
            .subscribe(response => {
               this.data.push(response);
               this.setState({
                  isLoaded: i === days - 1
               });
            })
      }
   }

   getRandomInt(max, min = 1) {
      return Math.floor(Math.random() * (max - min)) + min;
   }

   render() {
      const { isLoaded } = this.state;

      if (!isLoaded) {
         return <div>Loading</div>
      }

      const items = []
      const base = 'EUR'

      this.data.map((val, index) => {
         let rates = Object.entries(val.rates)
         const randoms = 4

         for (let i = 0; i < randoms; i++) {
            let random = this.getRandomInt(rates.length) - 1
            items.push({
               day: index,
               value: rates[random],
               date: val.date
            })
         }
      })

      console.log(items)

      const list = items.map((val, index) => {
         const divisa = val.value[0]
         const amount = val.value[1].toFixed(4)
         const date = val.date
         return (
            <li key={index}>
               <h2>{`${base} / ${divisa}`}</h2>
               <h3>{`1.0000 / ${amount}`}</h3>
               <h3>{date}</h3>
            </li>
         )
      })

      return (
         <div className="container-historical">
            <h1>HISTORIC PRICE</h1>
            <ul>{list}</ul>
         </div>
      )
   }
}
