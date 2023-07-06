
type League = {
    id: number,
    name: string,
    country: string,
    logo: string,
    flag: string,
    season: number,
    standings: [
        Team[]
    ]
}

type Team = {
    rank: number,
    team: {
        id: number,
        name: string,
        logo: string
    },
    points: number,
    goalsDiff: number,
    group: string,
    form: string,
    status: string,
    description: string,
    all: Games,
    home: Games,
    away: Games,
    update: string
}

type Games = {
    played: number,
    win: number,
    draw: number,
    lose: number,
    goals: {
        for: number,
        against: number
    }
}




type FixtureInfo = {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
        first: number;
        second: number;
    };
    venue: {
        id: number;
        name: string;
        city: string;
    };
    status: {
        long: string;
        short: string;
        elapsed: number;
    };
}

type LeagueFixtures = {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
}

type Teams = {
    home: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
    },
    away: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
    },
}

type Goals = {
    home: number,
    away: number
}

type Score = {
    halftime: Goals
    fulltime: Goals
    extratime: Goals
    penalty: Goals
}

type Fixture = {
    fixture: FixtureInfo,
    league: LeagueFixtures,
    teams: Teams,
    goals: Goals,
    score: Score
}

type AllFixtures = {
    [epl: string]: Fixture[],
    [laLiga: string]: Fixture[],
    [bundesLiga: string]: Fixture[],
    [serieA: string]: Fixture[],
    [ligue1: string]: Fixture[],
    [championsLeague: string]: Fixture[],
    [europaLeauge: string]: Fixture[],
    [conferenceLeague: string]: Fixture[],
    [uefaSuperCup: string]: Fixture[],
    [fifaClubWorldCup: string]: Fixture[],
    // [clubFriendlies: string]: Fixture[],
    [faCup: string]: Fixture[],
    [leagueCup: string]: Fixture[],
    [communityShield: string]: Fixture[],
    [copaDelRey: string]: Fixture[],
    [superCup: string]: Fixture[],
    [superCupBundes: string]: Fixture[],
    [superCupSerieA: string]: Fixture[],
    [coppaItalia: string]: Fixture[],
    [coupeDeLaLigue: string]: Fixture[],
    [coupeDeFrance: string]: Fixture[],
    [tropheeDesChampions: string]: Fixture[]
};

type AllFixturesNew = {
    name: string,
    fixtures: Fixture[]
}






export { League, Team, Games, Fixture, AllFixtures, AllFixturesNew };