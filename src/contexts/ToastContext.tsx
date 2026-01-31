import { createContext, useContext, useState, useCallback } from 'react'
import { CheckCircle, WarningCircle, ErrorCircle, Toast } from '@/components'

export type Toast = {
    header: string,
    message: string,
}

export const ToastContext = createContext<(type: string, toast: Toast) => void>(() => { })

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [type, setType] = useState("")
    const [toast, setToast] = useState<Toast>({ header: "", message: "" })

    const showToast = useCallback((type: string, toast: Toast) => {
        setType(type);
        setToast(toast);

        setTimeout(() => {
            setType("");
        }, 5000)
    }, []);

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            {type === "success" ? <Toast key={Date.now()} type={type} toast={toast} icon={<CheckCircle />} />
                : type === "error" ? <Toast key={Date.now()} type={type} toast={toast} icon={<ErrorCircle />} />
                    : type === "warning" ? <Toast key={Date.now()} type={type} toast={toast} icon={<WarningCircle />} />
                        : null}
        </ToastContext.Provider>
    )
};

export const useToast = () => useContext(ToastContext)
