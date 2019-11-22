import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countryFetch } from "../actions";
import { createCommunity } from "../actions";

function Communities(props) {
  const [addnewcomm, setAddnewcomm] = useState(false);

  console.log(props);
  useEffect(() => {
    if (props.userAllInfo)
      if (!props.userAllInfo.usertype) {
        props.countryFetch(props.userAllInfo.country);
        props.history.push(`/${props.userAllInfo.country}/communities`);
      } else props.countryFetch(props.match.params.country);
  }, [addnewcomm]);

  const [community, setCommunity] = useState({
    communite: ""
  });
  console.log(community);
  const onChange = event => {
    setCommunity({ communite: event.target.value });
  };
  console.log(community);
  onsubmit = event => {
    event.preventDefault();
    props.createCommunity(props.match.params.country, community);
    // props.history.push(`/${props.username}`);
    setCommunity({
      community: ""
    });
    setAddnewcomm(false);
  };

  if (props.communities == undefined || props.communities.length == 0)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  if (
    props.userAllInfo.userstyle &&
    !props.countries[props.match.params.id].communities
  )
    return (
      <div>
        {" "}
        <button
          onClick={event => {
            event.preventDefault();
            props.history.goBack();
          }}
        >
          Back
        </button>
        <h1>No Communities</h1>
      </div>
    );

  return (
    <div>
      <h2 className="commHeader">Communities</h2>
      <div className="commbtn">
        <button onClick={() => setAddnewcomm(true)}>Add Community</button>
      </div>
      <div className="allcommunities">
        {props.communities.map((communitie, index) => (
          <Link
            className="community"
            to={`/${props.match.params.country}/${communitie.communite}/${index}/Children`}
            key={communitie.communite}
          >
            <h4>{communitie.communite}</h4>
          </Link>
        ))}
      </div>
      {addnewcomm && (
        <form className="editeForm addcountryfrom">
          <label htmlFor="communite">Community name:</label>
          <input
            placeholder="community name"
            name="communite"
            onChange={onChange}
          />
          <div className="formbtn">
            {" "}
            <button>Submit</button>
            <button onClick={event => setAddnewcomm(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    userinfo: state.user,
    userAllInfo: state.userInfo,
    communities: state.data,
    countries: state.data
  };
};
export default connect(mapStatetoProps, { countryFetch, createCommunity })(
  Communities
);
