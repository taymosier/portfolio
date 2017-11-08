import React from 'react';
import 'babel-polyfill';
import { Grid, Row, Col } from 'react-bootstrap';
import 'styles/SkillsScreen.css';

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

const firstRowItemIndices = [0, 3, 6, 9, 12];

function insertSkillIntoColumn(item) {
  return (
    <Col
      className="skillsGridRowItem"
      key={item}
    >
      <p>{item}</p>
    </Col>);
}

function populateRowWithColumns(firstRowItemIndex) {
  const lastRowItemIndex = firstRowItemIndex + 3;
  return (
    gridItems.slice(firstRowItemIndex, lastRowItemIndex)).map((item) => {
    return insertSkillIntoColumn(item);
  });
}

const Rows = firstRowItemIndices.map((firstRowItemIndex) => {
  return (
    <Row
      key={firstRowItemIndex}
      className="skillsGridRow"
    >
      {populateRowWithColumns(firstRowItemIndex)}
    </Row>
  );
});

export function SkillsScreen() {
  return (
    <div className="skillsContent">
      <div className="header">
        Skills
      </div>
      <Grid className="skillsGrid">
        {Rows}
      </Grid>
    </div>
  );
}
