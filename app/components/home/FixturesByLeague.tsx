
import { AllFixtures } from "@/types";
import FixtureItem from "./FixtureItem";


interface PageProps {
    fixturesData: AllFixtures,
    league: string
    last: boolean
}


export default function FixturesByLeague({ fixturesData, league, last }: PageProps) {

    if (Array.isArray(fixturesData[league]) && fixturesData[league].length > 0) {
        return fixturesData[league].slice(0, 4).map((match, j) => {
            return <FixtureItem match={match} index={j} key={match.fixture.id} />;
        });
    } else if (last) {
        return <div>No Matches</div>;
    }

}