export class JwtTokenData {
    exp !: string;
    iat !: string;
    id!:string;
    roles!:string;
    sub!:string;
    mfaEnabled !: string;
    mfaValidated !:string;
    constructor(){
    }
    
}
