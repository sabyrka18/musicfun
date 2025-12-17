import type { TrackDto } from '../types/trackDto'

type Props = {
  onTrackSelect: (trackId: string | null) => void
  trackId: string | null
  track: TrackDto
}

export const TrackItem = ({ onTrackSelect, trackId, track }: Props) => {
  const handleClick = () => onTrackSelect(track.id)

  return (
    <li
      key={track.id}
      style={{ border: `1px solid ${track.id === trackId ? 'orange' : '#fff'}` }}
      onClick={handleClick}
    >
      <div>
        {track.attributes.title}
      </div>
      <audio
        src={track.attributes.attachments.at(0)?.url}
        controls
      ></audio>
    </li>
  )
}
