
import StandingsAndFixtures from './components/home/StandingsAndFixtures'
import getStandings from '@/util/getStandings';
import { AllFixtures, Standing } from '@/types';
import getFixturesForFive from '@/util/getFixturesForFive';

export const revalidate = 60;

export default async function Home() {


  let standingsData: Standing[] = await getStandings();
  let filteredFixtures: AllFixtures[] = await getFixturesForFive();


  if (!standingsData?.length || !filteredFixtures?.length) {
    return null;
  }


  return (
    <div className='flex flex-col w-full justify-center items-center md:p-10'>
      <StandingsAndFixtures standingsData={standingsData} filteredFixtures={filteredFixtures} />
    </div>
  )
}
