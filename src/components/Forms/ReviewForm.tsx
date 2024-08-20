import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
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
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useCreateReivewMutation } from "@/redux/features/product/productApi";
import { useEffect } from "react";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import DragDropUploader from "../CommonComponents/DragAndDropUploader";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
const formSchema = z.object({
    name: z.string().min(2, {
        message: "First Name must be at least 2 characters.",
    }),
    reviewText: z.string().min(2, {
        message: "Message must be at least 3 characters."
    }),
    email: z.string().email({ message: "Please give proper email" }),
    rating: z.number()

})
const ReviewForm = ({ name, email }: { name: string, email: string }) => {
    const {product} = useSelector((state:RootState)=>state.products)
    const [newReview, { isError, isLoading, isSuccess, data, error }] = useCreateReivewMutation();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: name,
            email: email,
            reviewText: "",
            rating: 0
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        let productId = product?._id
        await newReview({...values,productId})
    
    }
    
    useEffect(() => {
        if (isSuccess) {
            const message = data.message || "Review Uploaded Successfully";
            form.reset();
            form.resetField("rating")
            toast.success(message);
        }
        if (isError && error) {
            console.log(error)
            if ("data" in error) {

                const errorData = error.data as any;
                toast.error(errorData.message || "Error Occured!");
            } else {
                console.log('An error occured:', error)
            }
        }
    }, [isSuccess, isError, data, error])
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-8">
                <section id="ReviewForm">
                    <h1 className="text-lg font-bold">Write a review</h1>
                    {/* rating */}
                    <FormField

                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                            <FormItem className="mt-3">
                                <FormLabel className="text-md font-semibold ">Your Rating</FormLabel>
                                <FormControl className="mt-2">
                                    <ReactStars
                                    value={field.value}
                                        onChange = {field.onChange}
                                        count={5}
                                        size={30}
                                        isHalf={true}
                                        edit={true}
                                        emptyIcon={<FaRegStar size={20} />}
                                        halfIcon={<FaStar size={20} />}
                                        fullIcon={<FaRegStarHalfStroke size={20} />}
                                        activeColor="#FFDE59"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* forms */}
                    <div className="flex w-full justify-between mt-3">
                        <FormField control={form.control}
                        name="name" render={({field})=>(
                            <FormItem className="w-[45%] space-y-3">
                            <FormLabel className="text-lg text-gray-800" htmlFor="Name">Name <span className="text-red-500">*</span> </FormLabel>
                            <FormControl>
                            <Input {...field} className="h-14 text-md border border-gray-800 rounded-sm  outline-1 outline-gray-500" placeholder="Enter Your name..." />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}/>
                        <FormField control={form.control}
                        name="email" render={({field})=>(
                            <FormItem className="w-[45%] space-y-3">
                            <FormLabel className="text-lg text-gray-800" htmlFor="Name">Email <span className="text-red-500">*</span> </FormLabel>
                            <FormControl>
                            <Input {...field} className="h-14 text-md rounded-sm border border-gray-800" type="email" placeholder="Enter Your Email..." />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}/>
                    </div>
                    <div className="flex w-full justify-between mt-3">
                    <FormField control={form.control}
                        name="reviewText" render={({field})=>(
                            <FormItem className="w-full space-y-3">
                            <FormLabel className="text-lg text-gray-800" htmlFor="Name">Your Review  <span className="text-red-500">*</span> </FormLabel>
                            <FormControl>
                            <Textarea {...field} rows={5} className="text-md rounded-sm border border-gray-800" placeholder="Type your review here..." />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}/>
                    </div>
                    <div className="flex w-full justify-between mt-3">
                        <div className="w-full space-y-3">
                            <Label className="text-lg text-gray-800" htmlFor="Name">Add Your Photo  <span className="text-red-500">*</span> </Label>
                            <DragDropUploader />
                        </div>
                    </div>

                    <div className="mt-5 w-[25%]">
                        <Button disabled={isLoading} className="w-full py-6 bg-red-700 hover:bg-red-700 text-md font-semibold">Submit</Button>
                    </div>
                </section>
            </form>
        </Form>
    )
}

export default ReviewForm