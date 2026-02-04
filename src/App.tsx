import { Routes, Route } from "react-router";
import { Error404Icon, ErrorPage, Layout, Register } from "@/components";
import { Auth, LandingPage } from "@/routes";

function App() {
    return (
        <Routes>
            <Route path="/register" element={<Auth children={<Register />} bgImageUrl="bg-[url('@/assets/register-bg.png')]"/>} />
            
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route
                    path="*"
                    element={<ErrorPage errorText="Oops!" errorCode={404} icon={<Error404Icon />} />}
                />
            </Route>
        </Routes>
    );
};

export default App;
