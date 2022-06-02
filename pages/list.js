import Header from "../components/layout/header"
import Sidebar from "../components/layout/sidebar"

function List() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex h-full">
                <Sidebar />
                <div>List</div>
            </div>
        </div>
    )
  }
  
  export default List