'use client';
import { Button, Card, Checkbox, Label, TextInput, } from 'flowbite-react';
import { useContext } from 'react';
import { AuthenticationContext } from '../../Authentication';
import { updateProfile } from 'firebase/auth';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
  const nav = useNavigate()

  const { signUp, setUser } = useContext(AuthenticationContext)
  const handleLogin = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const image = e.target.image.value
    const email = e.target.email.value
    const password = e.target.password.value
    const hasMinimumLength = password.length >= 6;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    if (hasMinimumLength && hasCapitalLetter && hasSpecialCharacter) {
      signUp(email, password).
      then(res => {
        setUser(res.user)
        updateProfile(res.user, {
          displayName: name,
          photoURL: image
        })
        swal("Registration Succesful")
        nav('/login')
      })
      .catch(error => {
        console.log(error)
      })
    }
    else {
      swal("Is at least 6 characters long.,Contains at least one capital letter.,Contains at least one special character.")
    }
  }
  return (
    <div>
      <Card className=' max-w-[500px] mx-auto my-10'>
        <h1 className=' font-bold text-3xl text-center'>Registration</h1>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Your name"
              />
            </div>
            <TextInput
              name='name'
              placeholder="Bdul Rahim"
              required
              type="text"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Your Image"
              />
            </div>
            <TextInput
              name='image'
              placeholder="image"
              required
              type="url"
            />
          </div>
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
        </form>
      </Card>
    </div>
  );
};

export default Registration;