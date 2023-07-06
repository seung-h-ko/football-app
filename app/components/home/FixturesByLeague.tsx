
import { Fixture } from "@/types";
import FixtureItem from "./FixtureItem";


interface PageProps {
    fixturesData: Fixture[]
}


export default function FixturesByLeague({ fixturesData }: PageProps) {

    if (fixturesData.length > 0) {
        return fixturesData.slice(0, 4).map((match, j) => {
            return <FixtureItem match={match} index={j} key={match.fixture.id} />;
        });
    }

}