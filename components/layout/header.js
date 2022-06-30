import { MailIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

export default function Header() {

    const [imageUrl, setImageUrl] = useState(undefined);

    async function getImgUrl() {
        let response;

        try {
            console.log(gapi.auth2.getAuthInstance().currentUser.get()
            .getBasicProfile().getImageUrl())
          response = gapi.auth2.getAuthInstance().currentUser.get()
                        .getBasicProfile().getImageUrl();
            setImageUrl(response);
        } catch (err) {
          console.log(err.message);
          return;
        }
    }

    

    useEffect(() => {
        getImgUrl()
    });
    
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
                            <div className="px-14">
                                <div className={"w-12 h-12 rounded-full cursor-pointer overflow-hidden bg-red-500"}>
                                    {imageUrl ? 
                                            <img src={imageUrl} referrerpolicy="no-referrer" alt="Account image" className="" />
                                        :null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
  }
  