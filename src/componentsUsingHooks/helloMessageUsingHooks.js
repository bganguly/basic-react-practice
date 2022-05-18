import {useState} from 'react';

const HelloMessageUsingHooks = (props) => {
  let [propsName] = useState(props.name);
  // shows that randomworld never changes if the prop is changed by hand in code
  // after the first render.
  // a setter needs to be provided that should change the state
  console.log(props.name, propsName);

  return <>
  <div>Hello using props : {props.name}</div>
  <div>Hello using state : {propsName}</div>
  </>
}

export default HelloMessageUsingHooks;