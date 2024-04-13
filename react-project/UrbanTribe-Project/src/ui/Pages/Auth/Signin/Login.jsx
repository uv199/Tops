import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col py-9 justify-center">
      <h1 className="text-center pb-10 font-medium text-3xl">
        ALREADY REGISTERED?
      </h1>
      <div className="flex px-24 justify-center">
        <div className="border py-9 px-5 mr-2 flex-1">
          <h3 className="mb-2 font-medium text-xl">NEW CUSTOMER</h3>
          <p className="text-slate-400 text-sm">
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </p>
          <button
            type="submit"
            className=" text-sm mt-6 transition-colors duration-500 hover:text-white border-2 border-[#d11e33] py-1 px-3 rounded-md hover:!bg-[#d11e33]	 !bg-white text-[#d11e33] me-4"
          >
            CREATE AN ACCOUNT
          </button>
        </div>
        <div className="border px-5 py-9 ml-2 flex-1 ">
          <form>
            <h3>LOGIN</h3>
            <p className="text-slate-400 my-3 text-sm	">
              If you have an account with us, please log in.
            </p>
            <div className="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                E-MAIL *
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-red-600  block w-full p-2.5 "
                placeholder="Enter E-mail"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PASSWORD *
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-100 border-none text-gray-900 text-sm rounded-lg focus:ring-red-600  block w-full p-2.5 "
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="flex justify-between items-end">
              <button
                type="submit"
                className=" text-sm mt-6 transition-colors duration-500 hover:text-white border-2 border-[#d11e33] py-2 px-12 rounded-md hover:!bg-[#d11e33]	 !bg-white text-[#d11e33] me-4"
              >
                Login
              </button>
              <p className="text-red-600 cursor-pointer hover:text-gray-800">Lost your password?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
