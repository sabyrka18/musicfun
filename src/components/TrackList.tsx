import { useEffect, useState } from 'react'
import type { TrackDto } from '../types/trackDto'
import { getTracks } from '../api/tracks'
import { TrackItem } from './TrackItem'

type Props = {
  onTrackSelect: (trackId: string | null) => void
  trackId: string | null
}

export const TrackList = ({ onTrackSelect, trackId }: Props) => {
  const [tracks, setTracks] = useState<TrackDto[] | null>(null)

  useEffect(() => {
    getTracks().then(data => setTracks(data))
  }, [])

  if (tracks === null) return <p>Loading...</p>
  if (tracks.length === 0) return <p>No tracks</p>

  const handleResetClick = () => onTrackSelect(null)
  const handleClick = (trackId: string | null) => onTrackSelect(trackId)

  return (
    <div>
      <button
        onClick={handleResetClick}>
        Reset
      </button>
      <ul>
        {tracks?.map((track) => {

          return <TrackItem
            key={track.id}
            trackId={trackId}
            track={track}
            onTrackSelect={handleClick}
          />
        })}
      </ul>
    </div>
  )
}
