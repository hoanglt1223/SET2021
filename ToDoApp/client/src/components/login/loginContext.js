
import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class LogInContextProvider extends Component {
  state = {
    userData: {
      username: "",
      password: "",
      isRemembered: false,
    }
  };

  setUserLogInDataContext = (usernameInput, passwordInput, isRememberedInput) => {
    this.setState(prevState => {
      return {
        userData: {
          username: usernameInput,
          password: passwordInput,
          isRemembered: isRememberedInput
        }
      };
    });
  };

  render() {
    return (
      <Provider
      value={{ userData: this.state.userData, setUserLogInDataContext: this.setUserLogInDataContext }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { LogInContextProvider, Consumer as LogInContextConsumer };
