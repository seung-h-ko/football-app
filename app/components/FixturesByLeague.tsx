
import { AllFixtures } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import moment from 'moment';
import LocalTime from "./LocalTime";
import StandingMatch from "./StandingMatch";


interface PageProps {
    fixturesData: AllFixtures,
    league: string
}


export default function FixturesByLeague({ fixturesData, league }: PageProps) {
    if (fixturesData[league]) {
        return fixturesData[league]?.slice(0, 4).map((match, j) => {
            return <StandingMatch match={match} index={j} key={match.fixture.id} />;
        });
    }

    return <div>No Matches</div>;
}