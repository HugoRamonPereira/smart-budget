import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  // start a database with the schema
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        // {
        //   id: 1,
        //   title: 'Website development',
        //   type: 'deposit',
        //   category: 'Development',
        //   amount: 7000,
        //   createdAt: new Date('2022-02-10 10:00:00')
        // },
        // {
        //   id: 2,
        //   title: 'Rent',
        //   type: 'withdraw',
        //   category: 'House',
        //   amount: 1500,
        //   createdAt: new Date('2022-02-10 16:00:00')
        // },
        
      ],
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      console.log('data', data)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
