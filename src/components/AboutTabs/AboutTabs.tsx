import React from 'react';
import styles from './abouttabs.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: 'black' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AboutTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={styles.container}>
      <Box
        sx={{
          width: '80%',
          backgroundColor: 'white',
          color: 'rgba(0, 0, 0, 1);',
          margin: '0 auto',
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Для чего наш сайт" />
            <Tab label="Тренировки" />
            <Tab label="Программа" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Данный сайт был создан с целью: Предоставить пользователям возможность
          создавать индивидуальные программы тренировок путем выбора и
          комбинирования различных упражнений и упражнений на основе их целей и
          предпочтений. Он решает следующую проблему: Многие люди ищут
          эффективные тренировки, но сталкиваются с трудностями в составлении
          сбалансированной программы или не знают, какие упражнения выбрать для
          достижения своих целей. Этот сайт предоставляет инструмент, который
          упрощает и автоматизирует процесс создания индивидуальных программ
          тренировок, помогая пользователям составить оптимальные тренировочные
          планы в соответствии с их потребностями и предпочтениями.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Регулярное изменение тренировок является важной составляющей
          эффективного тренировочного процесса. Когда организм приспосабливается
          к постоянным тренировкам, прогресс может замедлиться или вообще
          остановиться. Регулярная смена тренировок помогает преодолеть плато и
          стимулирует дальнейший прогресс. Кроме того, разнообразные тренировки
          позволяют активировать различные мышцы и системы организма,
          способствуя более полному и всестороннему развитию.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Важно выбирать тренировки и место для тренировок исходя из своих
          целей, предпочтений и доступных ресурсов. Комбинирование тренировок на
          улице и в тренажерном зале может помочь достичь разностороннего
          физического развития и поддержания мотивации. Наш сайт помогает быстро
          подготовить программу для тренировки на день/неделю/месяц
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default AboutTabs;
