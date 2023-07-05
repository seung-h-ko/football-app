import 'server-only'
import getTeams from './getTeams';
import { Team } from '@/types';

export default async function getTeamInfoByTeamId(id: number) {


    const teams: Team[] = await getTeams();

    let teamInfo: Team | undefined;

    for (const team of teams) {
        if (team.team.id == id) {
            teamInfo = team
            break;
        }
    }


    return teamInfo;
};
