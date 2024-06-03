
export const validateFormFields = (field) => {

  // Currently supported field types
  const validTypes = ['image', 'text', 'date', 'checkbox', 'radio', 'select', 'multi', 'textarea', 'number', 'email', 'password']

  // Field values
  const { type, name, label, options } = field
  
  // Field Invalid?
  let valid = true

  // Integrity checks
  if (
    !name ||
    !type ||
    !validTypes.includes(type) ||
    (type === 'select' && !options) ||
    (type === 'multi' && !options) ||
    (type === 'checkbox' && !label) ||
    (type === 'radio' && !label)
  ) {
    valid = false
    console.log('🚨 Field Error 🚨')
  }

  // Missing Name
  if (!name) {
    console.log(`"name" value not provided for following field:`, field)
  }

  // Missing Type
  if (!type) {
    console.log(`"type" value not provided for following field:`, field)
  }

  // Invalid Type
  else if (!validTypes.includes(type)) {
    console.log(`Invalid "type" for following field:`, field)
    console.log(`Valid field types:\n${validTypes.map(t => `${t}\n`).join('')}`)
  }

  // Missing Options
  if((['select', 'multi', 'radio'].includes(type)) && !options) {
    console.log(`"options" must be provided for following field of type ${type}:`, field)
  }

  // Missing Label
  if ((type === 'checkbox' || type === 'radio') && !label) {
    console.log(`"label" must be provided for following field of type ${type}:`, field)
  }

  return valid
}