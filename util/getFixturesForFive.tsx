import 'server-only'
import { AllFixtures, AllFixturesNew } from '@/types';
import moment from "moment";
import getFixturesNew from './getFixturesNew';



export default async function getFixturesForFive() {


    const allFixturesByLeague = await getFixturesNew();

    const fixturesFor5Leagues: AllFixturesNew[] = [];
    for (const league of allFixturesByLeague) {
        if (league.name === "EPL" || league.name === "La Liga" || league.name === "Bundesliga" || league.name === "Serie A" || league.name === "Ligue 1") {
            fixturesFor5Leagues.push(league);
        }
    }


    const filteredFixtures: AllFixturesNew[] = allFixturesByLeague.filter(league => {
        league.fixtures = league.fixtures.filter(fixture => {
            return moment(fixture.fixture.date).isAfter(moment().subtract(1, 'day'), 'day');
        }).slice(0, 5);
        return league.fixtures.length > 0;
    });

    for (let league of filteredFixtures) {
        console.log(league.name + ": " + league.fixtures.length + " games")
    }


    return filteredFixtures;
};
