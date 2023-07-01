"use client"

import { AllFixtures } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface PageProps {
    fixturesData: AllFixtures,
    league: string
}


export default function FixturesByLeague({
    fixturesData,
    league
}: PageProps) {

    let router = useRouter();

    const handleFixtureClick = (fixtureId: number) => {
        router.push(`/match/${fixtureId}`);
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

    if (fixturesData[league]) {
        return (
            fixturesData[league]?.slice(0, 4).map((match, j) => {
                const date = new Date();
                const matchDate = new Date(match.fixture.date);

                if (date < matchDate) {
                    return (
                        <div
                            key={match.fixture.id}
                            className={`flex w-full p-2 justify-center items-center h-36 hover:bg-[#aa000077]
                                ${j % 2 == 0 ? "bg-[#00000033]" : ''}
                                animated-div`}
                            onClick={() => handleFixtureClick(match.fixture.id)}
                        >
                            <div className='w-1/3 flex flex-col justify-center items-center text-center'>
                                <Image
                                    src={match.teams.home.logo}
                                    alt="HomeLogo"
                                    width={70}
                                    height={70}
                                />
                                {match.teams.home.name}
                            </div>
                            <div className='w-1/3 flex flex-col justify-center items-center h-full'>
                                <div className='h-1/3 text-[9px] text-center'>{formatToLocalTime(match.fixture.date)}</div>
                                <div className='h-1/3 text-center'>vs</div>
                                <div className='h-1/3'></div>
                            </div>
                            <div className='w-1/3 flex flex-col justify-center items-center text-center'>
                                <Image
                                    src={match.teams.away.logo}
                                    alt="AwayLogo"
                                    width={70}
                                    height={70}
                                />
                                {match.teams.away.name}
                            </div>
                        </div>
                    )
                }
            })

        )
    }

    return (
        <div>
            No Matches
        </div>
    )

}