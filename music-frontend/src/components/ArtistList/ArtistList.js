import React from 'react';
import PropTypes from 'prop-types';

import config from '../../config';

import notFound from '../../assets/images/not-found.png';
import {Image, Panel} from "react-bootstrap";
import {Link} from "react-router-dom";

const ArtistList = props => {
  let image = notFound;

  if (props.photo) {
    image = config.apiUrl + '/uploads/' + props.photo;
  }

  return (
    <Panel>
      <Panel.Body>
        <Image
          style={{width: '100px', height: '100%',marginRight: '10px', display: 'inline-block'}}
          src={image}
          thumbnail
        />
        <Link to={'/artists/' + props.id}>
          {props.name}
        </Link>
        <span style={{width: '70%', float: 'right', marginTop: '20px'}}>{props.information}</span>

      </Panel.Body>
    </Panel>
  );
};

ArtistList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  information: PropTypes.string
};

export default ArtistList;