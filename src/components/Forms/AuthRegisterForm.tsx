import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "FirstName must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "LastName must be at least 2 characters.",
    }),
    email: z.string().min(2, { message: "Email Required!" }).email({ message: "Please give proper email" }),
    password: z.string().min(6, {
        message: "Password Must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
        message: "Password Must be at least 6 characters."
    }),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ['confirmPassword']
      });
    }
  })

const AuthRegisterForm = () => {
    const navigate = useNavigate()
   const [register,{isLoading,isSuccess,isError,error,data}] =  useRegisterMutation();
    const [show, setShow] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword:""
        },

    });
     async function onSubmit(values: z.infer<typeof formSchema>) {
          await register(values);  
        
    }
    useEffect(()=>{
        if(isSuccess){
            const message = data.message || "Register Successfully";
            form.reset();
            toast.success(message);
            navigate("/customer/account/login",{replace:true});

          }     
          if(isError && error){
            console.log(error)
            if("data" in error){
              const errorData =error.data as any;
              toast.error(errorData.errors || "Error Occured!");
            }else{
              toast.error("Something went Wrong");
            }
          }
    },[isSuccess,isError,data,error])
    return (
        <div className="mt-10">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" flex-1 space-y-8">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-lg text-gray-800 font-medium" htmlFor="Name">First Name <span className="text-red-500">*</span></FormLabel>
                                <FormControl className=" space-y-3">
                                    <Input  {...field} type="text" className={cn("h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="Enter Your first name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-lg text-gray-800 font-medium" htmlFor="Name">Last Name <span className="text-red-500">*</span></FormLabel>
                                <FormControl className=" space-y-3">
                                    <Input  {...field} type="text" className={cn("h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="Enter Your last name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-lg text-gray-800 font-medium" htmlFor="Name">Email <span className="text-red-500">*</span></FormLabel>
                                <FormControl className=" space-y-3">
                                    <Input  {...field} type="email" className={cn("h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="Enter Your Email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField

                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-lg text-gray-800" htmlFor="Name">Password <span className="text-red-500">*</span></FormLabel>
                                <FormControl className="space-y-3">
                                    <div className=" relative w-full">
                                        <Input type={show ? "text" : "password"} {...field} className={cn("h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="***********" />
                                        <button onClick={() => setShow(!show)} className="absolute top-1 right-3">
                                            {show ? <FiEye className="cursor-pointer" size={20} /> :
                                                <FiEyeOff className="cursor-pointer" size={20} />}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField

                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-lg text-gray-800" htmlFor="Name">Confirm Password <span className="text-red-500">*</span></FormLabel>
                                <FormControl className="space-y-3">
                                    <div className=" relative w-full">
                                        <Input type={show ? "text" : "password"} {...field} className={cn("h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="***********" />
                                        <button onClick={() => setShow(!show)} className="absolute top-1 right-3">
                                            {show ? <FiEye className="cursor-pointer" size={20} /> :
                                                <FiEyeOff className="cursor-pointer" size={20} />}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button disabled={isLoading} type="submit" variant={"outline"} className="h-12 w-full  bg-red-700 text-md font-bold text-white hover:bg-red-600 hover:text-white px-8">Create New Account</Button>
                </form>
                <div className="mt-5 flex justify-center gap-1 items-center"><span>Already have an account?</span><Link to={"/customer/account/login"}><button className="text-md   font-normal text-red-700 relative  before:absolute before:w-0 before:bottom-0 hover:before:w-full  before:bg-red-600 hover:before:delay-150 before:right-0  before:h-[1px]  hover:before:transition-all before:transition-all before:delay-200 hover:before:left-0" >
                    Login
                </button></Link></div>
            </Form>
        </div>

    )
}

export default AuthRegisterForm