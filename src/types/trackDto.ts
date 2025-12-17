export type TrackAttachments = {
  url: string
}

export type TrackAttributes = {
  title: string
  attachments: TrackAttachments[]
}

export type TrackDetailsAttributes = {
  title: string
  lyrics: string | null
}

export type TrackDto = {
  id: string
  attributes: TrackAttributes
}

export type TrackDetailsDto = {
  attributes: TrackDetailsAttributes
}
