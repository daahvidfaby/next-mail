export default function Messages() {


    return (
        <table className="flex-initial mx-8 mt-4 w-full table-fixed">
            <tbody>
            {[0,1,2,3,4,5].map((message, index) => {
                
                return (
                    <tr className="flex items-center border-b py-4 cursor-pointer" key={index}>
                        <td className="mr-4">
                            <div className="flex justify-center items-center text-white font-semibold w-12 h-12 rounded-full bg-cyan-800">M</div>
                        </td>
                        <td className="flex flex-col flex-initial overflow-hidden" style={{"flex": "1 0"}}>
                            <div className="font-semibold text-sm mb-1">Sender name</div>
                            <div className="text-sm whitespace-nowrap text-ellipsis overflow-hidden "><span className="font-semibold">Subject veryyyy veryyyyy verryyyyyyyyyyyyy verryyyyyyyy verrrrryyyyyyyyyyyyyy loooooooooooooooooong</span> - Message text verrrryyyyyyyyyyy looooooong toooooooooo</div>
                        </td>
                        <td className="flex justify-end w-20 text-xs">03:15 PM</td>
                    </tr>
                )

            })}
            </tbody>
        </table>
    )

}