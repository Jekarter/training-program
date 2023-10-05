export type Data = cardObject[];

export type cardObject = {
  id: number;
  title: string;
  thumbnailImg: string;
  img: string;
  description: string;
  actionList: EnumList;
  imgSecond: string;
  descriptionSecond: string;
  whoUseIt: EnumList;
  videoUrl: string;
  place?: Place;
  group?: Group;
};

export type miniCards = Omit<
  cardObject,
  | 'img'
  | 'actionList'
  | 'imgSecond'
  | 'descriptionSecond'
  | 'whoUseIt'
  | 'videoUrl'
>;

type EnumList = string[];

type Place = 'street' | 'gym';
type Group = 'pectoral' | 'spinal' | 'shoulder' | 'leg' | 'arm' | 'abdominal';
