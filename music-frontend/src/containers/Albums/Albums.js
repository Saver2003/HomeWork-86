import React, {Component, Fragment} from 'react';
import {PageHeader} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AlbumList from "../../components/AlbumList/AlbumList";
import {fetchAlbums} from "../../store/actions/albums";

class Albums extends Component {
  componentDidMount() {
    this.props.onFetchAlbums(this.props.match.params.id);
  }

  render() {
    return (
      <Fragment>
        <PageHeader>
          <Link to="/">
            Albums
          </Link>
        </PageHeader>
        {this.props.albums.map(album => (
          <AlbumList
            key={album._id}
            id={album._id}
            year={album.year}
            image={album.image}
            title={album.title}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.albums
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAlbums: (id) => dispatch(fetchAlbums(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);