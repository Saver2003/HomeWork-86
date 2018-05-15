import React, {Component, Fragment} from 'react';
import {PageHeader} from "react-bootstrap";
import TrackHistoryList from "../../components/TrackHistoryList/TrackHistoryList";
import {connect} from "react-redux";
import {fetchTrackHistory} from "../../store/actions/trackHistory";

class TrackHistory extends Component {

  componentDidMount() {
    this.props.onFetchTrackHistory(this.props.user.token);
  }

  render() {
    // console.log(this.props.trackHistory);
    return (
      <Fragment>
        <PageHeader>
          <p>
            Track History
          </p>
        </PageHeader>
        {this.props.trackHistory.map(track => (
          <TrackHistoryList
            key={track._id}
            id={track.track._id}
            title={track.track.title}
            user={track.user.username}
            number={track.track.number}
            dateTime={track.dateTime}
            artist={track.track.album.artist.name}
          />
        ))}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    trackHistory: state.trackHistory.trackHistory,
    user: state.users.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTrackHistory: (token) => dispatch(fetchTrackHistory(token)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);