import React from 'react'

const Input = (props) => {
  return (
    <div className="field">
                <label for={props.for}>{props?.label}</label>
                <input type={props.type} id={props.id} placeholder={props?.placeholder}/>
    </div>
  )
}

export default Input