import {useState} from 'react';

const HelloMessageUsingHooks = (props) => {
  const [randomWord, setRandomWord] = useState(props.name);
  return <div>Hello {randomWord}</div>;
}

export default HelloMessageUsingHooks;