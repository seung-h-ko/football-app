import 'server-only';
import getTeams from './getTeams';
import { Team } from '@/types';

export default async function getTeamInfoByTeamId(id: number) {
    let teamInfo: Team | undefined;

    try {
        const teams: Team[] = await getTeams();

        for (const team of teams) {
            if (team.team.id === id) {
                teamInfo = team;
                break;
            }
        }
    } catch (error) {
        console.error('Error occurred while fetching teams:', error);
    }

    return teamInfo;
}

