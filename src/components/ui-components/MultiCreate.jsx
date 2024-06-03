import Creatable from 'react-select/creatable'

export default function MultiCreate({ formData, setFormData, options, fieldName }){

  const values = formData[fieldName].map(field => ({ value: field, label: field}))

  function handleCreate(createdOption){
    const newFormData = { ...formData }
    newFormData[fieldName].push(createdOption)
    setFormData(newFormData)
  }

  function handleSelectChange(selectedOptions){
    const newFormData = { ...formData }
    newFormData[fieldName] = selectedOptions.map(option => {
      return option.value
    })
    setFormData(newFormData)
  }

  return (
    <Creatable 
      options={options || []} 
      isMulti={true}
      onCreateOption={handleCreate}
      value={values}
      onChange={handleSelectChange}
    />
  )
}