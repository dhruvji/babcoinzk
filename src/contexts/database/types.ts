export interface AttendedEvents {
  endTimestamp: number
  imageUrl: string
  name: string
  nftId: number
  qrCodeUrl: string
  startTimestamp: number
  type: EventType
  weight: number
  __v: number
  _id: number
}

export interface Event {
  id: any
  endTimestamp: number
  imageUrl: string
  name: string
  nftId: number
  qrCodeUrl: string
  startTimestamp: number
  type: EventType
  weight: number
  __v: number
  _id: number
}

export type EventType = 'clubcensus'

export interface IdToEventMap {
  [key: string]: Event
}
