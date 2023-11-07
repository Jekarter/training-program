/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import { ExerciseCards } from '@/types/types';

const groupsWithText = {
  pectoral: 'Грудные',
  spinal: 'Спинные',
  shoulder: 'Плечевые',
  leg: 'Мышцы ног',
  arm: 'Мышцы рук',
  abdominal: 'Мышцы живота',
};

const DOMEN = 'https://training-program.netlify.app/';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 12,
    margin: 12,
    fontFamily: 'Roboto',
  },
  text: {
    margin: 12,
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Roboto',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 150,
    maxHeight: 200,
  },
  header: {
    fontSize: 8,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
    fontFamily: 'Roboto',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 0,
    right: 15,
    textAlign: 'center',
    color: 'grey',
  },
});

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
});

const TemplatePdf = ({ exercises }: { exercises: ExerciseCards }) => {
  console.log('pdf props', exercises);
  return (
    <Document language="ru">
      <Page style={styles.body}>
        <View>
          <Text style={styles.header} fixed>
            Программа Тренировок создана на Trainify
          </Text>
          {exercises.map((exercise, index) => (
            <View key={exercise.id}>
              <Text style={styles.title}>
                {`${index + 1}) ${exercise.title}`}
              </Text>
              <Text style={styles.text}>
                Группа мышц: {groupsWithText[exercise.group]}
              </Text>
              <Image style={styles.image} src={exercise.img} />
              <Text style={styles.text}>{exercise.description}</Text>
              <View>
                {exercise.imgSecond ? (
                  <Image style={styles.image} src={exercise.imgSecond} />
                ) : (
                  <Text style={styles.text}>{exercise.title}</Text>
                )}
              </View>
              <View>
                {exercise.actionList.map((action, index) => (
                  <Text key={action} style={styles.text}>
                    {`${index + 1}) ${action}`}
                  </Text>
                ))}
              </View>
              <View>
                {exercise.whoUseIt.map((use) => (
                  <Text key={use} style={styles.text}>
                    {use}
                  </Text>
                ))}
              </View>
            </View>
          ))}
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </View>
      </Page>
    </Document>
  );
};

export default TemplatePdf;
