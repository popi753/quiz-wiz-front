import { Outlet} from "react-router"

export default function Layout() {


    return (
        <>
            <main className="w-full flex-1 flex flex-col justify-center items-center relative overflow-hidden">
                <Outlet />
            </main>
        </>
    )
}