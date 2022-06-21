import { InboxIcon } from "@heroicons/react/solid";

export default function Sidebar() {
    return (
        <div className="flex-1 py-10 h-full bg-white border-r-2">
            <div className="px-14 mb-8">
                <button className='bg-red-500 hover:bg-red-600 transition duration-160 ease-in-out px-7 py-3 text-sm text-white font-semibold rounded-3xl'>Compose</button>
            </div>
            <ul className="relative">

                {[0, 1].map(item => {
                    let isActive = false;

                    if(item == 1) {
                        isActive = true;
                    }

                    return (
                        <li className="relative mt-2">
                            <a className={"flex items-center text-sm h-12 px-14  text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-500 transition duration-300 ease-in-out " + (isActive ? 'font-semibold text-red-500 text-ellipsis before:absolute  before:h-full before:top-0 before:left-0 before:border-red-400 before:border-l-4' : '')} href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                <InboxIcon className="w-6 mr-2"/>
                                <span>Sidenav link 1</span>
                            </a>
                        </li>
                    
                    )

                })}

                
                
            </ul>
      </div>
    )
  }
  