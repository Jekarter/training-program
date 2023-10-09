import { ExerciseCards } from '@/types/types';

const THUMBNAIL_IMG_SIZE = 'c_thumb,w_315';
const MAIN_IMG_QUALITY = 'q_auto:eco';
const SECOND_IMAGE = 'f_auto,q_auto';
const SIZE_YOUTUBE_VIDEO = `width="80%" height="400px" align="middle"`;

export const cards: ExerciseCards = [
  {
    id: 1,
    thumbnailImg: `https://res.cloudinary.com/dwpvwn978/image/upload/${THUMBNAIL_IMG_SIZE}/id1/lazfg13yfuyal6woedco.jpg`,
    img: `https://res.cloudinary.com/dwpvwn978/image/upload/${MAIN_IMG_QUALITY}/id1/lazfg13yfuyal6woedco.jpg`,
    title: 'Тяга гантели из-за головы лежа PULL-OVER',
    description:
      'Тяга гантели из-за головы лежа PULL-OVER выполняется из следующего положения. Лежим спиной на скамье, ноги на полу. Держим гантель обеими прямыми руками, ладони располагаются на внутренней поверхности дисков гантели. Рукояку обхватывают лиши большие и указательные пальцы обеих рук.',
    actionList: [
      'Делаем вдох и опускаем гантель за голову.',
      'Возвращаемся в исходное положение и делаем выдох.',
    ],
    imgSecond: `https://res.cloudinary.com/dwpvwn978/image/upload/${SECOND_IMAGE}/id1/ose6ug19btoxohpyyxmz`,
    descriptionSecond:
      'Это упражнение воздействует на внутреннюю часть груди, длинный пучок трицепсов, широчайшую мышцу спины, большую круглую мышцу, малую грудную мышцу, ромбовидную и переднюю зубчатую. Это упражнение хорошо подходит для укрепления грудной клетки. Чтобы уменьшить нагрузку на трицепс, используют небольшие гантели. Лучше ложиться перпендикулярно горизонтальной скамьи, чтобы таз был ниже плечевого пояса.Выполнение упражнение лёжа поперёк скамьи, очень сильно способствует расширению грудной клетки.',
    whoUseIt: [
      'Кому: Всем.',
      'Когда: В первой половине тренировки грудных мышц.',
      'Количество: 3-4 подхода по 8-15 повторений.',
    ],
    videoUrl: `<iframe ${SIZE_YOUTUBE_VIDEO} src="https://www.youtube.com/embed/CmbdTWVdDVM?si=Nh6XicAzvhBt4ytR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    place: 'gym',
    group: 'pectoral',
  },
  {
    id: 2,
    thumbnailImg: `https://res.cloudinary.com/dwpvwn978/image/upload/${THUMBNAIL_IMG_SIZE}/spinal/id2/aakaczknvkfavzs7q9lv.jpg`,
    img: `https://res.cloudinary.com/dwpvwn978/image/upload/${MAIN_IMG_QUALITY}/spinal/id2/aakaczknvkfavzs7q9lv.jpg`,
    title: 'Разгибание туловища на тренажере',
    description:
      'гибание туловища на тренажере выполняется из следующего исходного положения. Сидя в тренажере, туловище наклонено вперёд. Спина упирается в валик тренажера на уровне лопаток.',
    actionList: [
      'Делаем вдох и максимально выпрямляем корпус.',
      'Медленно возвращаемся в исходное положение и делаем выдох.',
    ],
    imgSecond: '',
    descriptionSecond:
      'Разгибание туловища на тренажере прорабатывает мышцы выпрямляющие позвоночник, концентируя нагрузку на низ спины, больше всего — на крестцово-поясничной группе остистых мышц. В чем-то нагрузка похожа на ту которая возникает при гиперэкстензии (поясничных прогибаниях.). Это упражнение отлично подходит новичкам и выполняется по 10-20 повторений, что даёт развитие силы мышц для выполнения более сложных упражнений.',
    whoUseIt: [
      'Кому: Всем, от любителя до профи.',
      'Когда: В конце тренировки поясничных мышц.',
      'Количество: 3-4 подхода по 10-20 повторений.',
    ],
    videoUrl: `<iframe ${SIZE_YOUTUBE_VIDEO} src="https://www.youtube.com/embed/zTKVfUW0EIo?si=vvik-OIyu405VzzF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    place: 'gym',
    group: 'spinal',
  },
  {
    id: 3,
    thumbnailImg: `https://res.cloudinary.com/dwpvwn978/image/upload/${THUMBNAIL_IMG_SIZE}/shoulder/id3/enrqxn9epps7jfln6neu.jpg`,
    img: `https://res.cloudinary.com/dwpvwn978/image/upload/${MAIN_IMG_QUALITY}/shoulder/id3/enrqxn9epps7jfln6neu.jpg`,
    title: 'Махи руками назад с рукоятками тренажера',
    description:
      'Махи руками назад с рукоятками тренажера выполняются из следующего исходного положения. Сидим и упираемся животом или грудью в спинку тренажёра. Руками держим рукоятки.',
    actionList: [
      'Делаем вдох и отводим локти назад, максимально сведя лопатки в конце движения.',
      'В конце движения делаем выдох и возвращаемся в исходное положение.',
    ],
    imgSecond: `https://res.cloudinary.com/dwpvwn978/image/upload/${SECOND_IMAGE}/shoulder/id3/rks64uqyy5s7j6lhydbu.jpg`,
    descriptionSecond:
      'Это упражнение тренирует дельтовидные мышцы, особенно заднюю часть, малую круглую мышцу, подостную мышцу.',
    whoUseIt: [
      'Кому: Всем, от любителя до профи.',
      'Когда: В день тренировки спины или плеч.',
      'Количество: 3-4 подхода по 8-20 повторений.',
    ],
    videoUrl: `<iframe ${SIZE_YOUTUBE_VIDEO} src="https://www.youtube.com/embed/S0mQnxJ5Uss?si=R7z2DDvgW609Y-cb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    place: 'gym',
    group: 'shoulder',
  },
  {
    id: 4,
    thumbnailImg: `https://res.cloudinary.com/dwpvwn978/image/upload/${THUMBNAIL_IMG_SIZE}/leg/id4/xuci1r1pqzn0dbmckjv8.jpg`,
    img: `https://res.cloudinary.com/dwpvwn978/image/upload/${MAIN_IMG_QUALITY}/leg/id4/xuci1r1pqzn0dbmckjv8.jpg`,
    title: 'Разведение ног на тренажере',
    description:
      'Разведение ног на тренажере выполняется из следующего исходного положения. Лежим на боку и подпираем голову ладонью согнутой руки.Сидим в тренажёре.',
    actionList: [
      'Делаем вдох и максимально разводим бёдра.',
      'В конце движения делаем выдох и возвращаемся в исходное положение.',
    ],
    imgSecond: `https://res.cloudinary.com/dwpvwn978/image/upload/${SECOND_IMAGE}/leg/id4/je2tfdfmljnldmkedqwh.jpg`,
    descriptionSecond:
      'Для проработки сразу 2-ух пучков можно менять наклон корпуса во время выполнения одного подхода. Пример: выполняйте 15 повторений с отклонённой назад спиной, после чего 15 повторений с наклоном корпуса вперёд. Разведение ног на тренажере в основном прорабатывает среднюю ягодичную мышцу.',
    whoUseIt: [
      'Кому: Всем.',
      'Когда: В конце тренировки ног.',
      'Количество: 3 подхода по 20-30 повторений.',
    ],
    videoUrl: `<iframe ${SIZE_YOUTUBE_VIDEO} src="https://www.youtube.com/embed/W4zfXd9iju8?si=EXI4SoRvcf0zAJgv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    place: 'gym',
    group: 'leg',
  },
  {
    id: 5,
    thumbnailImg: `https://res.cloudinary.com/dwpvwn978/image/upload/${THUMBNAIL_IMG_SIZE}/arm/id5/snpzp4dh8l77tzihthwa.jpg`,
    img: `https://res.cloudinary.com/dwpvwn978/image/upload/${MAIN_IMG_QUALITY}/arm/id5/snpzp4dh8l77tzihthwa.jpg`,
    title: 'Отжимания от скамьи на трицепс',
    description:
      'Руки находятся на краю скамьи, а ноги лежат на параллельной скамье. Корпус находится на весу. Угол между бёдрами и туловищем прямой.',
    actionList: [
      'Делаем вдох и сгибаем руки в локтях. Ноги в коленях прямые.',
      'Возвращаемся в исходное положение и делаем выдох.',
    ],
    imgSecond: `https://res.cloudinary.com/dwpvwn978/image/upload/${SECOND_IMAGE}/arm/id5/iefy2fymslsr7ozldrdw.jpg`,
    descriptionSecond:
      'Отжимание трицепсами спиной к скамье прорабатывает трицепсы, мышцы груди и передние дельты. Чтобы увеличить нагрузку, можете положить на бёдра отягощения.',
    whoUseIt: [
      'Кому: От новичка до профи.',
      'Когда: В середине тренировки трицепсов.',
      'Количество: 3-4 подхода по 8-20 повторений.',
    ],
    videoUrl: `<iframe ${SIZE_YOUTUBE_VIDEO} src="https://www.youtube.com/embed/8sXT2ESkXLI?si=IY396lR5dTPru5mi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    place: 'gym' && 'street',
    group: 'arm',
  },
  {
    id: 6,
    thumbnailImg: `https://res.cloudinary.com/dwpvwn978/image/upload/${THUMBNAIL_IMG_SIZE}/abdominal/id6/sftzczrjelbhpjkghbem.jpg`,
    img: `https://res.cloudinary.com/dwpvwn978/image/upload/${MAIN_IMG_QUALITY}/abdominal/id6/sftzczrjelbhpjkghbem.jpg`,
    title: 'Вращение туловища стоя на тренажере «Твист»',
    description:
      'Вращение туловища стоя на тренажере «Твист» выполняется из такого положения. Стоим на вращающейся подставке и держимся за ручки тренажёра. Колени чуть согнуты, и центр опоры смещён на пятки, которые нельзя отрывать от подставки при выполнении упражнения.',
    actionList: [
      'Вращаем таз из стороны в сторону, пытаясь сохранять плечи неподвижными на всём протяжении выполнения.',
    ],
    imgSecond: ``,
    descriptionSecond:
      'Вращение туловища стоя на тренажере «Твист» включает в работу прежде всего наружные и внутренние косые мышцы пресса, также задействованы прямые мышцы пресса. Примечание: для увеличения нагрузки можно положить «блин» на подставку.',
    whoUseIt: [
      'Кому: Всем.',
      'Когда: В конце или в начале тренировки.',
      'Количество: 2-3 минуты не меньше 100 раз в каждую сторону.',
    ],
    videoUrl: `<iframe ${SIZE_YOUTUBE_VIDEO} src="https://www.youtube.com/embed/s5SgyO1VchE?si=0u8r9h3y_aiqprq9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    place: 'gym',
    group: 'abdominal',
  },
  {
    id: 7,
    thumbnailImg: `https://res.cloudinary.com/dwpvwn978/image/upload/${THUMBNAIL_IMG_SIZE}/pectoral/id6/ahkig4jgug9oce9tureo.jpg`,
    img: `https://res.cloudinary.com/dwpvwn978/image/upload/${MAIN_IMG_QUALITY}/pectoral/id6/ahkig4jgug9oce9tureo.jpg`,
    title: 'Отжимания от пола',
    description:
      'Отжимания от пола выполняются из следующего исходного положения. Лицом вниз, упираемся прямыми руками в пол, руки на ширине плеч или немного шире. Ноги чуть расставлены или вместе.',
    actionList: [
      'Делаем вдох и сгибаем локти, пока грудь почти не коснётся пола, позвоночник сильно не выгибаем.',
      'Отжаться до полного выпрямления рук.',
      'При завершении движения сделать выдох.',
    ],
    imgSecond: `https://res.cloudinary.com/dwpvwn978/image/upload/${SECOND_IMAGE}/pectoral/id6/coitqt2km0ibvcw3tmkm.jpg`,
    descriptionSecond:
      'При отжиманиях от пола работа передних зубчатых мышц прижимает лопатки к грудной клетке, тем самым объединяя работу туловища и рук.',
    whoUseIt: [
      'Кому: Начинающим атлетам и атлетам среднего уровня.',
      'Когда: В первой половине тренировки груди.',
      'Количество: 3-4 подхода по 10-30 повторений.',
    ],
    videoUrl: `<iframe ${SIZE_YOUTUBE_VIDEO} src="https://www.youtube.com/embed/MBNHRJRLLzQ?si=GvA6n-pcFw4gaqBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    place: 'street',
    group: 'pectoral',
  },
];

/* 
  {
    id: 1,
    thumbnailImg: ``,
    img: ``,
    title: '',
    description: '',
    actionList: [],
    imgSecond: ``,
    descriptionSecond: '',
    whoUseIt: [],
    videoUrl: ``,
    place: 'gym',
    group: 'spinal',
  },
*/
