
import { AllFixtures } from "@/types";
import FixtureItem from "./FixtureItem";


interface PageProps {
    fixturesData: AllFixtures,
    league: string
}


export default function FixturesByLeague({ fixturesData, league }: PageProps) {

    if (Array.isArray(fixturesData[league]) && fixturesData[league].length > 0) {
        return fixturesData[league].slice(0, 4).map((match, j) => {
            return <FixtureItem match={match} index={j} key={match.fixture.id} />;
        });
    } else {
        return <div>No Matches</div>;
    }

}