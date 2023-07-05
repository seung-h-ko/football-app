import getFixtureByFixtureIdSample from "@/sampleData/getFixtureByFixtureIdSample";
import { USE_SAMPLE } from "@/sampleData/useSample";
import { Fixture } from "@/types";
import getFixtureByFixtureId from "@/util/getFixtureByFixtureId";
import Image from "next/image";
import LocalTime from "../../components/LocalTime";
import Link from "next/link";

interface PageProps {
    params: {
        id: string
    }
}

export const revalidate = 60 * 60;

export default async function Match({
    params
}: PageProps) {

    let fixtureByFixtureId!: Fixture;
    if (USE_SAMPLE) {
        fixtureByFixtureId = getFixtureByFixtureIdSample(parseInt(params.id));
    } else {
        fixtureByFixtureId = await getFixtureByFixtureId(parseInt(params.id));
    }

    return (
        <div className="flex flex-col w-full justify-center items-center py-10 md:p-10">
            <div className="flex w-full max-w-7xl items-center justify-center perspective pb-10 md:pb-20">
                <div className="w-1/3 rounded-full animate-logo-pop-left logo-shadow flex justify-center">
                    <Link href={`../team/${fixtureByFixtureId.teams.home.id}`}>
                        <Image
                            src={fixtureByFixtureId.teams.home.logo}
                            alt="Image"
                            width={250}
                            height={250}
                            className=""
                        />
                    </Link>
                </div>
                <div className="w-1/3 flex flex-col items-center justify-center text-white h-56">
                    <div className="h-1/5 flex justify-center items-center text-base md:text-xl text-center">
                        <LocalTime fixture={fixtureByFixtureId} />
                    </div>
                    <div className="h-2/5 w-full flex justify-between items-center text-5xl">
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
                    <div className="h-1/5 flex justify-center items-center text-base md:text-xl text-center">
                        {fixtureByFixtureId.fixture.venue.name}
                    </div>
                </div>
                <div className="w-1/3 rounded-full animate-logo-pop-right logo-shadow flex justify-center">
                    <Link href={`../team/${fixtureByFixtureId.teams.away.id}`}>
                        <Image
                            src={fixtureByFixtureId.teams.away.logo}
                            alt="Image"
                            width={250}
                            height={250}
                            className=""
                        />
                    </Link>
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