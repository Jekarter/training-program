export type ExerciseCards = cardObject[];

export type cardObject = {
  id: number;
  title: string;
  thumbnailImg: string;
  img: string;
  description: string;
  actionList: ActionsList;
  imgSecond: string;
  descriptionSecond: string;
  whoUseIt: ActionsList;
  videoUrl: string;
  group: Group;
  place: Place;
};

export type miniCards = Omit<
  cardObject,
  | 'img'
  | 'actionList'
  | 'imgSecond'
  | 'descriptionSecond'
  | 'whoUseIt'
  | 'videoUrl'
  | 'group'
  | 'place'
>;

type ActionsList = string[];

type Place = 'street' | 'gym';
type Group = 'pectoral' | 'spinal' | 'shoulder' | 'leg' | 'arm' | 'abdominal';
