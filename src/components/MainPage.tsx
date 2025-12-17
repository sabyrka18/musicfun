import { PageTitle } from './PageTitle'
import { TrackList } from './TrackList'
import { TrackDetails } from './TrackDetails'

export const MainPage = () => {
  return (
    <main>
      <PageTitle />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <TrackList />
        <TrackDetails />
      </div>
    </main>
  )
}
