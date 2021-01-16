import React, { Component } from "react";

class HomePage extends Component {
    state = {
    };
  
    render() {
      return (
        <React.Fragment>
          <div className="align-self-center">
            <h1 className="display-2 m-3">Date Suggestions</h1>
            <div className="horizontal-line"></div>
            <div className="container" style={{ marginTop: "30px" }}>
              <div className="row">
                <div
                  className="col md-3 m-5 bg-dark rounded p-5"
                >
                  <h2 className="lead p-3 text-white">
                    Couples Login
                  </h2>
                  <button className="btn btn-lg btn-light m-3" onClick={() => this.props.loginHandler.setUser(this.login())}>Sign In</button>
                </div>
                <div
                  className="col md-6 m-5 bg-dark rounded p-5"
                >
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default HomePage;
  