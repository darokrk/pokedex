import React from "react";

const PokemonStats = ({ stats }) => {
  if (stats) {
    return stats.map((element, index) => {
      const { stat, base_stat } = element;
      return (
        <div
          className="row align-items-center"
          key={new Date().getTime() + index}
        >
          <div className="col-12 col-md-3">{stat.name}</div>
          <div className="col-12 col-md-9">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressBar"
                style={{ width: `${base_stat}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <small>{base_stat + `%`}</small>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
};

export default PokemonStats;
