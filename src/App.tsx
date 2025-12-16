import { useEffect, useState } from 'react'
import type { Track, TrackDetails } from './types/track'
import { getTrack, getTracks } from './api/tracks'

export const App = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetails | null>(null)
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    getTracks().then(data => setTracks(data))
  }, [])

  useEffect(() => {
    if (!selectedTrackId) {
      setSelectedTrack(null)
      return
    }

    setSelectedTrack(null)

    getTrack(selectedTrackId).then(data => setSelectedTrack(data))
  }, [selectedTrackId])

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
    <main>
      <h1>MusicFun Player</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null)
          setSelectedTrack(null)
        }}
      >
        Reset selection
      </button>
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <ul>
          {tracks.map((track) => (
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
      </div>
    </main>
  )
}
