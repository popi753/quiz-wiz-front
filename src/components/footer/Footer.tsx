import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchFooterData } from "@/services";
import FooterList from "./FooterList";
import { Logo } from "@/components";

export default function Footer() {
    const { data, isLoading } = useQuery({
        queryKey: ['footerData'],
        queryFn: fetchFooterData,
        retry: false,
    });

    return (
        <footer className="w-full h-auto flex flex-col border-t border-gray-300 bg-white">
            <div className="flex-1 w-full flex flex-row justify-start items-start gap-40 px-20 py-10 max-xl:gap-20 max-md:gap-10 max-md:px-10 max-sm:flex-col">
                <Link to="/" className="max-sm:border-b max-sm:border-gray-300 max-sm:w-full max-sm:pb-6">
                    <Logo />
                </Link>
                <FooterList headerText="Content" items={[{ text: "Quizzes", link: "/quizlisting", blank: false }]} />

                {isLoading ? <p>Loading...</p>
                    : data?.map((item, index) => (
                        <FooterList
                            key={index}
                            headerText={item.headerText}
                            items={item.items}
                        />
                    ))
                }
            </div>

            <div className="flex-1 flex flex-row justify-end border-t border-gray-300 px-20 py-6 max-sm:justify-start max-sm:px-10">
                <span className="text-gray-500 font-raleway font-medium text-xs ">© 2024 QW. All rights reserved</span>
            </div>
        </footer>
    );
}