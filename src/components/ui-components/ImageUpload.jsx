import { useState } from 'react'
import axios from 'axios'

export default function ImageUpload({ formData, setFormData, fieldName }){

  const [error, setError] = useState('')

  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET
  const uploadUrl = import.meta.env.VITE_CLOUDINARY_URL

  async function handleUpload(e){
    const form = new FormData() // Creates empty for to append rows to
    form.append('file', e.target.files[0]) // This appends a key value pair to the form, called file, adding the file we uploaded to the field
    form.append('upload_preset', uploadPreset)
    try {
      const { data } = await axios.post(uploadUrl, form)
      setFormData({ ...formData, [fieldName]: data.secure_url })
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <>
      { formData[fieldName] && <img src={formData[fieldName]} alt="Uploaded image" />}
      <input type="file" name={fieldName} id={fieldName} onChange={handleUpload} />
      {error && <p className='text-danger'>{ error }</p>}
    </>
  )
}