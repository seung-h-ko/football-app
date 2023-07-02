import { AllFixtures, Fixture } from '@/types';
import moment from 'moment';
import 'server-only'


export default async function getFixtures() {

    const currentTime = moment();

    const year = currentTime.year();
    const month = currentTime.month();

    let fixturesByYear: AllFixtures[] = [];

    //June or before 5 = June
    if (month <= 5) {
        fixturesByYear.push(await getFixturesByYear(year - 1));
    } else if (month >= 8) {
        //July or after
        fixturesByYear.push(await getFixturesByYear(year));
    } else {
        fixturesByYear.push(await getFixturesByYear(year - 1));
        fixturesByYear.push(await getFixturesByYear(year));
    }

    return fixturesByYear;
};

async function getFixturesByYear(year: number) {
    let eplFixtures: Fixture[];
    let laLigaFixtures: Fixture[];
    let bundesLigaFixtures: Fixture[];
    let serieAFixtures: Fixture[];
    let ligue1Fixtures: Fixture[];
    let championsLeagueFixtures: Fixture[];
    let europaLeagueFixtures: Fixture[];
    let conferenceLeagueFixtures: Fixture[];
    let uefaSuperCupFixtures: Fixture[];
    // let clubFriendliesFixtures: Fixture[];
    let fifaClubWorldCupFixtures: Fixture[];
    let faCupFixtures: Fixture[];
    let leagueCupFixtures: Fixture[];
    let communityShieldFixtures: Fixture[];
    let copaDelReyFixtures: Fixture[];
    let superCupFixtures: Fixture[];
    let superCupBundesFixtures: Fixture[];
    let superCupSerieAFixtures: Fixture[];
    let coppaItaliaFixtures: Fixture[];
    let coupeDeLaLigueFixtures: Fixture[];
    let coupeDeFranceFixtures: Fixture[];
    let tropheeDesChampionsFixtures: Fixture[];

    const API_KEY: string = process.env.API_KEY as string;

    const options: RequestInit = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        },
        next: {
            revalidate: 60 * 60 * 24
        }
    };

    // EPL
    let url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        eplFixtures = result.response;
    } catch (error) {
        throw error;
    }


    // Laliga
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=140&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        laLigaFixtures = result.response;
    } catch (error) {
        throw error;
    }


    //BundesLiga
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=78&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        bundesLigaFixtures = result.response;
    } catch (error) {
        throw error;
    }


    // Serie A
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=135&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        serieAFixtures = result.response;
    } catch (error) {
        throw error;
    }


    // Ligue 1
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=61&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        ligue1Fixtures = result.response;
    } catch (error) {
        throw error;
    }




    // Champions League
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=2&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        championsLeagueFixtures = result.response;
    } catch (error) {
        throw error;
    }

    // Europa League
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=3&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        europaLeagueFixtures = result.response;
    } catch (error) {
        throw error;
    }

    // Conference League
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=848&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        conferenceLeagueFixtures = result.response;
    } catch (error) {
        throw error;
    }


    // // club friendlies
    // url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=667&season=${year}`;

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();

    //     clubFriendliesFixtures = result.response;
    // } catch (error) {
    //     throw error;
    // }

    // UEFA Super Cup
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=531&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        uefaSuperCupFixtures = result.response;
    } catch (error) {
        throw error;
    }

    // Fifa club World Cup
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=15&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        fifaClubWorldCupFixtures = result.response;
    } catch (error) {
        throw error;
    }



    //England
    // FA Cup
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=45&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        faCupFixtures = result.response;
    } catch (error) {
        throw error;
    }

    // League Carabao Cup
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=48&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        leagueCupFixtures = result.response;
    } catch (error) {
        throw error;
    }

    // Community Shield
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=528&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        communityShieldFixtures = result.response;
    } catch (error) {
        throw error;
    }



    //Spain
    // Copa Del Rey
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=143&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        copaDelReyFixtures = result.response;
    } catch (error) {
        throw error;
    }

    //SuperCup
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=556&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        superCupFixtures = result.response;
    } catch (error) {
        throw error;
    }


    //BundesLiga
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=529&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        superCupBundesFixtures = result.response;
    } catch (error) {
        throw error;
    }


    //SerieA
    // super Cup
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=547&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        superCupSerieAFixtures = result.response;
    } catch (error) {
        throw error;
    }

    // coppa Italia
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=137&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        coppaItaliaFixtures = result.response;
    } catch (error) {
        throw error;
    }



    // Ligue 1
    // Coupe de la ligue
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=65&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        coupeDeLaLigueFixtures = result.response;
    } catch (error) {
        throw error;
    }

    // Coupe de France
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=66&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        coupeDeFranceFixtures = result.response;
    } catch (error) {
        throw error;
    }

    // Trophee des champions
    url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=526&season=${year}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        tropheeDesChampionsFixtures = result.response;
    } catch (error) {
        throw error;
    }

    const fixtures: AllFixtures = {
        epl: eplFixtures,
        laLiga: laLigaFixtures,
        bundesLiga: bundesLigaFixtures,
        serieA: serieAFixtures,
        ligue1: ligue1Fixtures,
        championsLeague: championsLeagueFixtures,
        europaLeauge: europaLeagueFixtures,
        conferenceLeague: conferenceLeagueFixtures,
        uefaSuperCup: uefaSuperCupFixtures,
        fifaClubWorldCup: fifaClubWorldCupFixtures,
        //clubFriendlies: clubFriendliesFixtures,
        faCup: faCupFixtures,
        leagueCup: leagueCupFixtures,
        communityShield: communityShieldFixtures,
        copaDelRey: copaDelReyFixtures,
        superCup: superCupFixtures,
        superCupBundes: superCupBundesFixtures,
        superCupSerieA: superCupSerieAFixtures,
        coppaItalia: coppaItaliaFixtures,
        coupeDeLaLigue: coupeDeLaLigueFixtures,
        coupeDeFrance: coupeDeFranceFixtures,
        tropheeDesChampions: tropheeDesChampionsFixtures
    };

    return fixtures;
}
