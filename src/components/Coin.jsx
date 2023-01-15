import React from "react"

const Coin = ({name, icon, price, symbol}) => {

    //props
    return(
        <div className="card2">
        <div className="card">
            <div>{name} : {symbol}</div>
            <img className ="coin-icon" src={icon} alt={name} />
            <div>
                <strong>USD: {price.toFixed(2)}</strong>
            </div>
        </div>
        </div>

    )

}

export default Coin