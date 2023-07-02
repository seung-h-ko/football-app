
import Standing from './components/Standing'
import getStandingsSample from '@/sampleData/getStandingsSample';
import getStandings from '@/util/getStandings';
import getFixturesSample from '@/sampleData/getFixturesSample';
import { AllFixtures, League } from '@/types';
import { USE_SAMPLE } from '@/sampleData/useSample';
import getFixturesForFive from '@/util/getFixturesForFive';







export default async function Home() {


  let standingsData: { league: League }[] = []
  let fixturesDataByYear: AllFixtures[] = [];
  if (USE_SAMPLE) {
    standingsData = getStandingsSample();
    fixturesDataByYear = getFixturesSample();
  } else {
    standingsData = await getStandings();
    fixturesDataByYear = await getFixturesForFive();
  }

  if (standingsData === undefined || standingsData === null || fixturesDataByYear === undefined || fixturesDataByYear === null) {
    return (
      <div>

      </div>
    )
  }

  return (
    <div className='flex flex-col w-full justify-center items-center md:p-10'>

      <Standing standingsData={standingsData} fixturesDataByYear={fixturesDataByYear} />


    </div>
  )
}
