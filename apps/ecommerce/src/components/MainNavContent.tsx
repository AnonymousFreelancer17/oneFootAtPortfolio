"use client"

import { Component, Search, User2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from 'node_modules/ui/src/components/button'
import { Input } from 'node_modules/ui/src/components/input'
import { ThemeToggle } from 'node_modules/ui/src/components/ui/themeTogglerButton'
import React, { useState } from 'react'
import { FaHeart, FaShoppingBag } from 'react-icons/fa'

const MainNavContent = () => {

    const [categories, setCategories] = useState("");
    const [search, setSearch] = useState("");

  return (
    <div className="w-full h-[60px] flex justify-center items-center border-b dark:border-neutral-600 border-neutral-400">
                <div className="lg:w-11/12 md:w-11/12 w-11/12 h-full flex justify-between items-center">
                  <div className="lg:w-3/12 h-full flex justify-start items-center gap-x-4">
                    <Link
                      href={"/"}
                      className="font-medium dark:text-white text-black"
                    >
                      MStore
                    </Link>

                    {/* <button className="flex justify-center items-center gap-x-1 dark:text-white text-black">
                      <MapPin />
                      <div className="flex justify-center items-center ">
                        <input className="" placeholder="Enter pin code" />
                        <div className="flex flex-col">
                          <div>Find Us</div>{" "}
                          <div className="text-xs">Near you</div>
                        </div>
                      </div>
                    </button> */}
                  </div>

                  <div className=" h-full flex-1 xl:flex lg:hidden justify-center items-center hidden">
                    <Input
                      type="select"
                      containerClassName="w-[200px] relative"
                      label=""
                      iconVisibility={true}
                      icon={<Component />}
                      inputType="text"
                      placeholder="All categories"
                      optionData={
                        <>
                          <option value={"all-catgeories"}>
                            All categories
                          </option>
                        </>
                      }
                      inputContainerClassName="w-full"
                      labelClassName="block mb-2.5 text-sm font-medium text-heading"
                      className={`ps-12 p-3 rounded-tl-md rounded-bl-md bg-green-600 text-white w-full appearance-none`}
                      phoneCode={false}
                      value={categories}
                      name="categories"
                      onChange={(e)=>{
                        setCategories(e.target.value)
                      }}
                    />

                    {/*  search bar */}
                    <Input
                      type="input"
                      containerClassName="flex-1 relative"
                      label=""
                      labelClassName="block mb-2.5 text-sm font-medium text-heading"
                      iconVisibility={true}
                      icon={
                        <Search className="dark:text-neutral-400 text-neutral-600" />
                      }
                      inputType="text"
                      placeholder="Search Category,Brands,looks,etc"
                      optionData={<></>}
                      inputContainerClassName=""
                      className={`flex-1 block ps-12 pe-3 py-3 dark:bg-neutral-700 bg-neutral-200 border dark:border-neutral-600 border-neutral-400 text-heading text-sm rounded-br-md rounded-tr-md focus:ring-brand focus:border-brand shadow-xs placeholder:dark:text-neutral-400 placeholder:text-neutral-600 text-left`}
                      phoneCode={false}
                      value={search}
                      name="search"
                      onChange={(e)=>{setSearch(e.target.value)}}
                    />
                  </div>

                  <div className="lg:w-[400px] md:w-1/2 w-1/2 h-full gap-x-4 flex justify-end items-center">
                    <ThemeToggle />

                    <Button
                      containerClassName="h-full flex justify-center items-center"
                      className="h-full md:flex hidden justify-center items-center gap-x-1 text-md dark:text-white text-black"
                      iconClassName="relative p-1 flex justify-center items-center border rounded-full"
                      buttonText="Sign-in"
                      type="link"
                      href={"/auth/login"}
                      action={""}
                      icon={<User2 size={16} />}
                      counterText=""
                      showCounter={false}
                    />

                    <Button
                      containerClassName="h-full flex justify-center items-center"
                      className="h-full flex justify-center items-center gap-x-1 text-md dark:text-white text-black"
                      iconClassName="relative p-1 flex justify-center items-center"
                      buttonText="Wishlist"
                      type="button"
                      href={""}
                      action={""}
                      icon={<FaHeart size={16} />}
                      counterText="4"
                      showCounter={true}
                    />

                    <Button
                      containerClassName="h-full flex justify-center items-center"
                      className="h-full flex justify-center items-center gap-x-1 text-md dark:text-white text-black"
                      iconClassName="relative p-1 flex justify-center items-center"
                      buttonText="Cart"
                      type="button"
                      href={""}
                      action={""}
                      icon={<FaShoppingBag size={16} />}
                      counterText="2"
                      showCounter={true}
                    />
                  </div>
                </div>
              </div>
  )
}

export default MainNavContent