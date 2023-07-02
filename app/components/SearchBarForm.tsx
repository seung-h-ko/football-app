'use client'

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Team } from "@/types";




export default function SearchBarForm({
    teamsData
}: {
    teamsData: Team[];
}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const filteredTeams = teamsData.filter(team =>
        team.team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setFocusedIndex(-1);
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

    const teamListRef = useRef<HTMLDivElement>(null);

    let router = useRouter();

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
            {searchTerm && filteredTeams.length > 0 ? (
                <div
                    ref={teamListRef}
                    className="absolute top-full left-[8px] w-full max-w-md bg-[#111111ee] z-20"
                >
                    {filteredTeams.slice(0, 10).map((standing, i) => (
                        <div
                            key={standing.team.id}
                            className={`p-2 text-white ${i === focusedIndex ? 'bg-[#aaaaaaaa]' : ''}`}
                        >
                            {standing.team.name}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>

    );
}