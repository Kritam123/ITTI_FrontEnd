import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import {  useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForgetPasswordOtpMutation } from "@/redux/features/auth/authApi";
import { useEffect } from "react";
const formSchema = z.object({
    email: z.string().min(2, { message: "Email Required!" }).email({ message: "Please give proper email" }),
})
const ForgetPassWordLinkSentForm = () => {
    const navigate = useNavigate();
    const [createOtpCode,{isLoading,isError,error,isSuccess,data}]  = useForgetPasswordOtpMutation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },

    });
    const handlePushToLogin = ()=>{
        navigate("/customer/account/login",{replace:true});
    }
    async function onSubmit(values: z.infer<typeof formSchema>) {
        await createOtpCode(values);
    }
    useEffect(() => {
        if (isSuccess) {
            const message = data.message || `PassWord Reset Link Is In ${form?.getValues()?.email} Email`;
            toast.success(message);
            navigate(`/customer/account/setnewPassword?email=${form?.getValues().email}`);
        }
        if (isError && error) {
            console.log(error)
            if ("data" in error) {
                const errorData = error.data as any;
                toast.error(errorData.errors || "Error Occured!");
            } else {
            
                toast.error("Something went Wrong");
            }
        }
    }, [isSuccess, isError, data, error])
  return (
    <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-8">
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
                    <div className="flex justify-center gap-10">
                    <Button onClick={handlePushToLogin} type="button" variant={"outline"} className="h-12  px-16  text-md border border-red-500 text-red-500 hover:bg-red-600 hover:text-white w-fit">Go Back To Login</Button>

                    <Button disabled={isLoading}  type="submit" variant={"outline"} className="h-12  px-16  bg-red-700 text-md  text-white hover:bg-red-600 hover:text-white w-fit">Reset My Password</Button>

                    </div>
                </form>  
            </Form>
  )
}

export default ForgetPassWordLinkSentForm