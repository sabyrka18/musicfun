import { useEffect, useState } from 'react'
import { getTrack } from '../api/tracks'
import type { TrackDetailsDto } from '../types/track'

export const TrackDetails = () => {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsDto | null>(null)
  const selectedTrackId = '88133ec1-f82d-4fbb-b53b-5138b6fc7b90'

  useEffect(() => {
    if (!selectedTrackId) {
      setSelectedTrack(null)
      return
    }

    setSelectedTrack(null)

    getTrack(selectedTrackId).then(data => setSelectedTrack(data))
  }, [selectedTrackId])

  return (
    <section>
      <h2>Track details</h2>
      {!selectedTrackId ? (
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
