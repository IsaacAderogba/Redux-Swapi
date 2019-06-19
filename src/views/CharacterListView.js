import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import * as actionCreators from "../actions/index";
// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      return <div>Fetching...</div>;
    } else {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
    }
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.fetchingReducer.isFetching
  };
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  
    actionCreators
  
)(CharacterListView);
