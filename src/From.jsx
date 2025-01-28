import React from 'react'

const From = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  const handleReset = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <h1>From </h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button type="reset" onClick={handleReset}>Reset</button>

        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>

      </form>
    </div>
  )

}

export default From