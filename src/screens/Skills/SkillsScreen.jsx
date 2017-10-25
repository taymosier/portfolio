import React from 'react';
import 'babel-polyfill';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/SkillsScreen.css';

const gridItems = [
  'Java',
  'Javascript',
  'Python',
  'Django',
  'C#',
  'React',
  'Node',
  'MongoDB',
  'Express',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'JQuery',
  'Webpack',
  'Git',
];

const firstRowItemIndices = [0, 5, 10];

function insertSkillIntoColumn(item) {
  return <Col className={styles.rowItem} key={item} xs={12} md={4}>{item}</Col>;
}

function populateRowWithColumns(firstRowItemIndex) {
  const lastRowItemIndex = firstRowItemIndex + 5;
  return (
    gridItems.slice(firstRowItemIndex, lastRowItemIndex)).map((item) => {
    return insertSkillIntoColumn(item);
  });
}

const Rows = firstRowItemIndices.map((firstRowItemIndex) => {
  return (
    <Row
      key={firstRowItemIndex}
      className={styles.gridRow}
    >
      {populateRowWithColumns(firstRowItemIndex)}
    </Row>
  );
});

export function SkillsScreen() {
  return (
    <div className={styles.skillsContent}>
      <div className={styles.header}>
        Skills
      </div>
      <Grid className={styles.skillsGrid}>
        {Rows}
      </Grid>
    </div>
  );
}
