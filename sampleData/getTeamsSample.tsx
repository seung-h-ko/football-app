import { Team } from "@/types";
import getStandingsSample from "./getStandingsSample";

export default function getTeamsSample() {

    const standingsSample = getStandingsSample();

    const teamsSample: Team[] = [];

    for (const league of standingsSample) {
        for (const standing of league.league.standings) {
            for (const team of standing) {
                teamsSample.push(team);
            }
        }
    }

    return teamsSample;
}

