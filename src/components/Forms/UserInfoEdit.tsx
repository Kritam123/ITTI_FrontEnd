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
import { useSelector } from "react-redux";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { useUpdateUserMutation } from "@/redux/features/auth/authApi";
import { useEffect } from "react";
import { toast } from "sonner";
const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First Name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last Name must be at least 2 characters."
    }),
    email: z.string().email({ message: "Please give proper email" })

})
const UserInfoEdit = () => {
    const {userDetails} = useSelector((state:RootState)=>state.auth);
    const [updataUser,{isError,isLoading,isSuccess,data,error}] =useUpdateUserMutation();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName:userDetails?.firstName,
            lastName: userDetails?.lastName,
            email: userDetails?.email
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        await updataUser(values)
    }
    useEffect(()=>{
        if(isSuccess){
            const message = data.message || "Updated User Details Successfully";
            toast.success(message);
          }     
          if(isError && error){
            console.log(error)
            if("data" in error){
          
              const errorData =error.data as any;
              toast.error(errorData.message || "Error Occured!");
            }else{
              console.log('An error occured:',error)
            }
          }
    },[isSuccess,isError,data,error])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-8">
                <div className="w-full gap-8 flex ">
                    <FormField

                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="w-[50%]">
                                <FormLabel className="text-lg text-gray-800" htmlFor="Name">First Name <span className="text-red-500">*</span></FormLabel>
                                <FormControl className=" space-y-3">
                                    <Input  {...field} className={cn("h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="Enter Your first name" />

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="w-[50%]">
                                <FormLabel className="text-lg text-gray-800" htmlFor="Name">Last Name  <span className="text-red-500">*</span></FormLabel>
                                <FormControl className="space-y-3">
                                    <Input {...field} className="h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline" placeholder="Enter Your last name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-[49%]">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-lg text-gray-800" htmlFor="Name">Email <span className="text-red-500">*</span></FormLabel>
                                <FormControl className=" space-y-3">
                                    <Input disabled  {...field} className={cn("h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="Enter Your first name" />

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button disabled={isLoading} type="submit" variant={"outline"} className="h-12  bg-red-700 text-md font-normal text-white hover:bg-red-600 hover:text-white px-8">Save</Button>
            </form>
        </Form>
    )
}

export default UserInfoEdit