import { MailIcon } from "@heroicons/react/solid";

export default function Header() {

    const getImgUrl = () => {
        return 'https://picsum.photos/id/237/200/300';
    }
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg border-b-2 border-gray-100 py-4 bg-white relative flex items-center w-full justify-between">
                <div className="w-full flex flex-wrap items-center justify-between">
                    <div className="w-full flex items-center justify-between">
                        <div className="flex w-60 justify-center text-xl font-normal text-gray-500">
                            <div className="flex">
                                <MailIcon className='h-8 text-red-500'/>
                                <span className="ml-1">Mail</span>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <img src={getImgUrl()} alt="Account image" className="w-12 h-12 rounded-full cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
  }
  