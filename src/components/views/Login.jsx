import axios from 'axios'
import Form from '../ui-components/Form'

export default function Login(){

  const fields = [
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
    }
  ]

  const submit = async (data) => {
    return axios.post('/api/login/', data)
  }

  return (
    <main className='form-page'>
      <Form 
        id="login-form" 
        title='Welcome back!' 
        fields={fields} 
        submit={submit} 
        buttonText="Continue"
        type="regular"
      />
    </main>
  )
}