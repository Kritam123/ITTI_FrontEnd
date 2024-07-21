import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { useDeleteUserAddressMutation, useUpdateDefaultBillingAddressMutation, useUpdateDefaultShippingAddressMutation } from "@/redux/features/address/addressApi"
import { useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddressItem = ({ data }: { data: AddressDetailsProps }) => {
    const [deleteAddressById, { isLoading, isError, isSuccess, error }] = useDeleteUserAddressMutation();
    const [updateShipping, { isLoading: isShippingLoading, isError: isShippingError, isSuccess: isShippingSuccess, error: shippingError, data: shippingData }] = useUpdateDefaultShippingAddressMutation();
    const [updateBilling, { isLoading: isBillingLoading, isError: isBillingError, isSuccess: isBillingSuccess, error: billingError, data: billingData }] = useUpdateDefaultBillingAddressMutation();
    const navigate = useNavigate();
    const handleAddressEdit = () => {
        let address = data._id;
        navigate(`/dashboard/address/edit/${address}`, { replace: true })
    }
    const handleDeleteAddress = async () => {
        let address = data._id;
        await deleteAddressById({ address });
        const message = "Delete Address Successfully";
        toast.success(message);
    }
    const handleUpdateDefaultBilling = async () => {
        let addressId = data._id;
        await updateBilling( {addressId} );
    }
    const handleUpdateDefaultShipping = async () => {
        let addressId = data._id;
        await updateShipping( {addressId });
    }
    useEffect(() => {

        if (isError && error) {
            if ("data" in error) {
                const errorData = error.data as any;
                toast.error(errorData.errors || "Error Occured!");
            } else {
                toast.error("Something went Wrong");
            }
        }
    }, [isSuccess, isError, error]);
    useEffect(() => {
        if (isShippingSuccess) {
            const message = shippingData.message || "Logged In Successfully";
            toast.success(message);

        }
        if (isBillingSuccess) {
            const message = billingData.message || "Logged In Successfully";
            toast.success(message);

        }
        if (isShippingError && shippingError) {
            if ("data" in shippingError) {
                const errorData = shippingError.data as any;
                toast.error(errorData.errors || "Error Occured!");
            } else {

                toast.error("Something went Wrong");
            }
        }
        if (isBillingError && billingError) {
            if ("data" in billingError) {

                const errorData = billingError.data as any;
                toast.error(errorData.errors || "Error Occured!");
            } else {

                toast.error("Something went Wrong");
            }
        }
    }, [isShippingSuccess, isShippingError, shippingData, isShippingError, isBillingError, billingError, isBillingSuccess])
    return (
        <div className="flex flex-col w-[48%]">
            {/* name first and lastName merge */}
            {/* <span>{firstName} {LastName}</span> */}
            <div className="flex flex-col gap-1">
                <span className="text-lg">{data.firstName} {data.lastName}</span>
                <span className="text-lg">{data.company}</span>
                <span className="text-lg">  {data.street}</span>
                <span className="text-lg">{data.city}, {data.district}, {data.state_Province}</span>
                <div className="flex gap-2">
                    <span className="text-lg">Phone:</span><p> {data.phone}</p>
                </div>
                <div className="flex gap-3">
                    <span className="text-lg">Additional Message:</span><p>{data.additionalInfo}</p>
                </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-5">
                <Button onClick={data.isBillingAddress ? undefined : handleUpdateDefaultBilling} disabled={isBillingLoading} variant={"outline"} className={cn("py-6 text-red-700 border hover:text-white border-red-700 hover:bg-red-700 text-md font-mono", data.isBillingAddress ? "bg-red-700 text-white" : "")}>{isBillingLoading ? <div className="border-4 mt-3 border-white border-t-4 border-t-red-600 w-5 h-5 rounded-full animate-spin anim" />  : data.isBillingAddress ? "default billing" : "Make default billing"}</Button>
                <Button onClick={data.isShippingAddress ? undefined : handleUpdateDefaultShipping} disabled={isShippingLoading} variant={"outline"} className={cn(" py-6 text-red-700  border hover:text-white border-red-700 hover:bg-red-700 text-md font-mono", data.isShippingAddress ? "bg-red-700 text-white" : "")}>{isShippingLoading ? <div className="border-4 mt-3 border-white border-t-4 border-t-red-600 w-5 h-5 rounded-full animate-spin anim" />  : data.isShippingAddress ? "default shipping" : "Make default shipping"}</Button>
                <Button onClick={handleAddressEdit} variant={"outline"} className=" py-6 text-red-700 border hover:text-white border-red-700 hover:bg-red-700 text-md font-mono">Edit</Button>
                <Button onClick={handleDeleteAddress} disabled={isLoading} variant={"outline"} className=" py-6 text-red-700  border hover:text-white border-red-700 hover:bg-red-700 text-md font-mono">delete</Button>
            </div>
            {/* <div className="mt-3 flex gap-5">
              
            </div> */}

        </div>
    )
}

export default AddressItem