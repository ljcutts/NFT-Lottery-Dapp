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
        <div className="flex flex-col w-full max-w-xl mb-4 md:m-0">
          <div className="mb-4 flex mx-auto">
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
          <div className="w-375 mx-auto rounded-md  h-294 bg-red-400">
            <div className="flex item-center w-350 h-14 rounded-md bg-yellow-300 mx-auto mt-2">
              <div className="flex items-cente justify-center w-44">
                <div className="flex justify-center bg-gray-400 rounded-md w-40"></div>
                <p className="absolute flex justify-center items-center mt-4">
                  STAKE Sushi
                </p>
              </div>
              <div className="flex items-center justify-center w-44">
                UNSTAKE
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="text-white font-semibold flex items-center">
                Stake SUSHI
              </div>
              <div className="w-40 flex items-center justify-center h-8 rounded-3xl whitespace-nowrap text-xs font-semibold  bg-green-300">
                1 xSUSHI = 1.2782 SUSHI
              </div>
            </div>
            <input
              className="flex mx-auto w-350 mt-4 h-14 rounded-lg bg-gray-200"
              type="text"
            />
            <button className="w-350 h-14 flex mx-auto rounded-md justify-center font-bold text-xs items-center bg-red-500 mt-10">
              Enter The Amount
            </button>
          </div>
          <div className="w-375 h-64 mx-auto bg-black mt-8 rounded-md">
            <div className="px-4 pt-6 pb-5 ">
              <div className="w-full flex">
                <div className="flex flex-col mr-5">
                  <div className="text-white w-16">Balance</div>
                  <div className="flex justify-start mt-3">
                    <img
                      src="./sushi-logo.webp"
                      alt=""
                      width="100"
                      height="100"
                    />
                    <div className="flex flex-col">
                      <div className="text-white ml-4">-</div>
                      <div className="text-white">asdfasdf</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-white w-16">Unstaked</div>
                  <div className="flex justify-start mt-3">
                    <img
                      src="./sushi-logo.webp"
                      alt=""
                      width="100"
                      height="100"
                    />
                    <div className="flex flex-col">
                      <div className="text-white ml-4">-</div>
                      <div className="text-white">asdfasdf</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-350 h-14 flex mx-auto rounded-md justify-center font-bold text-xs items-center bg-red-500 mt-10">
              Check Sushi Stats
            </button>
          </div>
        </div>
      </div>
    </>
  );
}