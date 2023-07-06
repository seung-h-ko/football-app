import { AllFixturesNew, Fixture } from '@/types';
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
    // Add more leagues/tournaments here
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
        return result.response;
    } catch (error) {
        throw new Error(`Failed to fetch fixtures for league ${league}: ${error}`);
    }
}

export default async function getFixturesNew(): Promise<AllFixturesNew[]> {
    const currentTime = moment();
    const year = currentTime.year();
    const month = currentTime.month();

    const allFixturesByLeague: AllFixturesNew[] = [];


    for (const league of leagues) {
        if (month <= 5) {
            allFixturesByLeague.push({
                name: league.name,
                fixtures: await fetchFixturesByLeague(year - 1, league.league)
            })
        } else if (month >= 8) {
            //July or after
            allFixturesByLeague.push({
                name: league.name,
                fixtures: await fetchFixturesByLeague(year, league.league)
            })
        } else {
            allFixturesByLeague.push({
                name: league.name,
                fixtures: await fetchFixturesByLeague(year - 1, league.league)
            })
            const existingData = allFixturesByLeague.find(data => data.name === league.name);
            if (existingData) {
                existingData.fixtures.push(...(await fetchFixturesByLeague(year, league.league)));
            } else {
                allFixturesByLeague.push({
                    name: league.name,
                    fixtures: await fetchFixturesByLeague(year, league.league)
                });
            }

        }
    }

    return allFixturesByLeague;
}
