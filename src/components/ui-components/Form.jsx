import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Custom Components
import MultiCreate from './MultiCreate'
import ImageUpload from './ImageUpload'

// Helpers
import { validateFormFields } from '../../lib/forms'

export default function Form({ id, title, fields, submit, redirect, load, buttonText, type }){

  // Location variables
  const navigate = useNavigate()

  // formData starting values
  const emptyFormData = fields.reduce((obj, f) => {
    return { 
      ...obj, 
      [f.name]: f.type === 'multi' ? [] : ''}
  }, {})

  // State
  const [formData, setFormData] = useState(emptyFormData)
  const [errors, setErrors] = useState()

  // Load for fields for existing records
  useEffect(() => load && load(), [load])

  // Events
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await submit()
      console.log(data)
      if (redirect) navigate(redirect)
    } catch (error) {
      // setErrors(error.resp)
      console.log(error)
    }
  }

  return (
    <>
      {fields?.length > 0 ? 
        <form id={id} onSubmit={handleSubmit} className={`form--${type || 'regular'}`}>
          {/* Title */}
          {title && <h2>{title}</h2>}
          
          {/* Form Fields */}
          {fields.map(field => {

            const { type, name, placeholder, label, options, required } = field

            // Field Validation
            const valid = validateFormFields(field)
            if (!valid) return <p key={name} className='field-error'>Invalid Form Field</p>

            return (
              <div className='form-control' key={name}>
              

                {/* Label */}
                { label && typeof label === 'object'
                  ? label
                  : <label htmlFor={name} hidden={!label}>{label || placeholder || name}{required && <small>*</small>}</label>
                }
                
                {/* Input types */}
                { ['text', 'date', 'number', 'email', 'password'].includes(type) &&
                  <input type={type} name={name} placeholder={placeholder || name} required={required} value={formData[name]} onChange={handleInputChange} />
                }

                {/* Text Area */}
                { type === 'textarea' && 
                  <textarea name={name} placeholder={placeholder || name} required={required} value={formData[name]} onChange={handleInputChange}></textarea>
                }

                {/* Select */}
                { type === 'select' &&
                  <select name={name} value={formData[name]} required={required} onChange={handleInputChange}>
                    {options.map(({ value, label, disabled }) => (
                      <option key={value} value={value} disabled={disabled}>
                        {label}
                      </option>
                    ))}
                  </select>
                }

                {/* Multi */}
                { type === 'multi' &&
                  <MultiCreate className='multi-create' formData={formData} setFormData={setFormData} options={options} fieldName={name} />
                }

                {/* Image */}
                { type === 'image' &&
                  <ImageUpload formData={formData} setFormData={setFormData} fieldName={name} />
                }

                {/* Checkbox */}
                { type === 'checkbox' &&
                  <input type="checkbox" name={name} value={formData[name]} onChange={handleInputChange} required={required} />
                }
                {/* Radio */}
                { type === 'radio' &&
                  <>
                    { options.map(button => {
                      return (
                        <div key={button} className='radio-container'>
                          <input type='radio' value={button} /> {button}
                        </div>
                      )
                    }) }
                  </>
                }

              </div>
            )

          })}

          {/* Submit */}
          <button className='btn' type="submit">{buttonText}</button>

        </form>
        :
        <h2 className='text-center'>This form is empty.</h2>
      }
    </>
  )
}