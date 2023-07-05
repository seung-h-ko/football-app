import { League } from '@/types';
import 'server-only';

interface Standing {
    league: League;
}

export default async function getStandings() {
    const API_KEY: string = process.env.API_KEY as string;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        },
        next: {
            revalidate: 60 * 60 * 24,
        },
    };

    const standings: Standing[] = [];


    // EPL
    try {
        let url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=39';

        const response = await fetch(url, options);
        const result = await response.json();

        const eplStanding = result.response[0];
        if (eplStanding) {
            standings.push(eplStanding);
        }
    } catch (error) {
        console.error('Error fetching EPL standings:', error);
    }

    // Laliga
    try {
        let url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=140';

        const response = await fetch(url, options);
        const result = await response.json();

        const laLigaStanding = result.response[0];
        if (laLigaStanding) {
            standings.push(laLigaStanding);
        }
    } catch (error) {
        console.error('Error fetching La Liga standings:', error);
    }

    // BundesLiga
    try {
        let url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=78';

        const response = await fetch(url, options);
        const result = await response.json();

        const bundesLigaStanding = result.response[0];
        if (bundesLigaStanding) {
            standings.push(bundesLigaStanding);
        }
    } catch (error) {
        console.error('Error fetching Bundesliga standings:', error);
    }

    // Serie A
    try {
        let url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=135';

        const response = await fetch(url, options);
        const result = await response.json();

        const serieAStanding = result.response[0];
        if (serieAStanding) {
            standings.push(serieAStanding);
        }
    } catch (error) {
        console.error('Error fetching Serie A standings:', error);
    }

    // Ligue 1
    try {
        let url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=61';

        const response = await fetch(url, options);
        const result = await response.json();

        const ligue1Standing = result.response[0];
        if (ligue1Standing) {
            standings.push(ligue1Standing);
        }
    } catch (error) {
        console.error('Error fetching Ligue 1 standings:', error);
    }

    return standings;
}
