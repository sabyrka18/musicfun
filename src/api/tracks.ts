import type { Track } from '../types/track'
import { API_KEY } from '../config/env'

export const getTracks = async (): Promise<Track[]> => {
  const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: { 'api-key': API_KEY },
  })
  const json: { data: Track[] } = await res.json()
  return json.data
}
