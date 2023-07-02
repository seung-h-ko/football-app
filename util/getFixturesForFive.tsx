import 'server-only'
import getFixtures from './getFixtures';
import { AllFixtures } from '@/types';
import moment from "moment";



export default async function getFixturesForFive() {


    const fixturesByYear = await getFixtures();

    const fixturesByYear5LeagueOnly: AllFixtures[] = [];

    let today = moment();

    for (let fixturesOfOneYear of fixturesByYear) {

        let fixturesOfOneYearFor5League: AllFixtures = {};
        fixturesOfOneYearFor5League["epl"] = fixturesOfOneYear["epl"];
        fixturesOfOneYearFor5League["laLiga"] = fixturesOfOneYear["laLiga"]
        fixturesOfOneYearFor5League["bundesLiga"] = fixturesOfOneYear["bundesLiga"]
        fixturesOfOneYearFor5League["serieA"] = fixturesOfOneYear["serieA"]
        fixturesOfOneYearFor5League["ligue1"] = fixturesOfOneYear["ligue1"]

        const filteredFixtures: AllFixtures = {};

        for (const league in fixturesOfOneYearFor5League) {
            const fixtures = fixturesOfOneYearFor5League[league];
            const filteredLeagueFixtures = fixtures?.filter(fixture => moment(fixture.fixture.date).isAfter(today.subtract(1, 'day'), 'day'));
            filteredFixtures[league] = filteredLeagueFixtures;
        }

        fixturesByYear5LeagueOnly.push(filteredFixtures);
    }

    return fixturesByYear5LeagueOnly;
};
