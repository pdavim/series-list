import React, { Component } from "react";

import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";

import "./index.css";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFectcing: false
  };

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFectcing: true });

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFectcing: false }));
  };

  render() {
    const { series, seriesName, isFectcing } = this.state;

    return (
      <div>
        <div>
          <Intro message="Here u can find all of your most loved series" />
        </div>
        <div className="series-length">
          The lenght of series array - {this.state.series.length}
        </div>
        <div className="input-title">
          <input
            className="input-field"
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFectcing && series.length === 0 && seriesName.trim() === "" && (
          <p>Please enter series name into the input</p>
        )}
        {!isFectcing && series.length === 0 && seriesName.trim() !== "" && (
          <p>No TV series have been found with this name</p>
        )}
        {isFectcing && <Loader />}
        {!isFectcing && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
