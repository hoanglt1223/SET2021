
import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class SignUpContextProvider extends Component {
  state = {
    userData: {
      name: "",
      username: "",
      password: "",
      age: "",
      gender: "male",
      isAdmin: false,
    }
    
  };

  setUserSignUpDataContext = (nameInput ,usernameInput, passwordInput, ageInput, genderInput, isAdminInput) => {
    this.setState(prevState => {
      return {
        userData: {
          name: nameInput,
          username: usernameInput,
          password: passwordInput,
          age: ageInput,
          gender: genderInput,
          isAdmin: isAdminInput,
        }
      };
    });
  };

  render() {
    return (
      <Provider
      value={{ userData: this.state.userData, setUserSignUpDataContext: this.setUserSignUpDataContext }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { SignUpContextProvider, Consumer as SignUpContextConsumer };
