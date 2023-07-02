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

        for (let league in fixturesOfOneYearFor5League) {
            if (fixturesOfOneYearFor5League.hasOwnProperty(league)) {
                fixturesOfOneYearFor5League[league].filter(fixture =>
                    moment(fixture.fixture.date).isBefore(today.subtract(1, 'day'), 'day')
                );
            }
        }

        fixturesByYear5LeagueOnly.push(fixturesOfOneYearFor5League);
    }

    return fixturesByYear5LeagueOnly;
};
