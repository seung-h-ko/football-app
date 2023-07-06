import 'server-only';
import getTeams from './getTeams';
import { Team } from '@/types';

export default async function getTeamInfoByTeamId(id: number): Promise<Team> {

    try {


        const teams: Team[] = await getTeams();

        for (const team of teams) {
            if (team.team.id === id) {
                return team;
            }
        }

        throw new Error(`Team with Id ${id} not found`)

    } catch (error) {
        console.error('An error occurred while fetching teams:', error);
        throw error;
    }
}
