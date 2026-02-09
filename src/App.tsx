import { Routes, Route } from "react-router";
import { Error404Icon, ErrorPage, ForgotPassword, Layout, Login, Register, ResetPassword } from "@/components";
import { Auth, LandingPage } from "@/routes";

function App() {
    return (
        <Routes>
            <Route path="/register" element={<Auth children={<Register />} bgImageUrl="bg-[url('@/assets/register-bg.png')]" />} />
            <Route path="/login" element={<Auth children={<Login />} bgImageUrl="bg-[url('@/assets/login-bg.png')]" />} />
            <Route path="/forgotpassword" element={<Auth children={<ForgotPassword />} bgImageUrl="bg-[url('@/assets/resetpassword-bg.png')]" />} />
            <Route path="/resetpassword" element={<Auth children={<ResetPassword />} bgImageUrl="bg-[url('@/assets/resetpassword-bg.png')]"/>} />
            


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
