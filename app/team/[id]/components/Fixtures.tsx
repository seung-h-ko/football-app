'use client'

import { Fixture } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';



const Fixtures = ({
    fixturesByTeamId
}: {
    fixturesByTeamId: Fixture[]
}) => {
    // fixturesDone
    const [visibleItemsCount, setVisibleItemsCount] = useState(5);
    // fixturesFuture
    const [currentIndex, setCurrentIndex] = useState(0);

    // fixturesDone
    const handleShowMore = () => {
        setVisibleItemsCount((prevCount) => prevCount + 5);
    };

    const [today, setToday] = useState("");

    useEffect(() => {
        setToday(new Date().toISOString().slice(0, 10)); //This gets only the year/month/day
    }, [])

    const fixturesDone = fixturesByTeamId.filter(fixture => {
        const fixtureDate = new Date(fixture.fixture.date).toISOString().slice(0, 10);
        return fixtureDate < today;
    })
    const fixturesToday = fixturesByTeamId.filter(fixture => {
        const fixtureDate = new Date(fixture.fixture.date).toISOString().slice(0, 10);
        return fixtureDate === today;
    })
    const fixturesFuture = fixturesByTeamId.filter(fixture => {
        const fixtureDate = new Date(fixture.fixture.date).toISOString().slice(0, 10);
        return fixtureDate > today;
    })

    const reversedFixturesDoneData = [...fixturesDone].reverse();

    const firstItemsFixturesDone = reversedFixturesDoneData.slice(0, visibleItemsCount);

    // fixturesFuture
    const firstItemsFixturesFuture = fixturesFuture.slice(0, 5);
    const prevItem = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? 0 : prevIndex - 1));
    };
    const nextItem = () => {
        setCurrentIndex(prevIndex => (prevIndex === firstItemsFixturesFuture.length - 1 ? firstItemsFixturesFuture.length - 1 : prevIndex + 1));
    };
    const getTranslateX = (index: number) => {
        return `-${index * 100}%`;
    };


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

    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col w-full justify-center items-center">
                <div className="flex w-full justify-center items-center text-white p-2 
                                bg-gradient-to-r from-[#aa0000bb] to-[#aa000055]">
                    Upcoming Matches
                </div>
                <div className="flex items-center justify-center relative overflow-hidden w-full">
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
                        onClick={prevItem}
                    >
                        <ChevronDoubleLeftIcon className={`h-10 w-10 ${currentIndex === 0 ? 'text-gray-600' : 'text-white'}`} />
                    </button>
                    <div
                        className="flex transition-transform duration-500 w-full"
                        style={{ transform: `translateX(${getTranslateX(currentIndex)})` }}
                    >
                        {firstItemsFixturesFuture.map((fixture, i) => (
                            <div
                                key={fixture.fixture.id}
                                className="w-full flex-shrink-0 flex text-white items-center h-36
                                bg-gradient-to-r from-[#000000ee] to-[#333333e3]"
                            >
                                <div className="flex flex-col justify-center items-center w-3/12 text-[15px] text-center">
                                    <Image
                                        src={fixture.teams.home.logo}
                                        alt="HomeLogo"
                                        width={70}
                                        height={70}
                                    />
                                    <div>{fixture.teams.home.name}</div>
                                </div>
                                <div className="flex flex-col justify-center items-center w-1/2 h-full py-2">
                                    <div className="text-[10px] h-1/6">
                                        {fixture.league.name}
                                    </div>
                                    <div className="text-[12px] h-1/6">
                                        {formatToLocalTime(fixture.fixture.date)}
                                    </div>
                                    <div className="flex w-full justify-between items-center h-2/6
                                text-[25px]">
                                        <div>
                                            {fixture.goals.home}
                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div>
                                            {fixture.goals.away}
                                        </div>
                                    </div>
                                    <div className="h-1/6 text-[10px]">
                                        {fixture.fixture.venue.name}
                                    </div>
                                    <div className="h-1/6">
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center w-3/12">
                                    <Image
                                        src={fixture.teams.away.logo}
                                        alt="AwayLogo"
                                        width={70} // Set the desired width of the image
                                        height={70} // Set the desired height of the image
                                    />
                                    <h3>{fixture.teams.away.name}</h3>
                                </div>
                                <div className='w-[2%] h-full'></div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
                        onClick={nextItem}
                    >
                        <ChevronDoubleRightIcon className={`h-10 w-10 ${currentIndex === firstItemsFixturesFuture.length - 1 ? 'text-gray-600' : 'text-white'}`} />
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                <div className="flex w-full justify-center items-center text-white p-2 
                                bg-gradient-to-r from-[#aa0000bb] to-[#aa000055]">
                    Match Results
                </div>
                {
                    firstItemsFixturesDone.map((fixture, i) => (
                        <div
                            key={i}
                            className="flex w-full text-white items-center h-36
                        bg-gradient-to-r from-[#000000ee] to-[#333333e3]"
                        >
                            <div
                                className={`flex w-full h-full justify-center items-center p-2
                                        ${i % 2 == 0 ? 'bg-[#00000055]' : ''}
                                        hover:bg-[#aa000055]`}
                                onClick={() => handleFixtureClick(fixture.fixture.id)}
                            >
                                <div className="flex flex-col justify-center items-center w-3/12 text-[15px] text-center">
                                    <Image
                                        src={fixture.teams.home.logo}
                                        alt="HomeLogo"
                                        width={70}
                                        height={70}
                                    />
                                    <div>{fixture.teams.home.name}</div>
                                </div>
                                <div className="flex flex-col justify-center items-center w-1/2 h-full py-2">
                                    <div className="text-[10px] h-1/6">
                                        {fixture.league.name}
                                    </div>
                                    <div className="text-[12px] h-1/6">
                                        {formatToLocalTime(fixture.fixture.date)}
                                    </div>
                                    <div className="flex w-full justify-between items-center h-2/6
                                text-[25px]">
                                        <div>
                                            {fixture.goals.home}
                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div>
                                            {fixture.goals.away}
                                        </div>
                                    </div>
                                    <div className="h-1/6 text-[10px]">
                                        {fixture.fixture.venue.name}
                                    </div>
                                    <div className="h-1/6">
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center w-3/12">
                                    <Image
                                        src={fixture.teams.away.logo}
                                        alt="AwayLogo"
                                        width={70} // Set the desired width of the image
                                        height={70} // Set the desired height of the image
                                    />
                                    <h3>{fixture.teams.away.name}</h3>
                                </div>
                            </div>
                            <div className={`w-[2%] h-full ${fixture.teams.home.winner ? 'bg-green-600' : !fixture.teams.home.winner && fixture.teams.away.winner ? 'bg-red-600' : 'bg-slate-600'}`}></div>
                        </div>
                    ))
                }
                {
                    visibleItemsCount < fixturesByTeamId.length && (
                        <div className="p-2">
                            <button
                                onClick={handleShowMore}
                                className="bg-gradient-to-r from-[#000000b0] to-[#333333] text-white p-4"
                            >Show more</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Fixtures;