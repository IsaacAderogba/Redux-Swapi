import React, { useEffect } from "react";
import { connect } from "react-redux";
import pt from "prop-types";

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

CharacterListView.propTypes = {
  characters: pt.array,
  errorMessage: pt.string,
  fetching: pt.bool,
  fetchData: pt.func
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
