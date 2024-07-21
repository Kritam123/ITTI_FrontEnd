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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useUpdateSingleAddressMutation } from "@/redux/features/address/addressApi";
import { useEffect } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  company: z.string().min(2, { message: "Please give company" }),
  street: z.string().min(2, { message: "Please give streetaddress" }),
  landmark: z.string().min(2, { message: "Please give landmark" }),
  city: z.string().min(2, { message: "Please give city" }),
  state_Province: z.string().min(2, { message: "Please give state_province" }),
  district: z.string().min(2, { message: "Please give district" }),
  vatNumber: z.number().min(2, { message: "Please give Value" }),
  phone: z.string().min(10, { message: "Please give proper phone" }),
  additionalInfo: z.string().min(2, { message: "Please give ,messageInfo" }),
  isShippingAddress: z.boolean(),
  isBillingAddress: z.boolean(),
});
const EditContactInfoForm = () => {
  const [updateAddress, { isError, error, data, isLoading, isSuccess }] = useUpdateSingleAddressMutation();
  const { address } = useSelector((state: RootState) => state.address)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: address?.firstName,
      lastName: address?.lastName,
      company: address?.company,
      city: address?.city,
      district: address?.district,
      landmark: address?.landmark,
      state_Province: address?.state_Province,
      street: address?.street,
      vatNumber: address?.vatNumber,
      phone: address?.phone,
      additionalInfo: address?.additionalInfo,
      isBillingAddress: address?.isBillingAddress,
      isShippingAddress: address?.isShippingAddress,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const addressId = address?._id;
    await updateAddress({ ...values, addressId });
  }
  useEffect(() => {
    if (isSuccess) {
      const message = data.message || "Updated Address Successfully";
      toast.success(message);
      window.scrollTo(0, 0);
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
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full space-y-8"
      >
        <div className="w-full gap-8 flex ">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-lg text-gray-800" htmlFor="first">
                  First Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className=" space-y-3">
                  <Input
                    id="first"
                    {...field}
                    className={cn(
                      "h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    )}
                    placeholder="Enter Your first name"
                  />
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
                <FormLabel className="text-lg text-gray-800" htmlFor="last">
                  Last Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="space-y-3">
                  <Input
                    id="last"
                    {...field}
                    className="h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    placeholder="Enter Your last name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full gap-8 flex ">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-lg text-gray-800" htmlFor="commpay">
                  Company <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className=" space-y-3">
                  <Input
                    id="commpay"
                    {...field}
                    className={cn(
                      "h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    )}
                    placeholder="Enter Your Commpay"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-lg text-gray-800" htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="space-y-3">
                  <Input
                    type="text"
                    id="phone"
                    {...field}
                    className="h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    placeholder="Enter Your phone no"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-800" htmlFor="Info">
                Additional Information <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="space-y-3">
                <Textarea
                  id="messageInfo"
                  {...field}
                  className=" h-40 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                  placeholder="If you have any message write here..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address Edit part */}
        <div className="mt-16 w-full">
          <h1 className="text-lg text-black/70">ADDRESS</h1>
          <div className="w-full h-[2px] bg-gray-300 mt-3" />
        </div>
        <div className="w-full gap-8 flex ">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-lg text-gray-800" htmlFor="street">
                  Street Address <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className=" space-y-3">
                  <Input
                    id="street"
                    {...field}
                    className={cn(
                      "h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    )}
                    placeholder="Enter Your Street Address"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="landmark"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-lg text-gray-800" htmlFor="landmark">
                  Landmark<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="space-y-3">
                  <Input
                    id="landmark"
                    {...field}
                    className="h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    placeholder="Enter Your Landmark"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full gap-8 flex ">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-lg text-gray-800" htmlFor="city">
                  City <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className=" space-y-3">
                  <Input
                    id="city"
                    {...field}
                    className={cn(
                      "h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    )}
                    placeholder="Enter Your City"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state_Province"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-lg text-gray-800" htmlFor="state">
                  State/Province <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="space-y-3">
                  <Input
                    id="state"
                    {...field}
                    className="h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    placeholder="Enter Your State/Province"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full gap-8 flex ">
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-lg text-gray-800" htmlFor="district">
                  District <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className=" space-y-3">
                  <Input
                    id="district"
                    {...field}
                    className={cn(
                      "h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    )}
                    placeholder="Enter Your District"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vatNumber"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel className="text-lg text-gray-800" htmlFor="vat">
                  VAT Number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="space-y-3">
                  <Input
                    id="vat"
                    {...field}
                    className="h-12 text-md border border-gray-800 rounded-sm  focus-visible:transition focus-visible:ring-0 focus-visible:outline"
                    placeholder="Enter Your VAT number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="isBillingAddress"
          render={({ ...field }) => (
            <FormItem className="mt-3">
              <FormControl>
                <div className="flex gap-2  items-center">
                  <Checkbox
                    checked={field.field.value}
                    onCheckedChange={() => {
                      field.field.onChange(!field.field.value);
                    }}
                    id="isBilling"
                    className="border-2"
                  />
                  <FormLabel
                    className="text-[13px] text-gray-600"
                    defaultValue={1}
                    htmlFor={"isBilling"}
                  >
                    is billing address
                  </FormLabel>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isShippingAddress"
          render={({ ...field }) => (
            <FormItem className="mt-3">
              <FormControl>
                <div className="flex gap-2  items-center">
                  <Checkbox
                    id="isShipping"
                    checked={field.field.value}
                    onCheckedChange={() => {
                      field.field.onChange(!field.field.value);
                    }}
                    className="border-2"
                  />
                  <FormLabel
                    className="text-[13px] text-gray-600"
                    defaultValue={1}
                    htmlFor={"isShipping"}
                  >
                    is shipping address
                  </FormLabel>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-between">
          <Button
            disabled={isLoading}
            type="submit"
            variant={"outline"}
            className="h-12  bg-red-700 text-md font-semibold text-white hover:bg-red-600 hover:text-white px-8"
          >
            Update  Address
          </Button>
          <Link to={"/dashboard/address"}>
            <Button
              type="button"
              variant={"outline"}
              className="h-12  text-red-500 text-md font-semibold    px-8"
            >
              Back
            </Button>
          </Link>

        </div>
      </form>
    </Form>
  );
};

export default EditContactInfoForm;
