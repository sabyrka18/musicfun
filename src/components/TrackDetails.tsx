import { useEffect, useState } from 'react'
import { getTrack } from '../api/tracks'
import type { TrackDetailsDto } from '../types/trackDto'

type Props = {
  trackId: string | null
}

export const TrackDetails = ({ trackId }: Props) => {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsDto | null>(null)

  useEffect(() => {
    if (!trackId) {
      setSelectedTrack(null)
      return
    }

    setSelectedTrack(null)

    getTrack(trackId).then(data => setSelectedTrack(data))
  }, [trackId])

  return (
    <section>
      <h2>Track details</h2>
      {!trackId ? (
        <p>Track is not selected</p>
      ) : !selectedTrack ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <div>
            <h4>Lyrics</h4>
            <p>{selectedTrack.attributes.lyrics ?? 'no lyrics'}</p>
          </div>
        </div>
      )}
    </section>
  )
}
