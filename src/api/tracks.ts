import type { TrackDto, TrackDetailsDto } from '../types/trackDto'
import { API_KEY } from '../config/env'

export const getTracks = async (): Promise<TrackDto[]> => {
  const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: { 'api-key': API_KEY },
  })
  const json: { data: TrackDto[] } = await res.json()
  return json.data
}

export const getTrack = async (trackId: string | null): Promise<TrackDetailsDto> => {
  const res = await fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
    headers: { 'api-key': API_KEY },
  })
  const json: { data: TrackDetailsDto } = await res.json()
  return json.data
}
