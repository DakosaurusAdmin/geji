import { SignJWT, jwtVerify } from 'jose'
import { signIn } from 'next-auth/react'
// import { cookies } from 'next/headers'x

const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)

export const login = async(providerId:string, data:FormData) => {
    let success=false, error='';
    try {
        const response = await signIn(providerId, {
            ...(data ? {
                username:data.get('username'),
                password:data.get('password')
            }: {}),

            redirect:false

        }
            
        );
        if(response?.ok) {
            console.log("-- LOGIN SUCCESS!!");
            // custom actions on sucessful login
            success= true;
            
        }
        else {
            console.log("-- LOGIN FAILED ", response?.error);
            error= 'Invalid username/password'
        }
    }catch(error) {
        console.log("-- LOGIN FAILURE :  ", error);
        error = 'Unknown error occured, please try again.'
    }
    return {success, error};
}

export const encrypt = async(payload:any) => {
    return await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setExpirationTime('1 day')
    .sign(key)
}

export const decrypt = async(jwt:string=''): Promise<any> => {
    const {payload} = await jwtVerify(jwt, key, { algorithms: ['HS256']});
    return payload;
}