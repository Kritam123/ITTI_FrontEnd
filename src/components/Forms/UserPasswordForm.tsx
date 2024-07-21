import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FiEyeOff, FiEye } from "react-icons/fi";
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
import { useEffect, useState } from "react";
import { useUpdatePasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
const formSchema = z.object({
    oldPassword: z.string().min(2, {
        message: "Current Password is required",
    }),
    newPassword: z.string().min(2, {
        message: "New Password is required"
    }),
    confirmPassword: z.string().min(3, { message: "Confirm Password is required" }),
}).superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ['confirmPassword']
      });
    }
  })
const UserPasswordForm = () => {
    const [updatePass,{isError,data,isLoading,isSuccess,error}] = useUpdatePasswordMutation();
    const [show, setShow] = useState({
        confirmPassword:false,
        newPassword:false,
        oldPassword:false
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        },

    });
   async function onSubmit(values: z.infer<typeof formSchema>) {
        await updatePass(values);
    }
    useEffect(() => {
        if (isSuccess) {
            const message = data.message || "Password Changed Successfully";
            toast.success(message);
            form.reset();

        }
        if (isError && error) {
            if ("data" in error) {
                const errorData = error.data as any;
                toast.error(errorData.errors || "Error Occured!");
            } else {
                toast.error("Something went Wrong");
            }
        }
    }, [isSuccess, isError, error])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-8">
                <div className="flex flex-col gap-5">
                    <FormField
                        control={form.control}
                        name="oldPassword"
                        render={({ field }) => (
                            <FormItem className="w-[50%]">
                                <FormLabel className="text-lg text-gray-800" htmlFor="old">Current Password <span className="text-red-500">*</span></FormLabel>
                                <FormControl className=" space-y-3">
                                   <div className=" relative w-full">
                                   <Input type={show.oldPassword ?"text" :"password"} id="old" {...field} className={cn("h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="Enter Your currentpassword" />
                                    <button type="button" onClick={()=>{
                                        setShow(prev=>({
                                            ...prev,
                                            oldPassword:!prev.oldPassword
                                        }))
                                    }} className="absolute top-1 right-3">
                                            {show.oldPassword  ? <FiEye className="cursor-pointer" size={20} /> :
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
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem className="w-[50%]">
                                <FormLabel className="text-lg text-gray-800" htmlFor="new">New Password   <span className="text-red-500">*</span></FormLabel>
                                <FormControl className="space-y-3">
                                <div className=" relative w-full">
                                    <Input type={show.newPassword ? "text" : "password"} id="new" {...field} className="h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline" placeholder="Enter Your newpassword" />
                                    <button type="button" onClick={()=>{
                                        setShow(prev=>({
                                            ...prev,
                                            newPassword:!prev.newPassword
                                        }))
                                    }}  className="absolute top-1 right-3">
                                            {show.newPassword  ? <FiEye className="cursor-pointer" size={20} /> :
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
                            <FormItem className="w-[50%]  ">
                                <FormLabel className="text-lg text-gray-800" htmlFor="confirm">Confirm New Password <span className="text-red-500">*</span></FormLabel>
                                <FormControl className=" space-y-3 ">

                                    <div className=" relative w-full">
                                        <Input type={show.confirmPassword ? "text" : "password"}  id="confirm"  {...field} className={cn("h-12  text-md border  border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="Enter Your currentpassword" />
                                        <button type="button" onClick={()=>{
                                        setShow(prev=>({
                                            ...prev,
                                            confirmPassword:!prev.confirmPassword
                                        }))
                                    }}  className="absolute top-1 right-3">
                                            {show.confirmPassword  ? <FiEye className="cursor-pointer" size={20} /> :
                                                <FiEyeOff className="cursor-pointer" size={20} />}
                                        </button>

                                    </div>
                                </FormControl>
                                <FormMessage />

                            </FormItem>
                        )}
                    />
                </div>


                <Button type="submit" disabled={isLoading} variant={"outline"} className="h-12  bg-red-700 text-md font-normal text-white hover:bg-red-600 hover:text-white px-8">Save</Button>
            </form>
        </Form>
    )
}

export default UserPasswordForm;

