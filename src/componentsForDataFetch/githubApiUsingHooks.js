import { useState, useEffect } from "react";
import "./githubApiUsingHooks.css"

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
  }, [])

  if (data) {
    return (
      <div className="cards">
        {
          data.map((user) => (<div className="card">
            {user.avatar_url
              ?
              <img src={user.avatar_url}
                alt="not provided"
                width="200"
                height="200" />


              : null}<h3>{user.login} </h3>
            <a>{user.html_url} </a> </div>))
        }

      </div>
    )
  }

  return <p> No users </p>
}

export default GithubApiUsingHooks;