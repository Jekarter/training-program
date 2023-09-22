export type Data = cardObject[]

export type cardObject = {
  id: number,
  title: string,
  img: string,
  description: string,
  place?: Place,
  group?: Group
}

type Place = 'street' | 'gym';
type Group = 'pectoral' | 'spinal' | 'shoulder' | 'leg' | 'arm' | 'abdominal'