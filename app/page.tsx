
import StandingsAndFixtures from './components/home/StandingsAndFixtures'
import getStandingsSample from '@/sampleData/getStandingsSample';
import getStandings from '@/util/getStandings';
import getFixturesSample from '@/sampleData/getFixturesSample';
import { AllFixtures, League } from '@/types';
import { USE_SAMPLE } from '@/sampleData/useSample';
import getFixturesForFive from '@/util/getFixturesForFive';

export const dynamic = 'force-dynamic';

export default async function Home() {


  let standingsData: { league: League }[] = []
  let filteredFixtures: AllFixtures[] = [];
  if (USE_SAMPLE) {
    standingsData = getStandingsSample();
    //filteredFixtures = getFixturesSample();
  } else {
    filteredFixtures = await getFixturesForFive();
    standingsData = await getStandings();
  }

  if (!standingsData?.length || !filteredFixtures?.length) {
    return null;
  }

  return (
    <div className='flex flex-col w-full justify-center items-center md:p-10'>
      <StandingsAndFixtures standingsData={standingsData} filteredFixtures={filteredFixtures} />
    </div>
  )
}
