import React, { useState, useEffect } from "react";

const TimmerUsingHooks = () => {
  // initialise view with default 
  let [timeAsString, setTimeAsString] = useState(new Date().toString());
  let tick = () => {
    setTimeAsString(new Date().toString());
  }

  // useffect is the combination of componentdidmount/willunmount etc
  // and guaranteed to run _after_ render
  useEffect(() => {
    let interval = setInterval(
      () => tick(), 1000
    )
    // used to show that usestate runs after every state change when second
    // param is NOT empty array or is not passed
    // console.log(new Date().toString())
    // return function doesn't have to be named, could have been just a arrow function
    return function cleanup() {
      clearInterval(interval)
    }
  },[])

  return <> timeAsString: {timeAsString} </>
}

export default TimmerUsingHooks;