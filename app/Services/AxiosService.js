// configure axios to use the hp api
// for right now vscode doesn't know that axios exists

// REVIEW step 2 setup your needed api's... 😉
// @ts-ignore
export const hp_api = axios.create({
  baseURL: 'https://hp-api.onrender.com',
  timeout: 2500
})
