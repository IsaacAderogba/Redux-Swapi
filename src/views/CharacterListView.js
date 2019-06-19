import React, { useEffect } from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import * as actionCreators from "../actions/index";

const CharacterListView = props => {
  useEffect(() => {
    props.fetchData();
  }, []);

  if (props.fetching) {
    return <div>Fetching...</div>;
  } else if (props.errorMessage) {
    return <div>{props.errorMessage}</div>;
  } else {
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={props.characters} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    errorMessage: state.charsReducer.errorMessage,
    fetching: state.fetchingReducer.isFetching
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(CharacterListView);
