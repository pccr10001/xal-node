import TokenStore from './tokenstore'
import Xal from './xal'
import Msal from './msal'

export {
    TokenStore,
    Xal,
    Msal,
    TokenRefreshError
}

class TokenRefreshError implements Error {
    name = 'TokenRefreshError'
    message = 'Unknown error'

    constructor(message:string, public error:any){
        this.message = message
        this.error = error
    }
}