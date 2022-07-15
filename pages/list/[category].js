import Header from "../../components/layout/header"
import Sidebar from "../../components/layout/sidebar"
import Messages from "../../components/layout/messages"
import { useRouter } from "next/router"

function Category() {

    const router = useRouter()
    const { category } = router.query

    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex h-full w-full">
                <Sidebar currentCategory={category} />
                <Messages category={category} />
            </div>
        </div>
    )
  }
  
  export default Category