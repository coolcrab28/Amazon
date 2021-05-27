import Image from "next/image";
import {MenuIcon, SearchCircleIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"

function Header() {
    return (
        <header>
            {/* top nav */}
            <div className="flex items-center h-12 bg-amazon_blue p-1 flex-grow py-2">

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
                <div>
                    <div>
                        <p>Hello Lakshya Mahajan</p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            {/* bottom nav */}
            <div></div>
        </header>
    )
}

export default Header
