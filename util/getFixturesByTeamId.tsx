import 'server-only'
import getFixtures from './getFixtures';
import { Fixture } from '@/types';
import moment from 'moment';

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
};
