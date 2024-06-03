const themeVarName = 'meVTheme'

export const getTheme = () => {
  return localStorage.getItem(themeVarName)
}

export const storeTheme = (theme) => {
  localStorage.setItem(themeVarName, theme)
}