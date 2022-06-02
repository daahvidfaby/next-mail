import { InboxIcon } from "@heroicons/react/solid";

export default function Sidebar() {
    return (
        <div class="w-60 py-10 h-full bg-white border-r-2">
            <div className="w-full px-14 flex justify-center">
                <button className='bg-red-500 px-6 py-2 text-sm text-white font-semibold rounded-3xl'>Compose</button>
            </div>
            <ul class="relative">
                <li class="relative">
                    <a class="flex items-center text-sm h-12 px-14 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-500 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <InboxIcon className="w-6"/>
                        <span>Sidenav link 1</span>
                    </a>
                </li>
            </ul>
      </div>
    )
  }
  