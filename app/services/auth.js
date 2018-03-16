import API from './API'

class Auth extends API {
  constructor (token) {
    super(token)
    this.login = this.login.bind(this)
  }

  login (params) {
    return this.post('/login', params)
  }
}

export default Auth