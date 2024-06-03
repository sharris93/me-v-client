import { useEffect, useState } from 'react'


export default function Navbar(){

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <header>
      <button className='btn' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
    </header>
  )
}