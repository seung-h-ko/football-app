'use client'

import { Fixture } from "@/types";
import Image from "next/image";
import LocalTime from "./LocalTime";
import moment, { Moment } from "moment";
import { useState } from "react";
import Link from "next/link";

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


    if (!today) {
        return null;
    }

    return today.isBefore(matchDate) ? (
        <Link
            href={`/match/${match.fixture.id}`}
            key={match.fixture.id}
            className={`flex w-full p-2 justify-center items-center h-36 hover:bg-[#aa000077]
                                ${index % 2 == 0 ? "bg-[#00000033]" : ''}
                                animated-div`}
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
        </Link>
    ) : null;
}
