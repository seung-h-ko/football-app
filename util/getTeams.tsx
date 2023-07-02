import 'server-only'
import getStandings from './getStandings';
import { League, Team } from '@/types';

interface Standing {
    league: League
}

export default async function getTeams() {


    const standings: Standing[] = await getStandings();

    const teams: Team[] = [];

    for (const league of standings) {
        for (const standing of league.league.standings) {
            for (const team of standing) {
                teams.push(team);
            }
        }
    }


    return teams;
};
