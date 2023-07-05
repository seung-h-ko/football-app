import 'server-only';
import getFixtures from './getFixtures';
import { Fixture } from '@/types';

export default async function getFixtureByFixtureId(id: number) {
    let fixtureByFixtureId: Fixture | undefined;

    try {
        const fixturesByYear = await getFixtures();

        for (const fixtures of fixturesByYear) {
            for (const league in fixtures) {
                if (fixtures.hasOwnProperty(league)) {
                    const fixturesByLeague = fixtures[league] as Fixture[];
                    for (const fixture of fixturesByLeague) {
                        if (fixture.fixture.id === id) {
                            fixtureByFixtureId = fixture;
                            break;
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error occurred while fetching fixtures:', error);
    }

    return fixtureByFixtureId;
}
