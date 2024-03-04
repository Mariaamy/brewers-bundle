import React from 'react'

const Register = () => {
  return (
    <>
    <div>Register</div>
    <form>
        <input type='text' placeholder='Firstname' />
        <input type='text' placeholder='Surname' />
        <input type='text' placeholder='E-mail' />
        <input type='password' placeholder='Password' />
        <button>Submit</button>
    </form>
    </>
  )
}

export default Register