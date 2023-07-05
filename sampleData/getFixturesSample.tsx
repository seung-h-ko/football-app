import { AllFixtures } from "@/types";

export default function getFixturesSample() {
    let fixturesSample = `[{"epl": [{"fixture":{"id":1035551,"referee":null,"timezone":"UTC","date":"2023-07-19T15:00:00+00:00","timestamp":1716130800,"periods":{"first":null,"second":null},"venue":{"id":551,"name":"Kenilworth Road","city":"Luton, Bedfordshire"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":39,"name":"Premier League","country":"England","logo":"https://media-3.api-sports.io/football/leagues/39.png","flag":"https://media-3.api-sports.io/flags/gb.svg","season":2023,"round":"Regular Season - 38"},"teams":{"home":{"id":50,"name":"Luton","logo":"https://media-1.api-sports.io/football/teams/1359.png","winner":null},"away":{"id":36,"name":"Fulham","logo":"https://media-2.api-sports.io/football/teams/36.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1035552,"referee":null,"timezone":"UTC","date":"2024-05-19T15:00:00+00:00","timestamp":1716130800,"periods":{"first":null,"second":null},"venue":{"id":555,"name":"Etihad Stadium","city":"Manchester"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":39,"name":"Premier League","country":"England","logo":"https://media-3.api-sports.io/football/leagues/39.png","flag":"https://media-3.api-sports.io/flags/gb.svg","season":2023,"round":"Regular Season - 38"},"teams":{"home":{"id":50,"name":"Manchester City","logo":"https://media-3.api-sports.io/football/teams/50.png","winner":null},"away":{"id":48,"name":"West Ham","logo":"https://media-1.api-sports.io/football/teams/48.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1035553,"referee":null,"timezone":"UTC","date":"2024-05-19T15:00:00+00:00","timestamp":1716130800,"periods":{"first":null,"second":null},"venue":{"id":581,"name":"Bramall Lane","city":"Sheffield"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":39,"name":"Premier League","country":"England","logo":"https://media-3.api-sports.io/football/leagues/39.png","flag":"https://media-3.api-sports.io/flags/gb.svg","season":2023,"round":"Regular Season - 38"},"teams":{"home":{"id":62,"name":"Sheffield Utd","logo":"https://media-3.api-sports.io/football/teams/62.png","winner":null},"away":{"id":47,"name":"Tottenham","logo":"https://media-1.api-sports.io/football/teams/47.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}}],
                                    "laLiga": [{"fixture":{"id":1038328,"referee":null,"timezone":"UTC","date":"2022-09-26T00:00:00+00:00","timestamp":1716681600,"periods":{"first":null,"second":null},"venue":{"id":1491,"name":"Reale Arena","city":"Donostia-San Sebastián"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},"league":{"id":140,"name":"La Liga","country":"Spain","logo":"https://media-3.api-sports.io/football/leagues/140.png","flag":"https://media-3.api-sports.io/flags/es.svg","season":2023,"round":"Regular Season - 38"},"teams":{"home":{"id":50,"name":"Real Sociedad","logo":"https://media-2.api-sports.io/football/teams/548.png","winner":true},"away":{"id":530,"name":"Atletico Madrid","logo":"https://media-2.api-sports.io/football/teams/530.png","winner":false}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":3,"away":3},"extratime":{"home":4,"away":4},"penalty":{"home":5,"away":2}}},{"fixture":{"id":1038329,"referee":null,"timezone":"UTC","date":"2023-05-26T00:00:00+00:00","timestamp":1716681600,"periods":{"first":null,"second":null},"venue":{"id":1494,"name":"Estadio Ramón Sánchez Pizjuán","city":"Sevilla"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},"league":{"id":140,"name":"La Liga","country":"Spain","logo":"https://media-3.api-sports.io/football/leagues/140.png","flag":"https://media-3.api-sports.io/flags/es.svg","season":2023,"round":"Regular Season - 38"},"teams":{"home":{"id":50,"name":"Sevilla","logo":"https://media-3.api-sports.io/football/teams/536.png","winner":null},"away":{"id":529,"name":"Barcelona","logo":"https://media-2.api-sports.io/football/teams/529.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1038330,"referee":null,"timezone":"UTC","date":"2024-05-26T00:00:00+00:00","timestamp":1716681600,"periods":{"first":null,"second":null},"venue":{"id":1456,"name":"Estadio Santiago Bernabéu","city":"Madrid"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},"league":{"id":140,"name":"La Liga","country":"Spain","logo":"https://media-3.api-sports.io/football/leagues/140.png","flag":"https://media-3.api-sports.io/flags/es.svg","season":2023,"round":"Regular Season - 38"},"teams":{"home":{"id":541,"name":"Real Madrid","logo":"https://media-1.api-sports.io/football/teams/541.png","winner":null},"away":{"id":543,"name":"Real Betis","logo":"https://media-3.api-sports.io/football/teams/543.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1038331,"referee":null,"timezone":"UTC","date":"2024-05-26T00:00:00+00:00","timestamp":1716681600,"periods":{"first":null,"second":null},"venue":{"id":1481,"name":"Estadio de Gran Canaria","city":"Las Palmas de Gran Canaria"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},"league":{"id":140,"name":"La Liga","country":"Spain","logo":"https://media-3.api-sports.io/football/leagues/140.png","flag":"https://media-3.api-sports.io/flags/es.svg","season":2023,"round":"Regular Season - 38"},"teams":{"home":{"id":534,"name":"Las Palmas","logo":"https://media-3.api-sports.io/football/teams/534.png","winner":null},"away":{"id":542,"name":"Alaves","logo":"https://media-3.api-sports.io/football/teams/542.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}}] }]`;

    let fixturesSampleJson: AllFixtures[] = [];

    try {
        const jsonData = JSON.parse(fixturesSample);
        fixturesSampleJson = jsonData;
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }


    return fixturesSampleJson;
}


