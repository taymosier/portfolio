import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../styles/ProjectsScreen.css';

const gridItems = [
  'Pokedex',
  'Ebay Item Checker',
  'IBX Mock-Up',
  'Calculator',
];

const firstRowItemIndices = [0, 2];

function insertProjectIntoColumn(item) {
  return (
    <Col
      className="projectsGridRowItem"
      key={item}
    >
      <p>{item}</p>
    </Col>);
}

function populateRowWithColumns(firstRowItemIndex) {
  const lastRowItemIndex = firstRowItemIndex + 2;

  return (
    gridItems.slice(firstRowItemIndex, lastRowItemIndex)).map((item) => {
    return insertProjectIntoColumn(item);
  });
}

const Rows = firstRowItemIndices.map((firstRowItemIndex) => {
  return (
    <Row
      key={firstRowItemIndex}
      className="projectsGridRow"
    >
      {populateRowWithColumns(firstRowItemIndex)}
    </Row>
  );
});

export function ProjectsScreen() {
  return (
    <div className="projectsContent">
      <div className="header">
        Projects
      </div>
      <Grid className="projectsGrid">
        {Rows}
      </Grid>
    </div>
  );
}
