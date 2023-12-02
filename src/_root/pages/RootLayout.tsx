import { Outlet } from "react-router-dom"
import Topbar from "@/components/shared/Topbar"
import LeftSideBar from "@/components/shared/LeftSideBar"
import Bottombar from "@/components/shared/BottomBar"
const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar/>
      {/* <Nav/> */}
      <LeftSideBar/>
      <section className=" w-full  items-center justify-center flex flex-1 h-full">
        <Outlet/>
      </section>
      <Bottombar/>
    </div>
  )
}

export default RootLayout