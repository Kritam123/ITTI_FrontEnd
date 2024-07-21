/// <reference types="vite/client" />


interface RegisteUserProps {
    firstName:string,
    lastName: string,
    email: string,
    password: string
    confirmPassword?:string
}
interface AddressDetailsProps {
    _id:string,
    firstName:string,
    lastName:string,
    company:string,
    phone:string ,
    additionalInfo:string,
    street :string,
    landmark: string,
    city:string,
    vatNumber:number,
    isBillingAddress:boolean,
    isShippingAddress:boolean,
    district:string
    state_Province:string
}
interface UserDetailsProps {
    firstName:string,
    lastName:string,
    email:string,
    addresses:[],
}