import { useEffect, useState } from 'react'
import { getTheme, storeTheme } from '../../lib/theme'


export default function Navbar(){

  const [theme, setTheme] = useState(getTheme() || 'dark')

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme
      storeTheme(theme)
    }
  }, [theme])

  return (
    <header>
      <button className='btn' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
    </header>
  )
}