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
    whistlists:[string]
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
    _id:string;
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

  interface ReivewProps {
    name:string,email:string,
    reviewText:string,
    rating:number,
    createdAt:Date
}
interface CartProduct {
  title:string,
  price:number,
  discountPrice:number,
  quantity:number,
  productImages:string,
  slug_name:string,
  productId:string,
  _id:string
}

interface WhistListProduct {
  title:string,
  price:number,
  rating:number,
  discountPrice:number,
  quantity:number,
  productImages:string,
  slug_name:string,
  productId:string,
  _id:string
}