import getFixtureByFixtureIdSample from "@/sampleData/getFixtureByFixtureIdSample";
import { USE_SAMPLE } from "@/sampleData/useSample";
import { Fixture } from "@/types";
import getFixtureByFixtureId from "@/util/getFixtureByFixtureId";
import Image from "next/image";

interface PageProps {
    params: {
        id: string
    }
}

export default async function Match({
    params
}: PageProps) {

    let fixtureByFixtureId!: Fixture;
    if (USE_SAMPLE) {
        fixtureByFixtureId = getFixtureByFixtureIdSample(parseInt(params.id));
    } else {
        fixtureByFixtureId = await getFixtureByFixtureId(parseInt(params.id));
    }



    function formatToLocalTime(timeUTC: string): string {
        const newTime = new Date(timeUTC);

        const localDateString = newTime.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

        const localTimeString = newTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
        });

        return `${localDateString} ${localTimeString}`;
    }

    return (
        <div className="flex flex-col w-full justify-center items-center py-10 md:p-10">
            <div className="flex w-full max-w-7xl items-center justify-center perspective pb-10 md:pb-20">
                <div className="w-1/3 rounded-full animate-logo-pop-left logo-shadow flex justify-center">
                    <Image
                        src={fixtureByFixtureId.teams.home.logo}
                        alt="Image"
                        width={250}
                        height={250}
                        className=""
                    />
                </div>
                <div className="w-1/3 flex flex-col justify-evenly items-center text-white">
                    <div className="text-base md:text-xl text-center">
                        {formatToLocalTime(fixtureByFixtureId.fixture.date)}
                    </div>
                    <div>
                        <div>
                            {fixtureByFixtureId.goals.home}
                        </div>
                        <div>
                            -
                        </div>
                        <div>
                            {fixtureByFixtureId.goals.away}
                        </div>
                    </div>
                    <div className="text-base md:text-xl text-center">
                        {fixtureByFixtureId.fixture.venue.name}
                    </div>
                </div>
                <div className="w-1/3 rounded-full animate-logo-pop-right logo-shadow flex justify-center">
                    <Image
                        src={fixtureByFixtureId.teams.away.logo}
                        alt="Image"
                        width={250}
                        height={250}
                        className=""
                    />
                </div>
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center py-5 md:p-10
                bg-gradient-to-b from-[#aa000077] to-[#aa000011]">
                <div className="flex flex-col justify-center items-center py-2">
                    <div>
                        {fixtureByFixtureId.league.name}
                    </div>
                    <div>
                        {fixtureByFixtureId.league.round}
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="flex flex-col w-1/2 justify-center items-center p-1">
                        <div className="text-xl md:text-2xl text-center">
                            {fixtureByFixtureId.teams.home.name}
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 justify-center items-center p-1">
                        <div className="text-xl md:text-2xl text-center">
                            {fixtureByFixtureId.teams.away.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}