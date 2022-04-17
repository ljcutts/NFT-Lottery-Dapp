import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";


export default function SwapPage() {
  return (
    <>
      <div className="bg-white w-full justify-between h-12 flex px-4 shadow-sm items-center border-b border-solid border-navBottom">
        <div>
          <div className="mr-3 cursor-pointer text-base font-normal text-red-300 mt-1 hover:bg-gray-200">
            Swap
            <div className="h-1 bg-red-500 relative top-2"></div>
          </div>
        </div>
        <div className="mr-3 cursor-pointer text-red-300 hover:bg-gray-200">
          Lottery
        </div>
        <div className="mr-3 cursor-pointer text-red-300 hover:bg-gray-200">
          Fractionalizer
        </div>
        <div className="mr-3 cursor-pointer text-red-300 hover:bg-gray-200">
          Marketplace
        </div>
      </div>
      <div className="px-6 pt-6 ">
        <div className="bg-white w-80 mx-auto h-514 rounded-3xl shadow-lg">
          <div className="w-full h-102 border-b border-solid border-navBottom flex flex-col p-6">
            <div className="mx-auto font-semibold text-xl text-red-400">
              Swap
            </div>
            <div className="mx-auto text-sm text-red-300">
              Trade tokens in an instant
            </div>
          </div>
          <div className="p-5 h-412">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <img
                    src="./bnb-logo.png"
                    alt=""
                    width="25"
                    height="25"
                    className="mr-2"
                  />
                  <p className="text-base font-semibold">BNB</p>
                  <svg
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                  </svg>
                </div>
                <h1 className="text-sm text-red-300">Balance: 0000</h1>
              </div>
              <div className="bg-red-300 h-20 w-full mx-auto rounded-2xl">
                <label htmlFor="" className="h-20 w-full mx-auto rounded-2xl">
                  <div className="px-3 pt-3 flex items-center">
                    <input
                      placeholder="0.0"
                      type="text"
                      pattern="^[0-9]*[.,]?[0-9]*$"
                      className="w-0 relative font-normal border-0 flex-auto bg-transparent text-base text-black text-right whitespace-nowrap overflow-hidden overflow-ellipsis outline-none appearance-none p-0"
                    />
                  </div>
                  <div className="flex flex-row flex-nowrap py-3 pr-3 pl-4 justify-end">
                    <button className="inline-flex items-center shadow-md rounded-2xl border-2 font-semibold justify-center bg-transparent text-green-400 border-green-400 border-solid h-5 px-2 text-xs">
                      MAX
                    </button>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex-wrap flex justify-center items-center mt-3">
              <button className="inline-flex items-center shadow-md rounded-2xl border-0 font-semibold justify-center bg-red-300 border-solid h-8 w-8">
                <svg
                  viewBox="0 0 24 24"
                  className="sc-5a69fd5e-0 dwUojQ icon-down"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                </svg>
              </button>
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <img
                    src="./bnb-logo.png"
                    alt=""
                    width="25"
                    height="25"
                    className="mr-2"
                  />
                  <p className="text-base font-semibold">BNB</p>
                  <svg
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                  </svg>
                </div>
                <h1 className="text-sm text-red-300">Balance: 0000</h1>
              </div>
              <div className="bg-red-300 h-16 w-full mx-auto rounded-2xl">
                <label htmlFor="" className="h-16 w-full mx-auto rounded-2xl">
                  <div className="px-3 pt-3 flex items-center">
                    <input
                      placeholder="0.0"
                      type="text"
                      pattern="^[0-9]*[.,]?[0-9]*$"
                      className="w-0 relative font-normal border-0 flex-auto bg-transparent text-base text-black text-right whitespace-nowrap overflow-hidden overflow-ellipsis outline-none appearance-none p-0"
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-16">
              <button className="inline-flex items-center shadow-md rounded-2xl border-2 font-semibold justify-center text-white border-green-400 border-solid h-12 w-full px-6 text-xs bg-green-400">
                Enter an Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};