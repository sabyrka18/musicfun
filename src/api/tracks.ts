import type { Track, TrackDetails } from '../types/track'
import { API_KEY } from '../config/env'

export const getTracks = async (): Promise<Track[]> => {
  const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: { 'api-key': API_KEY },
  })
  const json: { data: Track[] } = await res.json()
  return json.data
}

export const getTrack = async (trackId: string | null): Promise<TrackDetails> => {
  const res = await fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
    headers: { 'api-key': API_KEY },
  })
  const json: { data: TrackDetails } = await res.json()
  return json.data
}
