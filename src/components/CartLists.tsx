import CartItem from "./CartItem";

const CartLists = () => {
  return (
    <div>
      {" "}
      <h1 className="uppercase w-fit py-1 relative before:absolute before:w-[50%] before:h-[2px] before:bg-red-500 before:bottom-0 before:left-0 font-semibold text-2xl">
        SHOPPING CART
      </h1>

      {/* cartitems */}
      <div className="flex flex-col gap-3 mt-6">
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
    </div>
  );
};

export default CartLists;
