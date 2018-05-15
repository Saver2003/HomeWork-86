import React, {Component, Fragment} from 'react';
import {PageHeader} from "react-bootstrap";
import {connect} from "react-redux";
import TrackList from "../../components/TrackList/TrackList";
import {addTrack, fetchTracks} from "../../store/actions/tracks";

class Tracks extends Component {
  componentDidMount() {
    this.props.onFetchTracks(this.props.match.params.id);
  }

  render() {
    return (
      <Fragment>
        <PageHeader>
          <p>
            Tracks
          </p>
        </PageHeader>
        {this.props.tracks.map(track => (
          <TrackList
            key={track._id}
            id={track._id}
            title={track.title}
            album={track.album.title}
            duration={track.duration}
            number={track.number}
            click={() => this.props.addTrack(track._id, this.props.user.token)}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks.tracks,
    user: state.users.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTracks: (id) => dispatch(fetchTracks(id)),
    addTrack: (track, token) => dispatch(addTrack(track, token))

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);