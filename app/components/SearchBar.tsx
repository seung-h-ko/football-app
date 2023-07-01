
import getTeams from "@/util/getTeams";
import SearchBarForm from "./SearchBarForm";
import getTeamsSample from "@/sampleData/getTeamsSample";
import { USE_SAMPLE } from "@/sampleData/useSample";
import { Team } from "@/types";
import Link from "next/link";



export default async function SearchBar() {


    let teamsData: Team[] = [];

    if (USE_SAMPLE) {
        teamsData = getTeamsSample();
    } else {
        teamsData = await getTeams();
    }

    return (
        <div className="flex w-full p-3 justify-center items-center bg-[#11111131]">
            <div className="w-1/6 text-white flex justify-center items-center">
                <Link href={"/"}
                    className="flex justify-center items-center"
                >
                    <img
                        src="/logo.png"
                        alt="Image"
                        className='w-10 object-cover rounded-full'
                    />
                    <div className="px-2 md:block hidden">
                        FootyPopo
                    </div>
                </Link>
            </div>
            <div className="w-4/6 justify-center flex items-center">
                <SearchBarForm teamsData={teamsData} />
            </div>
            <div className="w-1/6">

            </div>
        </div>
    );
}