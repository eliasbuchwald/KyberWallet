import React from "react"
import {toT} from "../../utils/converter"

const TokenSelect = (props) => {  
  var handleOnClick = (e) => {
    if(props.inactive){
      e.preventDefault();
    } else {
      props.onClick(e, props.symbol, props.address, props.type)
    }
  }
  return (
    <div class="column gutter-15">
      <a class={"token-stamp " + (props.inactive? "empty": (props.selected?"selected":""))} onClick={(e)=> {handleOnClick(e)}}>
        <img src={props.icon}/><span class="name">{props.name}</span>
        <div class="balance" title={toT(props.balance)}>{toT(props.balance, 8)}</div>
      </a>
    </div>
  )
}

export default TokenSelect
