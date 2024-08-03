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
    _id:String,
    refreshToken:string
}

// products types


interface ProductImage {
    smallImgUrl: string;
    smallImgId: string;
    previewImgUrl: string;
    previewImgId: string;
  }
  
  interface KeySpecification {
    key: string;
    value: string;
  }
  
  interface Specification {
    key: string;
    value: string;
  }
  
  interface Product {
    title: string;
    category: string;
    rating: number;
    price: string;
    discountPrice?: string;
    slug_name: string;
    productImages: ProductImage[];
    quantity: number;
    keySpecification?: KeySpecification[];
    specifications?: Specification[];
    description: string;
    reviews?: string[];
  }