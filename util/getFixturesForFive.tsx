import 'server-only'
import getFixtures from './getFixtures';
import { AllFixtures } from '@/types';

export default async function getFixturesForFive() {


    const fixturesByYear = await getFixtures();

    const fixturesByYear5LeagueOnly: AllFixtures[] = [];

    for (let fixturesOfOneYear of fixturesByYear) {

        let fixturesOfOneYearFor5League: AllFixtures = {};
        fixturesOfOneYearFor5League["epl"] = fixturesOfOneYear["epl"]
        fixturesOfOneYearFor5League["laLiga"] = fixturesOfOneYear["laLiga"]
        fixturesOfOneYearFor5League["bundesLiga"] = fixturesOfOneYear["bundesLiga"]
        fixturesOfOneYearFor5League["serieA"] = fixturesOfOneYear["serieA"]
        fixturesOfOneYearFor5League["ligue1"] = fixturesOfOneYear["ligue1"]
        fixturesByYear5LeagueOnly.push(fixturesOfOneYearFor5League);

    }

    return fixturesByYear5LeagueOnly;
};
