import 'server-only';
import getFixtures from './getFixtures';
import { Fixture } from '@/types';

export default async function getFixtureByFixtureId(id: number): Promise<Fixture | undefined> {

    try {
        const allFixturesByLeague = await getFixtures();

        for (const league of allFixturesByLeague) {
            for (const fixture of league.fixtures) {
                if (fixture.fixture.id === id) {
                    return fixture;
                }
            }
        }

        return undefined;
    } catch (error) {
        console.error('Error occurred while fetching fixtures:', error);
        throw error;
    }
}
