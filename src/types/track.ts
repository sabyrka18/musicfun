export type TrackAttachments = {
  url: string
}

export type TrackAttributes = {
  title: string
  attachments: TrackAttachments[]
}

export type Track = {
  id: string
  attributes: TrackAttributes
}
