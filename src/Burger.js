import React from 'react';
import './Burger.css'

export default function Burger(props) {
  return props.toppings.map((topping, idx) => (
    <div
      key={idx}
      onClick={() => props.onRemove(idx)}
      className={topping}>

    </div>
  ))
}