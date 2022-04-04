import React , { useState} from "react";

const ReverseUserStringUsingHooks = (props) => {
  let [textAlignValue] = useState(props.textAlign);
  let [inputString, setInputString] = useState('');
  let [reversedString, setReversedString] = useState('');

  let handleChange = (e) => {
      setInputString(e.target.value)
      setReversedString(e.target.value.split('').reverse().join('') )
  }

  // center div horizontally in view port using supplied props
  // shorthand wrapper <> may not be used when style or other attrs present
  return <div style={{textAlign:textAlignValue}}>
    <input  
      style={{textAlign:textAlignValue}}
      placeholder="enter a string"
      onChange={handleChange}
      value={inputString}
    />
    <div>Reversed String : {reversedString}</div>
  </div>

}

export default ReverseUserStringUsingHooks;