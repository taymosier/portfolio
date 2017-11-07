import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import 'babel-polyfill';
import styles from '../../styles/ProjectsScreen.css';

const gridItems = [
  'Pokedex',
  'Ebay Item Checker',
  'IBX Paint Mock-Up',
  'Calculator',
];

const firstRowItemIndices = [0, 2];

function insertProjectIntoColumn(item) {
  return (<Col
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

export default class ProjectView extends Component {
  render() {
    return (
      <div className="projectsContent">
        <div className="header">
          <h1>Projects</h1>
        </div>
        <Grid className="projectsGrid">
          {Rows}
        </Grid>
      </div>
    );
  }
}
