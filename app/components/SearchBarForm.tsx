'use client'

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Team } from "@/types";
import Link from "next/link";




export default function SearchBarForm({
    teamsData
}: {
    teamsData: Team[];
}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [showFilteredBox, setShowFilteredBox] = useState(false);

    const filteredTeams = teamsData.filter(team =>
        team.team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setFocusedIndex(-1);
        setShowFilteredBox(true);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setFocusedIndex(prevIndex => (prevIndex < filteredTeams.length - 1 ? prevIndex + 1 : prevIndex));
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setFocusedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        } else if (event.key === 'Enter') {
            if (focusedIndex !== -1) {
                const teamId = filteredTeams[focusedIndex].team.id;
                router.push(`/team/${teamId}`);
                setSearchTerm('');
            }
        }
    };

    const handleTeamItemClick = () => {
        setSearchTerm('');
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (teamListRef.current && !teamListRef.current.contains(event.target as Node)) {
            setShowFilteredBox(false);
        }
    };

    const teamListRef = useRef<HTMLDivElement>(null);

    let router = useRouter();

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (

        <div className="w-full max-w-lg flex justify-center items-center relative">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                placeholder="Search for a team"
                className="w-full bg-gradient-to-r from-[#999999b0] to-[#99999901] bg-transparent
                    p-2 outline-none border-[#99999970] border-[1px] rounded-xl hover:border-blue-400
                    focus:border-blue-400 focus:from-[#93c5ffb0] text-white placeholder:text-[#cccccc]" />
            {searchTerm && filteredTeams.length > 0 && showFilteredBox ? (
                <div
                    ref={teamListRef}
                    className="absolute top-full left-[8px] w-full max-w-md bg-[#111111ee] z-20 flex flex-col"
                >
                    {filteredTeams.slice(0, 10).map((standing, i) => (
                        <Link
                            href={`/team/${standing.team.id}`}
                            key={standing.team.id}
                            className={`p-2 text-white ${i === focusedIndex ? 'bg-[#aaaaaaaa]' : ''}`}
                            onClick={() => handleTeamItemClick()}
                        >
                            {standing.team.name}
                        </Link>
                    ))}
                </div>
            ) : null}
        </div>

    );
}