
export default interface Image {
  url: string,
  id: number
}

export default interface OrphanageType {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: boolean,
  images: Array<Image>,
}