import React from "react";
import "./styles.css";
//import { TwitterTweetEmbed } from "react-twitter-embed";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marginTop: 10
      //marginTop: window.innerWidth * (window.innerHeight / window.innerWidth)
    };
    this.header = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.resize);
    this.resize();
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize);
  };
  resize = () => {
    this.setState({
      marginTop: this.header.current.offsetHeight
    });
  };
  render() {
    const { marginTop } = this.state;
    return (
      <div className="App">
        <div
          ref={this.header}
          style={{
            textAlign: "right",
            width: "100%",
            top: "0px",
            position: "fixed",
            right: "0px",
            backgroundColor: "rgb(180,200,255)"
          }}
        >
          <a
            href="https://lightte.ch"
            style={{ color: "white", textDecoration: "none" }}
          >
            lightte.ch
          </a>
        </div>
        <div
          style={{
            transition: ".3s ease-in",
            margin: "10px",
            marginTop: marginTop,
            width: "calc(100% - 20px)",
            minWith: "300px",
            maxWidth: "600px"
          }}
        >
          <h1>LaborEquity.org</h1>
          <h2>
            free-rider-mutable equity derived from labor to which is owned by
            labor and targeted by&nbsp;
            <a href="https://30under5.us">
              inverse-of-home-price-median/hours-worked
            </a>
            . QE upon deposit is perfect for keeping labor and
            free-rider-immutable sewage courts toll-less roads and&nbsp;
            <a href="https://vaults.biz">plow</a>
            <br />
            <br />
            (i) free-rider-mutable&nbsp;
            <a href="https://3under2.us">tax/issuance</a>&nbsp;or (ii) bondage
            on free-rider-immutable is unconstitutional
          </h2>
          <h3>entrepreneurs don't dilute! sell royalty with max-profit!</h3>
          <hr />
          royalty contracts by non-, non-compete-monopsony asset or intentioned
          work towards advertised goals&nbsp;<a href="2052.live">2052.live</a>
          &nbsp;as to&nbsp;
          <a href="https://lightte.ch">curry favor of</a>, not compete with,
          customers&nbsp;
          <a href="https://30under5.us">30under5.us</a>&nbsp;of abject-intent
        </div>
      </div>
    );
  }
}
