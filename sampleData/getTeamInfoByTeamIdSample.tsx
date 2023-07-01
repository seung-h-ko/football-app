import { Team } from '@/types';
import getTeamsSample from './getTeamsSample';

export default function getTeamInfoByTeamIdSample(id: number) {


    const teams: Team[] = getTeamsSample();

    let teamInfo!: Team;

    for (const team of teams) {
        if (team.team.id == id) {
            teamInfo = team
        }
    }


    return teamInfo;
};
