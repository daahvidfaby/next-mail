import { InboxIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export default function Sidebar({currentCategory}) {

    const [categories, setCategories] = useState([]);

    async function listCategories() {
        
        let displayedCategories = [
          {name: 'inbox', label: 'Inbox'},
          {name: 'sent', label: 'Sent'},
          {name: 'draft', label: 'Draft'}
        ];

        setCategories(displayedCategories);
      }

      useEffect(() => {
        if(categories.length == 0) {
          listCategories()
        }
      });

    return (
        <div className="flex-1 py-10 h-full bg-white border-r-2">
            <div className="px-14 mb-8">
                <button className='bg-red-500 hover:bg-red-600 transition duration-160 ease-in-out px-7 py-3 text-sm text-white font-semibold rounded-3xl'>Compose</button>
            </div>
            <ul className="relative">

                {categories.map((category) => {
                    let isActive = false;

                    if(category.name == currentCategory) {
                        isActive = true;
                    }

                    return (
                        <li className="relative mt-2" key={category.name}>
                            <Link 
                              href={'/list/' + category.name}
                            >
                                <span
                                  className={"cursor-pointer flex items-center text-sm h-12 px-14  text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-500 transition duration-300 ease-in-out " + (isActive ? 'font-semibold text-red-500 text-ellipsis before:absolute  before:h-full before:top-0 before:left-0 before:border-red-400 hover:text-red-500 before:border-l-4' : '')} 
                                >
                                  <InboxIcon className="w-6 mr-2"/>
                                  {category.label}
                                </span>
                            </Link>
                        </li>
                    )

                })}

                
                
            </ul>
      </div>
    )
  }
  