import React from 'react';
import PropTypes from 'prop-types';
import {Panel} from "react-bootstrap";
import Moment from "react-moment";

const TrackHistoryList = props => {
  return (
    <Panel>
      <Panel.Body>
        <p>{props.title} <span style={{float: 'right'}}>
          <Moment format="YYYY-MM-DD HH:mm">
            {props.dateTime}
          </Moment>
          </span>
          <strong><span style={{float: 'right', marginRight: '650px'}}>{props.artist}</span></strong></p>
      </Panel.Body>
    </Panel>
  )
};

TrackHistoryList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
  number: PropTypes.number,
  dateTime: PropTypes.string,
  artist: PropTypes.string
};

export default TrackHistoryList;