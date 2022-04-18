import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import Link from "next/link";

export default function StakePage() {
  
  return (
    <>
      <div className="bg-white w-full justify-between h-12 flex px-4 mb-4 shadow-sm items-center border-b border-solid border-navBottom">
        <Link href="/swap">
          <a>
            <div>
              <div className="mr-0 cursor-pointer text-sm font-normal text-red-300 hover:bg-gray-200">
                Swap
              </div>
            </div>
          </a>
        </Link>
        <div className="mr-0 cursor-pointer text-sm mt-1  text-red-300 hover:bg-gray-200">
          Stake
          <div className="h-1 bg-red-500 relative top-2"></div>
        </div>
        <div className="mr-0 cursor-pointer text-sm text-red-300 hover:bg-gray-200">
          Lottery
        </div>
        <div className="mr-0 cursor-pointer text-sm text-red-300 hover:bg-gray-200">
          Fractionalizer
        </div>
        <div className="mr-0 cursor-pointer text-sm text-red-300 hover:bg-gray-200">
          Marketplace
        </div>
      </div>
      <div className="flex flex-col w-full min-h-full">
        <div className="flex max-w-lg">
          <div className="self-end mb-3 text-md font-bold md:text-2xl whitespace-nowrap text-high-emphesis md:mb-7">
            Maximize yield by staking SUSHI for xSUSHI
          </div>
        </div>
        <div className="max-w-lg pr-3 mb-2 text-sm leading-5 text-gray-500 md:text-base md:mb-4 md:pr-0">
          For every swap on the exchange on every chain, 0.05% of the swap fees
          are distributed as SUSHI proportional to your share of the SushiBar.
          When your SUSHI is staked into the SushiBar, you receive xSUSHI in
          return for voting rights and a fully composable token that can
          interact with other protocols. Your xSUSHI is continuously
          compounding, when you unstake you will receive all the originally
          deposited SUSHI and any additional from fees.
        </div>
        <div className="flex flex-col justify-center md:flex-row mx-auto">
          <div className="flex flex-col w-full max-w-xl mx-auto mb-4 md:m-0">
            <div className="mb-4">
              <div className="flex items-center justify-between w-80 h-24 max-w-xl p-4 rounded-xl md:pl-5 md:pr-7 bg-yellow-400 bg-opacity-40">
                <div className="flex flex-col">
                  <div className="flex items-center justify-center mb-4 flex-nowrap md:mb-2">
                    <p className="text-sm font-bold whitespace-nowrap md:text-lg md:leading-5 text-high-emphesis">
                      Staking APR
                    </p>
                  </div>
                  <div className="flex">
                    <a
                      href=""
                      className="
                        py-1 px-4 md:py-1.5 md:px-7 rounded
                        text-xs md:text-sm font-medium md:font-bold text-dark-900
                        bg-yellow-300 hover:bg-opacity-90"
                    >
                      View Stats
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-end mb-4 flex-nowrap md:mb-2">
                    <p className="text-sm font-bold whitespace-nowrap text-right md:text-lg md:leading-5 text-high-emphesis">
                      7.55%
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-32 text-sm text-right text-primary md:w-64 md:text-base">
                      Yesterday's APR
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full max-w-xl px-3 pt-2 pb-6 rounded bg-gray-300 md:pb-9 md:pt-4 md:px-8">
                <div className="flex w-full rounded h-14 bg-dark-800">
                  <div className="h-full w-6/12 p-0.5">
                    <div className="flex justify-center items-center h-full w-full rounded-lg cursor-pointer text-sm md:text-base text-high-emphesis font-bold bg-dark-900">
                      <p>Stake SUSHI</p>
                    </div>
                  </div>
                  <div className="h-full w-6/12 p-0.5">
                    <div className="flex justify-center items-center h-full w-full rounded-lg cursor-pointer text-sm md:text-base text-secondary">
                      <p>Unstake</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-6">
                <p className="font-bold text-large md:text-2xl text-high-emphesis">
                  Stake SUSHI
                </p>
                <div className="border-gradient-r-pink-red-light-brown-dark-pink-red border-transparent border-solid border rounded-3xl px-4 md:px-3.5 py-1.5 md:py-0.5 text-high-emphesis text-xs font-medium md:text-base md:font-normal">
                  1 xSUSHI = 1.2758 SUSHI
                </div>
              </div>
              <input title="Token Amount" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder=" " min="0" className="relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary w-full h-14 px-3 md:px-5 mt-5 rounded bg-dark-800 text-sm md:text-lg text-dark-800 whitespace-nowrap caret-high-emphesis" value=""></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}