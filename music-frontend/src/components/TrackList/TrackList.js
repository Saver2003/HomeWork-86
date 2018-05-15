import React from 'react';
import PropTypes from 'prop-types';

import {Button, Panel} from "react-bootstrap";

const AlbumList = props => {

  return (
    <Panel>
      <Panel.Body>
        <p>
          {props.number}.<strong> {props.title}</strong> {props.duration}
          <Button onClick={props.click} style={{float: 'right', marginRight: '50px'}}><strong>Play</strong></Button>
        </p>

      </Panel.Body>
    </Panel>
  );
};

AlbumList.propTypes = {
  id: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

export default AlbumList;