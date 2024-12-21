import { useState } from "react"

export default function LoginForm() {
    const [state, setState] = useState({ 
        username: '', 
        password: '' 
    })

    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state)
        const response = true;
        //call the api with the value of the form
        // get response status
        //if successful (souvent 200) 
        //set jwt in localstorage
        //redirect to home

        if (response) {
            window.location.href = '/home'
        }
    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={(value)=>setState({
            ...state,
            username: value.target.value
          })} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={(value)=> setState({
            ...state,
            password: value.target.value
          })} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}