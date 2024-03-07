import MainInput from "@/components/MainInput";
import SearchSvg from "/public/svg/search.svg"
import Link from "next/link";

const Search = () => {
    return(
        <div className="flex justify-center items-center flex-col gap-6 xl:m-24 m-10">
            <div className="z-0 relative xl:scale-100 lg:scale-90">
                <SearchSvg />
            </div>
            <div className="z-10 flex justify-center absolute items-center flex-col xl:gap-4 gap-1">
                <h2 className="xl:text-7xl lg:text-6xl text-xl">
                    دنبال دکتر خاصی هستید؟
                </h2>
                <h2 className="xl:text-7xl lg:text-6xl text-xl">
                    جستجو کنید و نوبت بگیرید.   
                </h2>
                <div className="w-full">
                    <MainInput placeholder="جستجو..." className="h-20"/>
                </div>
                <Link href={'./'} className="text-[var(--link-blue)] text-2xl pt-4"> دیدن تمام خدمات </Link>
            </div>
        </div>
    )
};
export default Search;
