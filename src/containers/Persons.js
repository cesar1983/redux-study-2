import React, { Component } from "react";

import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import * as actionTypes from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd} />
        {this.props.storedPersons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { storedPersons: state.personReducer.persons };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAdd: (name, age) => {
      dispatch({ type: actionTypes.ADD, payload: { name, age } });
    },
    onPersonDelete: (personId) => {
      dispatch({ type: actionTypes.DELETE, payload: { personId: personId } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
