import React from 'react';
import PropTypes from 'prop-types';

import config from '../../config';

import notFound from '../../assets/images/not-found.png';
import {Image, Panel} from "react-bootstrap";
import {Link} from "react-router-dom";

const AlbumList = props => {
  let image = notFound;

  if (props.image) {
    image = config.apiUrl + '/uploads/' + props.image;
  }

  return (
    <Panel>
      <Panel.Body>
        <Image
          style={{width: '100px', marginRight: '10px'}}
          src={image}
          thumbnail
        />
        <Link to={'/albums/' + props.id}>
          {props.title}
        </Link>
        <span> {props.year}</span>

      </Panel.Body>
    </Panel>
  );
};

AlbumList.propTypes = {
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AlbumList;