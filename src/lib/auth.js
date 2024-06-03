const tokenName = 'j37fh49834fh3g78fse09e4gh4w9'


export const getToken = () => {
  return localStorage.getItem(tokenName)
}

export const setToken = (token) => {
  localStorage.setItem(tokenName, token)
}