import React, { Component } from "react";
import Loader from "../../components/Loader";

import "./index.css";

class SingleSeries extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    console.log(show);
    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <div className="showName">
              <p>{show.name}</p>
            </div>
            <div className="showNoPremiered">
              {show.name === null && <p>No date for premiered found</p>}
            </div>
            <div className="showPremiered">
              {show.name !== null && <p>Premiered was at {show.premiered}</p>}
            </div>
            <div className="showNoRating">
              {show.rating.average === null && <p>No Rating Found</p>}
            </div>
            <div className="showRating">
              {show.rating.average !== null && (
                <p>Rating - {show.rating.average}</p>
              )}
            </div>
            <div>
              <img
                src={show.image.medium}
                alt="show-series"
                className="showImage"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSeries;
