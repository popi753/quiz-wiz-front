import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { BurgerMenuModal, SearchField, useHeaderHook } from "./index";
import { PrimaryButton, Logo, BurgerMenuIcon, PersonIcon, LogOutIcon } from "@/components";
import { handleDetailsBackdropClick } from "@/helpers";
import { onLogout } from "@/services";

export default function Header() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e) => handleDetailsBackdropClick(e, detailsRef));
    return () =>
      document.removeEventListener("click", (e) => handleDetailsBackdropClick(e, detailsRef));
  }, []);

  const { user, handleSetUser, navigate, toast, isMobile, location } = useHeaderHook();

  return (
    <header className="w-full h-18 flex flex-row justify-between items-center px-20 py-3 border-b border-gray-300 max-sm:px-6">
      <div className="flex flex-row justify-between items-center gap-10 max-sm:w-full">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/quizlisting" className="hover:underline max-sm:hidden">
          <span className="font-semibold text-sm leading-6 tracking-normal text-gray-600">
            Quizzes
          </span>
        </Link>

        {isMobile &&
          <div className="flex flex-row items-center gap-4">
            <SearchField />
            <button onClick={() => dialogRef.current?.showModal()}>
              <BurgerMenuIcon />
            </button>
          </div>
        }
      </div>
      <BurgerMenuModal ref={dialogRef} />

      <div className="flex flex-row justify-between items-center gap-4 font-raleway max-sm:hidden">
        <SearchField />
        {user.username ? (
          <details ref={detailsRef}>
            <summary className="flex justify-center items-center gap-2">
              <PersonIcon />
            </summary>
            <div className="z-100 w-80 h-36 absolute right-0 flex flex-col rounded-lg border border-gray-400 bg-white shadow-[0px_1px_4px_0px_#00000026]">
              <div className="flex-1 flex flex-row justify-between items-end px-6 py-8">
                <div className="h-full flex flex-col justify-between items-start">
                  <PersonIcon />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm leading-5">{user.username}</span>
                    <span className="text-sm leading-5">{user.email}</span>
                  </div>
                </div>
                <div
                  onClick={() =>
                    onLogout()
                      .then(() => {
                        handleSetUser({ username: "", email: "" });
                        window.location.reload();
                      })
                      .catch((error) =>
                        toast("error", { header: "Logout Error", message: error.message }),
                      )
                  }
                  className="cursor-pointer"
                >
                  <LogOutIcon />
                </div>
              </div>
            </div>
          </details>
        ) : (
          <>
            <PrimaryButton
              btnType="dark"
              className="w-25 h-10 rounded-sm"
              type="button"
              onClick={() =>
                navigate("/register", { state: { background: isMobile ? location : null } })
              }
            >
              Sign up
            </PrimaryButton>
            <PrimaryButton
              btnType="light"
              className="w-25 h-10 rounded-sm"
              type="button"
              onClick={() =>
                navigate("/login", { state: { background: isMobile ? location : null } })
              }
            >
              Login
            </PrimaryButton>
          </>
        )}
      </div>
    </header>
  );
};
