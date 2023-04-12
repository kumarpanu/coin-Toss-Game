import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    total: 0,
    Heads: 0,
    tails: 0,
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        isHead: true,
        Heads: prevState.Heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        isHead: false,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {total, Heads, tails, isHead} = this.state
    const tail = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const head = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    const imageEle = isHead ? head : tail
    return (
      <div className="main-container">
        <div className="white-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageEle} className="image" alt="toss result" />
          <button
            className="button-container"
            type="button"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <div className="inside-container">
            <p className="total-ht">Total: {total}</p>
            <p className="total-ht">Heads: {Heads}</p>
            <p className="total-ht">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
