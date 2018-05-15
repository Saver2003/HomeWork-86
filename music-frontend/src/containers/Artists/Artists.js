import React, {Component, Fragment} from 'react';
import {PageHeader} from "react-bootstrap";
import {Link} from "react-router-dom";
import {fetchArtists} from "../../store/actions/artists";
import {connect} from "react-redux";
import ArtistList from "../../components/ArtistList/ArtistList";

class Artists extends Component {
  componentDidMount() {
    this.props.onFetchArtists();
  }

  render() {
    return (
      <Fragment>
        <PageHeader>
          <Link to="/">
            Artists
          </Link>
        </PageHeader>
        {this.props.artists.map(artist => (
          <ArtistList
            key={artist._id}
            id={artist._id}
            name={artist.name}
            photo={artist.photo}
            information={artist.information}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists.artists
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchArtists: () => dispatch(fetchArtists())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Artists);