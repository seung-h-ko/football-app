import Image from "next/image";
import Fixtures from "./components/Fixtures";
import getFixturesByTeamId from "@/util/getFixturesByTeamId";
import { Fixture, Team } from "@/types";
import getTeamInfoByTeamId from "@/util/getTeamInfoByTeamId";
import getFixturesByTeamIdSample from "@/sampleData/getFixturesByTeamIdSample";
import getTeamInfoByTeamIdSample from "@/sampleData/getTeamInfoByTeamIdSample";
import { USE_SAMPLE } from "@/sampleData/useSample";


interface PageProps {
    params: {
        id: string
    }
}


export default async function Team({
    params
}: PageProps) {

    let fixturesByTeamId: Fixture[] = [];
    let teamInfo!: Team;
    if (USE_SAMPLE) {
        fixturesByTeamId = getFixturesByTeamIdSample(parseInt(params.id));
        teamInfo = getTeamInfoByTeamIdSample(parseInt(params.id));
    } else {
        fixturesByTeamId = await getFixturesByTeamId(parseInt(params.id));
        teamInfo = await getTeamInfoByTeamId(parseInt(params.id));
    }

    if (teamInfo === null || teamInfo === undefined) {
        return (
            <div className="flex w-full justify-center items-center py-5">
                <div className="flex max-w-7xl p-5 w-full md:flex-row justify-center items-center text-white">
                    Team Info Not Available
                </div>
            </div>
        )
    }
    return (

        <div className="flex w-full justify-center items-center py-5">
            <div className="flex flex-col max-w-7xl p-5 w-full md:flex-row">
                <div className="flex flex-col md:w-1/3 justify-center items-center text-white
                    bg-gradient-to-r from-[#460000b0] to-[#ac0606b7] h-[500px]
                    ">
                    <Image
                        src={teamInfo.team.logo}
                        alt="Image"
                        width={150}
                        height={150}
                        className="p-3"
                    />
                    <div className="text-2xl">
                        {teamInfo.team.name}
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <div className="w-1/3 text-center text-2xl">
                            #{teamInfo.rank}
                        </div>
                        <div className="w-1/3 text-center">
                            {teamInfo.group}
                        </div>
                        <div className="flex flex-col justify-center items-center w-1/3">
                            <div className="text-center">
                                Form
                            </div>
                            <div className="flex justify-center items-center">
                                {
                                    teamInfo.form.split('').map((char, i) => (
                                        <div
                                            key={char + i}
                                            className={`opacity-80 w-3 h-3 m-1 rounded-full ${char === 'L' ? 'bg-red-500' : char === 'D' ? 'bg-gray-500' : 'bg-green-500'
                                                }`}
                                        ></div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full p-2 mt-10">
                        <div className='flex w-full justify-center text-white text-xl'>
                            <div className='w-full text-center font-bold'>
                                P
                            </div>
                            <div className='w-full text-center'>
                                M
                            </div>
                            <div className='w-full text-center'>
                                W
                            </div>
                            <div className='w-full text-center'>
                                D
                            </div>
                            <div className='w-full text-center'>
                                L
                            </div>
                            <div className='w-full text-center'>
                                GF
                            </div>
                            <div className='w-full text-center'>
                                GA
                            </div>
                            <div className='w-full text-center'>
                                GD
                            </div>
                        </div>
                        <div className='flex w-full justify-center items-center text-white text-xl'>
                            <div className='w-full text-center font-bold'>
                                {teamInfo.points}
                            </div>
                            <div className='w-full text-center'>
                                {teamInfo.all.played}
                            </div>
                            <div className='w-full text-center'>
                                {teamInfo.all.win}
                            </div>
                            <div className='w-full text-center'>
                                {teamInfo.all.draw}
                            </div>
                            <div className='w-full text-center'>
                                {teamInfo.all.lose}
                            </div>
                            <div className='w-full text-center'>
                                {teamInfo.all.goals.for}
                            </div>
                            <div className='w-full text-center'>
                                {teamInfo.all.goals.against}
                            </div>
                            <div className='w-full text-center'>
                                {teamInfo.goalsDiff}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:w-2/3">
                    <Fixtures fixturesByTeamId={fixturesByTeamId} teamId={parseInt(params.id)} />
                </div>
            </div>
        </div>

    );
}
