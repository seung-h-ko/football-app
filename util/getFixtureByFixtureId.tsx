import 'server-only';
import getFixtures from './getFixtures';

export default async function getFixtureByFixtureId(id: number) {

    try {
        const allFixturesByLeague = await getFixtures();

        for (const league of allFixturesByLeague) {
            for (const fixture of league.fixtures) {
                if (fixture.fixture.id === id) {
                    return fixture;
                }
            }
        }
    } catch (error) {
        console.error('Error occurred while fetching fixtures:', error);
        throw error;
    }
}
