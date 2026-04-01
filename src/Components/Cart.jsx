import { toast } from "react-toastify";

const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (item) => {
    const filteredArray = cartItems.filter((c) => c.id !== item.id);
    setCartItems(filteredArray);
    toast.error("Item removed from cart");
  };

   const handlePayment = () => {
   setCartItems([]);
    toast.success("Payement successful!");
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-100 rounded-2xl shadow-sm mt-10">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center py-10 text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {/* Item List */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(item)}
                className="text-pink-500 hover:text-pink-700 text-sm font-medium transition-colors"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Footer Section */}
          <div className="mt-8 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 text-sm">Total:</span>
              <span className="text-2xl font-bold text-gray-900">
                ${totalPrice}
              </span>
            </div>

            <button   onClick={handlePayment} className="w-full bg-[#8b2cf5] hover:bg-[#7a24d8] text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-purple-200">
              Proceed To Checkout
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;