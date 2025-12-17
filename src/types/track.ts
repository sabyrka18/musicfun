export type TrackAttachments = {
  url: string
}

export type TrackAttributes = {
  title: string
  attachments: TrackAttachments[]
}

export type TrackDetailsAttributes = {
  title: string
  lyrics: string
}

export type Track = {
  id: string
  attributes: TrackAttributes
}

export type TrackDetailsDto = {
  attributes: TrackDetailsAttributes
}
