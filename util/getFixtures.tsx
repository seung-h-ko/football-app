import getFixturesSample from '@/sampleData/getFixturesSample';
import { USE_SAMPLE } from '@/sampleData/useSample';
import { AllFixtures, Fixture } from '@/types';
import moment from 'moment';
import 'server-only';

const API_KEY = process.env.API_KEY as string;
const API_HOST = 'api-football-v1.p.rapidapi.com';

const leagues = [
    { league: 39, name: 'EPL' },
    { league: 140, name: 'La Liga' },
    { league: 78, name: 'Bundesliga' },
    { league: 135, name: 'Serie A' },
    { league: 61, name: 'Ligue 1' },
    { league: 2, name: 'Champions League' },
    { league: 3, name: 'Europa League' },
    { league: 848, name: 'Conference League' },
    // { league: 667, name: 'club friendlies' },
    { league: 531, name: 'UEFA Super Cup' },
    { league: 15, name: 'Fifa Club World Cup' },
    { league: 45, name: 'FA Cup' },
    { league: 48, name: 'Carabao Cup' },
    { league: 528, name: 'Community Shield' },
    { league: 143, name: 'Copa Del Rey' },
    { league: 556, name: 'Super Cup Bundes' },
    { league: 529, name: '' },
    { league: 547, name: 'Super Cup Serie A' },
    { league: 137, name: 'Coppa Italia' },
    { league: 65, name: 'Coupe de la Ligue' },
    { league: 66, name: 'Coupe de France' },
    { league: 526, name: 'Trophee des Champions' },
];

async function fetchFixturesByLeague(year: number, league: number): Promise<Fixture[]> {
    const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${league}&season=${year}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
        },
        next: {
            revalidate: 60 * 60 * 24,
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.response === null || result.response === undefined) {
            return [];
        } else {
            return result.response;
        }
    } catch (error) {
        throw new Error(`Failed to fetch fixtures for league ${league}: ${error}`);
    }
}

export default async function getFixtures(): Promise<AllFixtures[]> {

    if (USE_SAMPLE) {
        return getFixturesSample();
    }


    try {
        const currentTime = moment();
        const year = currentTime.year();
        const month = currentTime.month();

        const allFixturesByLeague: AllFixtures[] = [];

        for (const league of leagues) {
            if (month <= 5) {
                allFixturesByLeague.push({
                    name: league.name,
                    fixtures: await fetchFixturesByLeague(year - 1, league.league),
                });
            } else if (month >= 8) {
                // July or after
                allFixturesByLeague.push({
                    name: league.name,
                    fixtures: await fetchFixturesByLeague(year, league.league),
                });
            } else {
                allFixturesByLeague.push({
                    name: league.name,
                    fixtures: await fetchFixturesByLeague(year - 1, league.league),
                });
                const existingData = allFixturesByLeague.find((data) => data.name === league.name);
                if (existingData) {
                    existingData.fixtures.push(...(await fetchFixturesByLeague(year, league.league)));
                } else {
                    allFixturesByLeague.push({
                        name: league.name,
                        fixtures: await fetchFixturesByLeague(year, league.league),
                    });
                }
            }
        }

        return allFixturesByLeague;
    } catch (error) {
        console.error('An error occurred while fetching fixtures:', error);
        throw error;
    }
}
