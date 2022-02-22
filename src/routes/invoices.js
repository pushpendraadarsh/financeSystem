import React from 'react'
import {Link } from 'react-router-dom'

export default function Invoices() {
  return (
    <div>
        <header className="App-header">
        <p>
          Hi Invoices
        </p>
        <Link to="/">Home</Link>
      </header>
    </div>
  )
}
