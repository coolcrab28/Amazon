import Image from "next/image";
import {MenuIcon, SearchCircleIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"

function Header() {
    return (
        <header>
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">

                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                    src="https://links.papareact.com/f90" 
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                    />
                </div>
                <div className="hidden sm:flex items-center flex-grow h-10 rounded-xl bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-4 h-full w-6 focus:outline-none flex-grow flex-shrink rounded-l-md px-4" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* right  */}
                <div className="mx-6 text-white  whitespace-nowrap flex items-center text-xs space-x-6">
                    <div className=" link">
                        <p >Hello Lakshya Mahajan</p>
                        <p className="font-extrabold md:text-sm ">Account</p>
                    </div>

                    <div className=" link">
                        <p className="font-extrabold md:text-sm ">orders</p>
                    </div>
                    <div className="flex relative link items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold">
                            0
                        </span>
                        <ShoppingCartIcon className="h-10" />

                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">cart</p>
                

                    </div>
                </div>
            </div>

            {/* bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center"> 
                    <MenuIcon className="h-6 mr-1" />
                    All</p>
            <p className="link flex items-center">Prime Video</p>
            <p className="link  flex items-center">Business</p>
            <p className="link  flex items-center">Deals</p>
            <p className="link  items-center hidden lg:inline-flex">Business</p>
            <p className="link  items-center hidden lg:inline-flex">Electronincs</p>
            <p className="link  items-center hidden lg:inline-flex">Grocery</p>


            </div>
        </header>
    )
}

export default Header
