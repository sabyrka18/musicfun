import { useEffect, useState } from 'react'
import type { Track } from '../types/track'
import { getTracks } from '../api/tracks'

export const TrackList = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    getTracks().then(data => setTracks(data))
  }, [])

  if (tracks === null) return <p>Loading...</p>
  if (tracks.length === 0) return <p>No tracks</p>

  return (
    <ul>
      {tracks?.map((track) => (
        <li
          key={track.id}
          style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : '#fff'}` }}
          onClick={() => setSelectedTrackId(track.id)}
        >
          <div>
            {track.attributes.title}
          </div>
          <audio
            src={track.attributes.attachments.at(0)?.url}
            controls
          ></audio>
        </li>
      ))}
    </ul>
  )
}
