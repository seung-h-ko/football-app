import 'server-only';
import { AllFixtures } from '@/types';
import moment from 'moment';
import getFixtures from './getFixtures';

export default async function getFixturesForFive(): Promise<AllFixtures[]> {
    try {
        const allFixturesByLeague = await getFixtures();

        const fixturesFor5Leagues: AllFixtures[] = [];
        for (const league of allFixturesByLeague) {
            if (
                league.name === 'EPL' ||
                league.name === 'La Liga' ||
                league.name === 'Bundesliga' ||
                league.name === 'Serie A' ||
                league.name === 'Ligue 1'
            ) {
                fixturesFor5Leagues.push(league);
            }
        }

        const filteredFixtures: AllFixtures[] = allFixturesByLeague.filter(
            (league) => {
                league.fixtures = league.fixtures.filter((fixture) => {
                    return moment(fixture.fixture.date).isAfter(moment().subtract(1, 'day'), 'day');
                }).slice(0, 5);
                return league.fixtures.length > 0;
            }
        );

        return filteredFixtures;
    } catch (error) {
        console.error('An error occurred while fetching fixtures:', error);
        throw error;
    }
}

