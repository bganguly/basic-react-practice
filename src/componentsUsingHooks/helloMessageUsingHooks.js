import {useState} from 'react';

const HelloMessageUsingHooks = (props) => {
  let [propsName] = useState(props.name);
  // shows that propsName never changes if the prop is changed by hand in code
  // after the first render.
  // a setter needs to be provided in useState that should change the state, upon an event
  console.log(props.name, propsName);

  return <>
  <div>Hello using props : {props.name}</div>
  <div>Hello using state : {propsName}</div>
  </>
}

export default HelloMessageUsingHooks;