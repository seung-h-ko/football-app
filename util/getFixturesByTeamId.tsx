import 'server-only'
import getFixtures from './getFixtures';
import { Fixture } from '@/types';

export default async function getFixturesByTeamId(id: number) {


    const fixturesByYear = await getFixtures();

    const fixturesByTeamId: Fixture[] = [];

    for (let fixtures of fixturesByYear) {
        for (let league in fixtures) {
            if (fixtures.hasOwnProperty(league)) {
                const fixturesByLeague = fixtures[league] as Fixture[];
                for (const fixture of fixturesByLeague) {
                    if (fixture.teams.home.id == id || fixture.teams.away.id == id) {
                        fixturesByTeamId.push(fixture);
                    }
                }
            }
        }
    }

    const fixturesByTeamIdSorted: Fixture[] = fixturesByTeamId.sort((a, b) => {
        const dateA = new Date(a.fixture.date).getTime();
        const dateB = new Date(b.fixture.date).getTime();
        return dateA - dateB;
    });



    return fixturesByTeamIdSorted;
};
