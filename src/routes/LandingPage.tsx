import { useQuery } from "@tanstack/react-query";
import { fetchLandingPageData } from "@/services";
import { ErrorPage, LargeLogo, GirlReadingIcon, ArrowUpRight, Error500Icon } from "@/components";

export default function LandingPage() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['landingPageData'],
        queryFn: fetchLandingPageData,
        retry: false,
    });

    return (
        <>
            {isLoading ? <div className="loader">Loading...</div> :
                error ? <ErrorPage errorText="Internal Server Error" errorCode={500} icon={<Error500Icon />} /> :
                    (data?.totalQuizzes && data?.totalCategories) ?
                        <>
                            <div className="w-full flex flex-col justify-center items-start gap-8 px-20 pb-28 max-md:gap-4 max-lg:pb-2 max-sm:px-10">
                                <LargeLogo />
                                <p className="font-raleway font-semibold text-3xl leading-12 text-gray-400 max-sm:text-lg sm:max-lg:text-2xl ">Play with us, Explore with us</p>
                            </div>

                            <div className="z-1 w-3/4 aspect-square rounded-full bg-black absolute bottom-1/10 translate-1/2 lg:right-2/10 max-lg:relative max-lg:translate-x-0 max-lg:translate-y-[30%] max-lg:w-[115%] max-lg:-z-3">
                                <GirlReadingIcon className="absolute -top-1/5 left-1/2 -translate-x-[65%] max-md:w-8/10 max-md:top-0 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-[60%] max-md:transform" />
                                <div className="text-left pr-105 pl-56 py-52 max-xl:pl-40 max-xl:pr-80 max-md:p-50 md:max-xl:text-cyan-800 max-sm:px-20 max-sm:pt-24">
                                    <span className="font-bold text-6xl leading-20 text-white max-xl:text-5xl max-xl:leading-16 ">Our mission is to entertain <span className="pr-4">&</span>educate</span>
                                </div>
                            </div>

                            <div className="group cursor-pointer z-0 w-full flex flex-col justify-center items-start gap-4 bg-orange text-white px-24 pt-16 pb-20 max-xl:pb-10 max-xl:pt-8 max-xl:px-12 max-md:px-10 max-md:py-8">
                                <span className="font-raleway font-black text-7xl leading-14 ">{data.totalQuizzes}+</span>
                                <span className="flex items-start gap-4 font-raleway font-black text-5xl leading-14 max-md:underline group-hover:underline"><span>Quiz Games</span> <ArrowUpRight /></span>
                            </div>
                            <div className="group cursor-pointer z-0 w-full flex flex-col justify-center items-start gap-4  bg-purple text-white px-24 pt-8 pb-16 max-xl:pb-10 max-xl:pt-4 max-xl:px-12 max-md:px-10 max-md:py-8">
                                <span className="font-raleway font-black text-7xl leading-14 ">{data.totalCategories}+</span>
                                <span className="flex items-start gap-4 font-raleway font-black text-5xl leading-14 max-md:underline group-hover:underline">Different Genres <ArrowUpRight /></span>
                            </div>
                        </> :
                        <ErrorPage errorText="Internal Server Error" errorCode={500} icon={<Error500Icon />} />
            }
        </>
    );
}