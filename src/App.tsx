import { Routes, Route } from "react-router";
import { Error404Icon, ErrorPage, ForgotPassword, Layout, Login, Register, ResetPassword } from "@/components";
import { Auth, LandingPage, QuizFillingPage, QuizListingPage, QuizOverviewPage } from "@/routes";
import { useApp } from "@/hooks";

function App() {

    const {isMobile, backgroundUrlLocation} = useApp();

    return (
        <>
            <Routes location={backgroundUrlLocation || undefined}>
                <Route path="/register" element={<Auth children={<Register />} bgImageUrl="bg-[url('@/assets/register-bg.png')]" />} />
                <Route path="/login" element={<Auth children={<Login />} bgImageUrl="bg-[url('@/assets/login-bg.png')]" />} />
                <Route path="/forgotpassword" element={<Auth children={<ForgotPassword />} bgImageUrl="bg-[url('@/assets/resetpassword-bg.png')]" />} />
                <Route path="/resetpassword" element={<Auth children={<ResetPassword />} bgImageUrl="bg-[url('@/assets/resetpassword-bg.png')]" />} />

                <Route path="/filling/:id" element={<QuizFillingPage />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/quizlisting" element={<QuizListingPage />} />
                    <Route path="/quiz/:id" element={<QuizOverviewPage />} />

                    <Route
                        path="*"
                        element={<ErrorPage errorText="Oops!" errorCode={404} icon={<Error404Icon />} />}
                    />
                </Route>
            </Routes>

            {(isMobile && backgroundUrlLocation) && (
                <Routes>
                    <Route path="/register" element={<Auth children={<Register />} />} />
                    <Route path="/login" element={<Auth children={<Login />} />} />
                    <Route path="/forgotpassword" element={<Auth children={<ForgotPassword />} />} />
                    <Route path="/resetpassword" element={<Auth children={<ResetPassword />} />} />
                </Routes>
            )}
        </>
    );
};

export default App;
