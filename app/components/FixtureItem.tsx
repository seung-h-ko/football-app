'use client'

import { Fixture } from "@/types";
import Image from "next/image";
import LocalTime from "./LocalTime";
import moment, { Moment } from "moment";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PageProps {
    match: Fixture,
    index: number
}


export default function FixtureItem({
    match,
    index
}: PageProps) {

    const [today, setToday] = useState<Moment>(moment());
    const [matchDate, setMatchDate] = useState<Moment>(moment(match.fixture.date));

    let router = useRouter();

    const handleFixtureClick = (fixtureId: number) => {
        router.push(`/match/${fixtureId}`);
    }

    if (!today) {
        return null;
    }

    return today.isBefore(matchDate) ? (
        <div
            key={match.fixture.id}
            className={`flex w-full p-2 justify-center items-center h-36 hover:bg-[#aa000077]
                                ${index % 2 == 0 ? "bg-[#00000033]" : ''}
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
                <div className='h-1/3 text-[9px] text-center'>
                    <LocalTime fixture={match} />
                </div>
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
    ) : null;
}
