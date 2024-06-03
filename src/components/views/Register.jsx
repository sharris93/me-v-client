import axios from 'axios'
import Form from '../ui-components/Form'
import { Link } from 'react-router-dom'

export default function Register(){

  const fields = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'example@email.com',
      required: true
    },
    {
      type: 'text',
      name: 'username',
      placeholder: 'user123',
      required: true
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      required: true
    },
    {
      type: 'password',
      name: 'passwordConfirmation',
      placeholder: 'Confirm password',
      required: true
    },
    {
      type: 'checkbox',
      name: 'terms',
      label: <label>By checking this box you confirm you agree to our <Link to="/terms-and-conditions">Terms & Conditions</Link></label>
    }
  ]

  const submit = async (data) => {
    return axios.post('/api/register/', data)
  }

  return (
    <main className='form-page'>
      <Form 
        id="register-form"
        title='Create your account'
        fields={fields}
        submit={submit}
        buttonText="Continue"
        type="regular" 
      />
    </main>
  )
}