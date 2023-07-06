import 'server-only'
import { Fixture } from '@/types';
import getFixturesSample from './getFixturesSample';

export default function getFixtureByFixtureIdSample(id: number) {


    const fixturesSampleByYear = getFixturesSample();

    let fixtureByFixtureId!: Fixture;

    // for (let fixturesSample of fixturesSampleByYear) {
    //     for (let league in fixturesSample) {
    //         if (fixturesSample.hasOwnProperty(league)) {
    //             const fixturesByLeague = fixturesSample[league] as Fixture[];
    //             for (const fixture of fixturesByLeague) {
    //                 if (fixture.fixture.id == id) {
    //                     fixtureByFixtureId = fixture;
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    // }


    return fixtureByFixtureId;
};
