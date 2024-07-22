import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useSelector } from "react-redux";
import { useForgetPasswordChangeMutation } from "@/redux/features/auth/authApi";
import { useEffect, useRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RootState } from "@/redux/store";
import useOtpCounter from "@/hooks/useOtpTimeCounter";
const formSchema = z.object({
    newPassword: z.string().min(2, { message: "Insert NewPassword or letter more than 2" }),
    confirmPassword: z.string().min(2, { message: "Insert NewPassword or letter more than 2" }),
    otpCode: z.string().min(6, { message: "Otpcode must be 6 characters" })
}).superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirmPassword']
        });
    }
});
const ForgetPassWordResetForm = () => {
    const timerRef = useRef<HTMLSpanElement>();
    const navigate = useNavigate();
    const { forgetToken } = useSelector((state: RootState) => state.auth);
    const [resetPassword, { isLoading, isError, error, isSuccess, data }] = useForgetPasswordChangeMutation()
    const [show, setShow] = useState({
        confirmPassword: false,
        newPassword: false,
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newPassword: "",
            otpCode: ""
        },

    });
    async function onSubmit(values: z.infer<typeof formSchema>) {    
        await resetPassword({ forgetToken, ...values });
    }
    useEffect(() => {
        if (isSuccess) {
            const message = data.message || `PassWord Reset Successfully.`;
            toast.success(message);
            navigate(`/customer/account/login`);
        }
        if (isError && error) {
            if ("data" in error) {
                const errorData = error.data as any;
                toast.error(errorData.errors || "Error Occured!");
            } else {

                toast.error("Something went Wrong");
            }
        }
    }, [isSuccess, isError, data, error])
    useEffect(()=>{
        if(!localStorage.getItem("forgetPassword")){
            navigate("/customer/account/forgetPassword",{replace:true});
        }        
    },[localStorage])
    
   const {timeleft,handleResend} = useOtpCounter({timerRef});
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-8">
                <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="text-lg text-gray-800" htmlFor="new">New Password   <span className="text-red-500">*</span></FormLabel>
                            <FormControl className="space-y-3">
                                <div className=" relative w-full">
                                    <Input type={show.newPassword ? "text" : "password"} id="new" {...field} className="h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline" placeholder="Enter Your newpassword" />
                                    <button type="button" onClick={() => {
                                        setShow(prev => ({
                                            ...prev,
                                            newPassword: !prev.newPassword
                                        }))
                                    }} className="absolute top-1 right-3">
                                        {show.newPassword ? <FiEye className="cursor-pointer" size={20} /> :
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
                            <FormLabel className="text-lg text-gray-800" htmlFor="confirm">Confirm New Password <span className="text-red-500">*</span></FormLabel>
                            <FormControl className=" space-y-3 ">

                                <div className=" relative w-full">
                                    <Input type={show.confirmPassword ? "text" : "password"} id="confirm"  {...field} className={cn("h-12  text-md border  border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline",)} placeholder="Enter Your currentpassword" />
                                    <button type="button" onClick={() => {
                                        setShow(prev => ({
                                            ...prev,
                                            confirmPassword: !prev.confirmPassword
                                        }))
                                    }} className="absolute top-1 right-3">
                                        {show.confirmPassword ? <FiEye className="cursor-pointer" size={20} /> :
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
                    name="otpCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg text-gray-800" htmlFor="confirm">OTP <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup className="space-x-5">
                                        <InputOTPSlot className="border w-12 h-12 border-black text-lg font-semibold rounded-none" index={0} />
                                        <InputOTPSlot className="border font-semibold rounded-sm w-12 h-12 text-lg border-black" index={1} />
                                        <InputOTPSlot className="border font-semibold w-12 h-12 text-lg  border-black rounded-sm" index={2} />
                                        <InputOTPSlot className="border w-12 h-12 text-lg font-semibold border-black rounded-sm" index={3} />
                                        <InputOTPSlot className="border w-12 h-12 text-lg border-black font-semibold rounded-sm" index={4} />
                                        <InputOTPSlot className="border w-12 h-12 text-lg border-black rounded-sm font-semibold" index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <FormDescription className="font-semibold text-gray-900">
                                Didn't Get the OTP ? {timeleft <= 0 ? <Button type="button" className="font-bold px-1 py-0" onClick={handleResend} variant={"link"}>Resend</Button> :
                                <>
                                    Resend in <span ref={timerRef} className="text-[16px] text-black font-semibold">00:00</span>
                                </> }
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isLoading} type="submit" variant={"outline"} className="h-12 m-auto px-16  bg-red-700 text-md  text-white hover:bg-red-600 hover:text-white w-full">Set a new Password</Button>
            </form>
        </Form>
    )
}

export default ForgetPassWordResetForm