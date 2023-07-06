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

        return teamInfo;
    } catch (error) {
        console.error('An error occurred while fetching teams:', error);
        throw error;
    }
}
