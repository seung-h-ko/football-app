import { Fixture } from "@/types";
import getFixturesSample from "./getFixturesSample";

export default function getFixturesByTeamIdSample(id: number) {


    const fixturesSampleByYear = getFixturesSample();

    const fixturesByTeamId: Fixture[] = [];

    // for (let fixturesSample of fixturesSampleByYear) {
    //     for (let league in fixturesSample) {
    //         if (fixturesSample.hasOwnProperty(league)) {
    //             const fixturesByLeague = fixturesSample[league] as Fixture[];
    //             for (const fixture of fixturesByLeague) {
    //                 if (fixture.teams.home.id == id || fixture.teams.away.id == id) {
    //                     fixturesByTeamId.push(fixture);
    //                 }
    //             }
    //         }
    //     }
    // }


    return fixturesByTeamId;
};
