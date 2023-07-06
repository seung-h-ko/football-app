import 'server-only';
import { Fixture } from '@/types';
import moment from 'moment';
import getFixtures from './getFixtures';

export default async function getFixturesByTeamId(id: number) {
    try {
        const allFixturesByLeague = await getFixtures();

        const fixturesByTeamId: Fixture[] = [];

        for (const league of allFixturesByLeague) {
            for (const fixture of league.fixtures) {
                if (fixture.teams.home.id === id || fixture.teams.away.id === id) {
                    fixturesByTeamId.push(fixture);
                }
            }
        }

        const fixturesByTeamIdSorted: Fixture[] = fixturesByTeamId.sort((a, b) => {
            const time1 = moment(a.fixture.date);
            const time2 = moment(b.fixture.date);
            if (time1.isBefore(time2)) {
                return -1;
            }
            if (time1.isAfter(time2)) {
                return 1;
            }
            return 0;
        });

        return fixturesByTeamIdSorted;
    } catch (error) {
        console.error('An error occurred while fetching fixtures by team ID:', error);
        throw error;
    }
}
