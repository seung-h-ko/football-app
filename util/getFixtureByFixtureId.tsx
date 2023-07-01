import 'server-only'
import getFixtures from './getFixtures';
import { Fixture } from '@/types';

export default async function getFixtureByFixtureId(id: number) {


    const fixturesByYear = await getFixtures();

    let fixtureByFixtureId!: Fixture;

    for (let fixtures of fixturesByYear) {
        for (let league in fixtures) {
            if (fixtures.hasOwnProperty(league)) {
                const fixturesByLeague = fixtures[league] as Fixture[];
                for (const fixture of fixturesByLeague) {
                    if (fixture.fixture.id == id) {
                        fixtureByFixtureId = fixture;
                        break;
                    }
                }
            }
        }
    }


    return fixtureByFixtureId;
};
