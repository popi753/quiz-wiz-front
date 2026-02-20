import { CheckMark } from "@/components";

export default function AppliedSorterItem({ icon, text, value }: { icon: React.ReactNode, text: string, value: string }) {
    return (
        <div className="flex-1 flex flex-row items-center px-3 py-2 rounded-lg has-[input:checked]:bg-gray-100 ">
            <label htmlFor={text.toLowerCase()} className="flex-1 flex flex-row justify-between items-center font-semibold text-sm text-gray-600 leading-6 cursor-pointer rounded-lg ">
                <div className="flex flex-row items-center gap-4">
                    {icon}
                    {text}
                </div>
                <input className="hidden peer" type="radio" name="sorter" value={value} id={text.toLowerCase()} />
                <CheckMark className="hidden peer-checked:block" />
            </label>
        </div>
    );
};