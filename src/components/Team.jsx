import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-12 team">
                  <div className="team-member">
                    <div className="team-image">
                      <img src={d.img} alt={d.name} className="team-img" />
                    </div>
                    <div className="team-info">
                      <div className="team-header">
                        <h4>{d.name}</h4>
                        <p className="job-title">{d.job}</p>
                      </div>
                      {d.description && <p className="team-description">{d.description}</p>}
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
