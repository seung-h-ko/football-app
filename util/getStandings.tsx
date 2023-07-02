import { League } from '@/types';
import 'server-only'


interface Standing {
    league: League
}

export default async function getStandings() {

    const API_KEY: string = process.env.API_KEY as string;

    // EPL
    let url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=39';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        },
        next: {
            revalidate: 60 * 60 * 24
        }
    };

    let eplStanding: Standing;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        eplStanding = result.response[0];
    } catch (error) {
        throw error;
    }

    // Laliga
    url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=140';

    let laLigaStanding: Standing;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        laLigaStanding = result.response[0];
    } catch (error) {
        throw error;
    }


    //BundesLiga
    url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=78';

    let bundesLigaStanding: Standing;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        bundesLigaStanding = result.response[0];
    } catch (error) {
        throw error;
    }


    // Serie A
    url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=135';

    let serieAStanding: Standing;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        serieAStanding = result.response[0];
    } catch (error) {
        throw error;
    }


    // Ligue 1
    url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=61';

    let ligue1Standing: Standing;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        ligue1Standing = result.response[0];
    } catch (error) {
        throw error;
    }


    const standings: Standing[] = [];
    standings.push(eplStanding);
    standings.push(laLigaStanding);
    standings.push(bundesLigaStanding);
    standings.push(serieAStanding);
    standings.push(ligue1Standing);

    return standings;
};
