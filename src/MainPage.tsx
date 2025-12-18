import { PageTitle } from './components/PageTitle'
import { TrackList } from './components/TrackList'
import { TrackDetails } from './components/TrackDetails'
import { useState } from 'react'

export const MainPage = () => {
  const [trackId, setTrackId] = useState<string | null>(null)

  const handleTrackSelect = (trackId: string | null) => setTrackId(trackId)

  return (
    <main>
      <PageTitle />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <TrackList onTrackSelect={handleTrackSelect} trackId={trackId} />
        <TrackDetails trackId={trackId} />
      </div>
    </main>
  )
}
