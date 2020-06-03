import React from 'react'
import './App.css'
import Burger from './Burger'


class App extends React.Component {

  state = {
    burger: ['tomato', 'cheese', 'patty', 'salad']
  }

  addTopping = (topping) => {
    this.setState({
      burger: [`${topping}`, ...this.state.burger]
    })
  }

  removeTopping = targetIndex => {
    const { burger } = this.state

    this.setState({
      burger: burger.filter((topping, idx) => idx != targetIndex)
    })
  }

  handleSpecial = () => {

    this.setState({
      burger: ['cheese', 'tomato', 'patty', 'cheese', 'tomato', 'patty', 'cheese', 'tomato', 'patty']
    })
  }



  getMessage = () => {
    var count = this.countTopping('cheese')

    if (count === 0) {
      return 'no cheese added'
    } else if (count === 1) {
      return 'one cheese only'
    } else if (count === 2) {
      return 'double cheese'
    } else if (count === 3) {
      return 'tripple cheese'
    } else if (count === 4) {
      return 'quadruple cheese'
    } else {
      return 'maximum cheese'
    }
  }

  countTopping = topping => {
    var toppingAmount = this.state.burger.filter(top => top === topping)
    return toppingAmount.length
  }


  getFinalCost = () => {
    var cost = 0

    const tomatoPrice = 0.8
    const cheesePrice = 0.6
    const pattyPrice = 1.9

    return cost = (this.countTopping('patty') * pattyPrice + this.countTopping('tomato') * tomatoPrice + this.countTopping('cheese') * cheesePrice).toFixed(2)
  }

  render() {

    // const burger = this.state.burger
    // destructuring
    const { burger } = this.state

    return (
      <div className="App">
        <aside>
          <h2>MENU</h2>
          <div>
            <button className="topping" onClick={() => this.addTopping('tomato')}>tomato</button></div>
          <div>
            <button className="topping" onClick={() => this.addTopping('cheese')}>cheese</button></div>
          <div>
            <button className="topping" onClick={() => this.addTopping('patty')}>patty</button></div>
          <div>
            <button className="topping" onClick={() => this.addTopping('salad')}>lettuce</button></div>
          <h2>Burger of the Day:</h2>
          <div>
            <button className="special" onClick={this.handleSpecial}>Melbourne Trifecta</button>
          </div>
          <section className="prices">
            <h3>Our Prices, AU$:</h3>
            <li>Tomato:  0.8</li>
            <li>Cheese:  0.6</li>
            <li>Patty:   1.9 </li>
            <li>Lettuce: free</li>
          </section>
        </aside>
        <main>
          <h1>Reburgulator</h1>
          <section className="burger-wrapper">
            <div className="top-bun">
              <div className="seed"></div>
              <div className="seed2"></div>
            </div>
            {
              <Burger
                toppings={burger}
                onRemove={this.removeTopping}
              />
            }
            <div className="bottom-bun"></div>
            <div className="tablecloth">
              <div className="orderdetails"><div className="message">How cheesy: {this.getMessage()}
              </div>
                <div>Total cost: AU$ {this.getFinalCost()}</div></div>
            </div>
          </section>
        </main>
      </div >
    );
  }
}

export default App;
