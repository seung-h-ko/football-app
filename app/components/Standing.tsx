'use client'

import { AllFixtures, League } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import FixturesByLeague from './FixturesByLeague';

interface StandingsData {
    league: League
}


const Standing = ({
    standingsData,
    fixturesDataByYear
}: {
    standingsData: StandingsData[]
    fixturesDataByYear: AllFixtures[]
}) => {
    const menuItems = ['EPL', 'SPL', 'Bundesliga', 'Serie A', 'Ligue 1'];
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState(0);

    const scrollToTab = (index: number) => {
        const container = menuRef.current;

        if (container) {
            const tab = container.children[index] as HTMLElement;
            tab?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    };

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        scrollToTab(index);
    };

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (event.shiftKey) {
                event.preventDefault();
            }
        };

        const container = menuRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    let router = useRouter();

    const handleTeamClickFromStanding = (teamId: number) => {
        router.push(`/team/${teamId}`);
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
        <div className='flex flex-col w-full max-w-7xl bg-gradient-to-br from-[#aa0000bb] to-[#aa000033] lg:flex-row'>
            <div className='flex justify-center items-center lg:w-3/5 md:p-10 py-5'>
                <div className='flex flex-col justify-center items-center bg-gradient-to-b from-[#00000055] w-full text-white rounded-3xl'>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className='p-2'>
                            <h2>STANDING</h2>
                        </div>

                        <div className="flex justify-center w-full">
                            {
                                menuItems.map((a, i) => (
                                    <button
                                        key={i}
                                        className={`w-full p-4 rounded-t-lg md:text-[17px] text-[10px]
                         ${i === activeTab ? 'text-gray-100' : 'text-gray-700 bg-[#00000055]'}`}
                                        onClick={() => handleTabClick(i)}
                                    >
                                        {a}
                                    </button>
                                ))
                            }
                        </div>

                        <div
                            ref={menuRef}
                            className="w-full flex overflow-x-hidden snap-x z-10 scrollbar-none scroll-smooth text-[10px] md:text-[15px]"
                        >
                            {
                                standingsData.map((responseData, i) => (
                                    <div
                                        key={responseData.league.id}
                                        className="flex-shrink-0 w-full snap-center flex items-center justify-center"
                                    >
                                        <div className="flex flex-col justify-between p-2 w-full">
                                            <div className='flex w-full p-1'>
                                                <div className='w-1/12 flex px-2 justify-center items-center'>

                                                </div>
                                                <div className='w-3/12'>

                                                </div>
                                                <div className='flex w-6/12 justify-evenly'>
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
                                                    <div className='w-full text-center font-bold'>
                                                        P
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
                                                <div className='flex w-2/12 justify-center'>
                                                    Form
                                                </div>
                                            </div>
                                            {
                                                responseData.league.standings[0].map((team, j) => (
                                                    <div
                                                        key={j + team.team.name}
                                                        className={`flex w-full p-1 ${j % 2 == 0 ? 'bg-[#00000066]' : ''}
                                                             hover:bg-[#ee000066]`}
                                                        onClick={() => handleTeamClickFromStanding(team.team.id)}
                                                    >
                                                        <div className='w-1/12 flex px-2 justify-center items-center'>
                                                            {j + 1}
                                                        </div>
                                                        <div className='flex w-3/12 text-[12px] items-center'>
                                                            {team.team.name}
                                                        </div>
                                                        <div className='flex w-6/12 justify-evenly items-center'>
                                                            <div className='w-full text-center'>
                                                                {team.all.played}
                                                            </div>
                                                            <div className='w-full text-center'>
                                                                {team.all.win}
                                                            </div>
                                                            <div className='w-full text-center'>
                                                                {team.all.draw}
                                                            </div>
                                                            <div className='w-full text-center'>
                                                                {team.all.lose}
                                                            </div>
                                                            <div className='w-full text-center font-bold'>
                                                                {team.points}
                                                            </div>
                                                            <div className='w-full text-center'>
                                                                {team.all.goals.for}
                                                            </div>
                                                            <div className='w-full text-center'>
                                                                {team.all.goals.against}
                                                            </div>
                                                            <div className='w-full text-center'>
                                                                {team.goalsDiff}
                                                            </div>
                                                        </div>
                                                        <div className='flex w-2/12 justify-center items-center'>
                                                            {
                                                                team.form.split('').map((char, i) => (
                                                                    <div
                                                                        key={char + i}
                                                                        className={`opacity-80 w-3 h-3 m-[1px] rounded-full ${char === 'L' ? 'bg-red-500' : char === 'D' ? 'bg-gray-500' : 'bg-green-500'
                                                                            }`}
                                                                    ></div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center lg:w-2/5 pt-10 lg:pr-10 pb-10 lg:pl-0'>
                <div className='flex flex-col justify-center items-center bg-gradient-to-b from-[#00000055] w-full text-white rounded-3xl h-full'>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className='p-2'>
                            <h2>Upcoming matches</h2>
                        </div>
                        <div className='flex flex-col w-full justify-center items-center pb-5 overflow-hidden'>
                            {
                                activeTab === 0 && (
                                    fixturesDataByYear.map((fixturesData, i) => {
                                        return (
                                            <FixturesByLeague fixturesData={fixturesData} league={"epl"} key={activeTab.toString() + i.toString()} />
                                        )
                                    })
                                )
                            }
                            {
                                activeTab === 1 && (
                                    fixturesDataByYear.map((fixturesData, i) => {
                                        return (
                                            <FixturesByLeague fixturesData={fixturesData} league={"laLiga"} key={activeTab.toString() + i.toString()} />
                                        )
                                    })
                                )
                            }
                            {
                                activeTab === 2 && (
                                    fixturesDataByYear.map((fixturesData, i) => {
                                        return (
                                            <FixturesByLeague fixturesData={fixturesData} league={"bundesLiga"} key={activeTab.toString() + i.toString()} />
                                        )
                                    })
                                )
                            }
                            {
                                activeTab === 3 && (
                                    fixturesDataByYear.map((fixturesData, i) => {
                                        return (
                                            <FixturesByLeague fixturesData={fixturesData} league={"serieA"} key={activeTab.toString() + i.toString()} />
                                        )
                                    })
                                )
                            }
                            {
                                activeTab === 4 && (
                                    fixturesDataByYear.map((fixturesData, i) => {
                                        return (
                                            <FixturesByLeague fixturesData={fixturesData} league={"ligue1"} key={activeTab.toString() + i.toString()} />
                                        )
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Standing;

