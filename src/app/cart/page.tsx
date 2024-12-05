import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] text-red-500">
      {/* PRODUCTS CONTAINER */}
      <div className="p-4 flex flex-col justify-center overflow-auto w-full lg:w-2/3 2xl:w-1/2 lg:px-8 xl:px-12">
        {/* SINGLE ITEM */}
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <Image src="/temporary/p1.png" alt="Pizza" width={80} height={80} />
            <div className="flex flex-col">
              <h1 className="uppercase text-lg font-bold">Sicilian</h1>
              <span className="text-sm">Large</span>
            </div>
            <h2 className="font-bold">$79.90</h2>
            <span className="cursor-pointer text-sm">X</span>
          </div>
        ))}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="bg-gray-50 p-4 w-full lg:w-1/3 2xl:w-1/2 lg:px-8 xl:px-12 mt-4 lg:mt-0">
        <div className="bg-white rounded-lg shadow-md p-6 h-full overflow-y-auto">
          <h3 className="text-lg lg:text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm lg:text-base">Subtotal (3 items)</span>
              <span className="font-medium text-sm lg:text-base">$239.70</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm lg:text-base">Service Cost</span>
              <span className="font-medium text-sm lg:text-base">$5.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm lg:text-base">Delivery Cost</span>
              <span className="text-green-600 font-medium text-sm lg:text-base">FREE</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <span className="font-semibold text-sm lg:text-base">Total (Incl. VAT)</span>
              <span className="font-bold text-lg lg:text-xl">$244.70</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-red-500 text-white py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;  