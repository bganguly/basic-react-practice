import { useState, useEffect } from "react";

const GithubApiUsingHooks = () => {
  // initialise view with default 
  let [data, setData] = useState([]);
  let getData = () => {
    fetch(`https://api.github.com/users`)
    .then((response) => response.json())
    .then(setData)
  }

  // useffect is the combination of componentdidmount/willunmount etc
  // and guaranteed to run _after_ render
  useEffect(() => {
    getData()
    // used to show that usestate runs after every state change when second
    // param is NOT empty array or is not passed
    // console.log(new Date().toString())
  },[])

  if (data) {
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>{user.login} </p>
            <p>{user.html_url} </p>
            {user.avatar_url
            ? <p>
                <img src={user.avatar_url} 
                  alt="not provided" 
                  width="200"
                  height="200"/>
              </p>
            : null}
          </li>
        ))
        }
      </ul>
    )
  }

  return <p> No users </p>
}

export default GithubApiUsingHooks;