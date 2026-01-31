import { useEffect, useState } from "react";
import clsx from "clsx";
import { type Toast } from "@/contexts/ToastContext";

export default function Toast({ type, toast, icon }: { type: string, toast: Toast, icon: React.ReactNode }) {
  const [dissaperBorder, setDissaperBorder] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDissaperBorder(true)
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className="absolute z-100 top-5 right-5 flex gap-2.5 w-86 max-h-40 text-white ">
      <div className={clsx("w-full h-full rounded-lg px-4 py-3 gap-4 bg-gray-700 shadow-[0px_16px_24px_0px_#00000024] flex flex-row items-center p-4 border-b-4 duration-3000!",
        {
          "border-green-500": type === "success" && !dissaperBorder,
          "border-yellow-500": type === "warning" && !dissaperBorder,
          "border-red-500": type === "error" && !dissaperBorder,
          "border-transparent": dissaperBorder
        })}
      >
        <div className={clsx("bg-gray-600 min-w-8 h-8 flex items-center justify-center rounded-full",
          {
            "shadow-[5px_0_75px_20px_green]": type === "success",
            "shadow-[5px_0_75px_20px_yellow]": type === "warning",
            "shadow-[5px_0_75px_20px_red]": type === "error"
          }
        )} >
          {icon}
        </div>
        <div>
          <h6 className="font-Raleway font-bold text-lg leading-5 tracking-[-0.5px] align-middle">
            {toast.header}
          </h6>
          <span className="text-sm leading-4 align-middle line-clamp-3" title={toast.message}>
            {toast.message}
          </span>
        </div>
      </div>
    </div>
  );
};