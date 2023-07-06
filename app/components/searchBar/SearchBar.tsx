
import getTeams from "@/util/getTeams";
import SearchBarForm from "./SearchBarForm";
import { Team } from "@/types";



export default async function SearchBar() {


    let teamsData: Team[] = await getTeams();

    return (
        <div className="flex w-full p-3 justify-center items-center bg-black/40">
            <div className="w-1/6 text-neutral-100 flex justify-center items-center">
                <a href={"/"}
                    className="flex justify-center items-center"
                >
                    <img
                        src="/logo.png"
                        alt="Image"
                        className='w-10 object-cover rounded-full'
                    />
                    <div className="px-2 md:block hidden font-bold text-xl">
                        FootyPopo
                    </div>
                </a>
            </div>
            <div className="w-4/6 justify-center flex items-center">
                <SearchBarForm teamsData={teamsData} />
            </div>
            <div className="w-1/6">

            </div>
        </div>
    );
}