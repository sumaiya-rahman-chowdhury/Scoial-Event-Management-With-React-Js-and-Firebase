'use client';

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext, useState,  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../../Authentication';
import swal from 'sweetalert';
const Login = () => {
    const {logIn,user,setUser,googleSignIn} = useContext(AuthenticationContext)
    const nav = useNavigate()
    console.log(user)
    const [errors,setErros] = useState()
    // console.log(logedUser)
    const handleLogin = e=>{
        e.preventDefault()
       const email = e.target.email.value
       const password = e.target.password.value
       logIn(email,password)
       .then(res=>{
        setUser(res.user)
        swal("Log In Succesful")
        nav('/')
       })
       .catch(error=>{
        setErros(error.message)
       })
    }
    const handleGoogle = ()=>{
      googleSignIn().then(res=>{
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(res)
        nav('/')
      })
      .catch(erro=>{
        console.log(erro.message)
      })
    }
    return (
        <div>
            <Card className=' max-w-[500px] mx-auto my-10'>
                <h1 className=' font-bold text-3xl text-center'>Login</h1>
            
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            name='email'
            placeholder="name@flowbite.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
           name='password'
            required
            type="password"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit" className=' bg-amber-600 hover:bg-amber-200'>
          Submit
        </Button>
        {
          errors && <h2 className=' font-bold text-red-500 text-2xl'>{errors.replace("Firebase:"," ")} </h2>
        }
          <Button
        color="warning"
        onClick={handleGoogle}
      >
        <p>
         Sign In With Google
        </p>
      </Button>
      </form>
    </Card>
        <p className=' text-center font-bold text-2xl mb-10'>Dont Have ant accout yet?? <Link to='/reg' className=' text-amber-600'>Register</Link> then</p>
        </div>
    );
};

export default Login;