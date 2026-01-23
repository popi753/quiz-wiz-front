import { Outlet } from "react-router";
import { Header } from "@/components";


export default function Layout() {


  return (
    <>
      <Header></Header>
      <main className="w-full flex-1 flex flex-col justify-center items-center relative overflow-hidden">
       
        <Outlet />
      </main>
    
    </>
  );
}
