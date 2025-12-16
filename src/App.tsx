import { useEffect, useState } from 'react'
import type { Track } from './types/track'
import { getTracks } from './api/tracks'

export const App = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    getTracks().then(data => setTracks(data))
  }, [])

  if (tracks === null) {
    return (
      <div>
        <h1>MusicFun Player</h1>
        <p>Loading...</p>
      </div>
    )
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>MusicFun Player</h1>
        <p>No tracks</p>
      </div>
    )
  }

  return (
    <div>
      <h1>MusicFun Player</h1>
      <button onClick={() => setSelectedTrackId(null)}>Reset selection</button>
      <ul>
        {tracks.map((track) => (
          <li key={track.id} style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : 'transparent'}` }}>
            <div onClick={() => setSelectedTrackId(track.id)}>{track.attributes.title}</div>
            <audio src={track.attributes.attachments.at(0)?.url} controls></audio>
          </li>
        ))}
      </ul>
    </div>
  )
}
