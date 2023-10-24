'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from './faqaccordion.module.scss';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const FaqAccordion = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={styles.container}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Как пользоваться конструктором тренировок?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ответ: Чтобы использовать конструктор тренировок, откройте сайт и
            выберите желаемые упражнения из предложенного списка. Затем добавьте
            выбранные упражнения в свою программу тренировок, аналогично
            добавлению товаров в корзину. После того, как программа тренировок
            готова, перейдите в раздел `Программа` и выберите опцию для
            скачивания программы в формате PDF.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            Как добавить упражнение в программу тренировок?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ответ: Чтобы добавить упражнение в программу тренировок, найдите его
            в списке доступных упражнений и нажмите на кнопку `Добавить в мою
            программу`. Упражнение будет автоматически добавлено в вашу
            программу тренировок.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Вопрос: Как удалить упражнение из программы тренировок?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ответ: Чтобы удалить упражнение из программы тренировок, обычно на
            сайте конструктора тренировок есть кнопка `Удалить` или аналогичный
            элемент управления рядом с каждым упражнением в программе. Нажмите
            на эту кнопку, чтобы удалить выбранное упражнение из программы
            тренировок.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            Вопрос: Как связаться с поддержкой сайта, если возникли проблемы с
            конструктором тренировок?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Ответ: Напишите нам в телеграмм: @je_kart</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
