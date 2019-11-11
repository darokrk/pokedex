import React from "react";

const PokemonSpecies = ({ pokemonSpec }) => {
  if (pokemonSpec) {
    return (
      <>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <h6 className="float-right">Catch Rate:</h6>
            </div>
            <div className="col-md-6">
              <h6 className="float-left">{pokemonSpec.capture_rate} %</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h6 className="float-right">Basic Happiness:</h6>
            </div>
            <div className="col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${pokemonSpec.base_happiness}%`,
                    backgroundColor: "#c2185b"
                  }}
                  aria-valuenow={15}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <small>{`${pokemonSpec.base_happiness}%`}</small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="float-right">Hatch Counter:</h6>
            </div>
            <div className="col-md-6">
              <h6 className="float-left">{`${pokemonSpec.hatch_counter}%`}</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <h6 className="float-right">Forms Switchable:</h6>
            </div>
            <div className="col-md-6">
              <h6 className="float-left">{`${pokemonSpec.forms_switchable}`}</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h6 className="float-right">Gender Rate:</h6>
            </div>
            <div className="col-md-6">
              <h6 className="float-left">{`${pokemonSpec.gender_rate}`}</h6>
            </div>
            <div className="col-md-6">
              <h6 className="float-right">Is Baby:</h6>
            </div>
            <div className="col-md-6">
              <h6 className="float-left">{`${pokemonSpec.is_baby}`}</h6>
            </div>
          </div>
        </div>
      </>
    );
  } else return null;
};

export default PokemonSpecies;
