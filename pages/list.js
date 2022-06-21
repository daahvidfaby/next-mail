import Header from "../components/layout/header"
import Sidebar from "../components/layout/sidebar"
import Messages from "../components/layout/messages"

function List() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex h-full w-full">
                <Sidebar />
                <Messages />
            </div>
        </div>
    )
  }
  
  export default List