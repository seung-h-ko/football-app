import 'server-only'


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

    let eplStanding;

    try {
        const response = await fetch(url, options);
        const result: string = await response.text();

        const jsonData = JSON.parse(result);

        eplStanding = jsonData.response;
    } catch (error) {
        throw error;
    }


    // Laliga
    url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=140';

    let laLigaStanding;

    try {
        const response = await fetch(url, options);
        const result: string = await response.text();

        const jsonData = JSON.parse(result);
        laLigaStanding = jsonData.response;
    } catch (error) {
        throw error;
    }


    //BundesLiga
    url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=78';

    let bundesLigaStanding;

    try {
        const response = await fetch(url, options);
        const result: string = await response.text();

        const jsonData = JSON.parse(result);
        bundesLigaStanding = jsonData.response;
    } catch (error) {
        throw error;
    }


    // Serie A
    url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=135';

    let serieAStanding;

    try {
        const response = await fetch(url, options);
        const result: string = await response.text();

        const jsonData = JSON.parse(result);
        serieAStanding = jsonData.response;
    } catch (error) {
        throw error;
    }


    // Ligue 1
    url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=61';

    let ligue1Standing;

    try {
        const response = await fetch(url, options);
        const result: string = await response.text();

        const jsonData = JSON.parse(result);
        ligue1Standing = jsonData.response;
    } catch (error) {
        throw error;
    }


    const standings = [];
    standings.push(...eplStanding);
    standings.push(...laLigaStanding);
    standings.push(...bundesLigaStanding);
    standings.push(...serieAStanding);
    standings.push(...ligue1Standing);

    return standings;
};
