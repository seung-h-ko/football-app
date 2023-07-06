import 'server-only';
import getFixtures from './getFixtures';
import { Fixture } from '@/types';

export default async function getFixtureByFixtureId(id: number): Promise<Fixture> {

    try {
        const allFixturesByLeague = await getFixtures();

        for (const league of allFixturesByLeague) {
            for (const fixture of league.fixtures) {
                if (fixture.fixture.id === id) {
                    return fixture;
                }
            }
        }

        throw new Error(`Fixture with ID ${id} not found`);
    } catch (error) {
        console.error('Error occurred while fetching fixtures:', error);
        throw error;
    }
}
