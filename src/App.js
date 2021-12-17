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
          <a
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://saverparty.xyz"
          >
            saver
          </a>
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
        <br />
        <a href="https://qr.ae/pGqdjH">
          Does burning trillions of paper money prevent inflation? I was
          relatively new to crypto and they had a burning mechanism that makes
          it increase its value.
        </a>
        <br />
        <br />
        Inflation, as measured, ‘per hour price deflation,’ would be if that
        comparative-advantage, technological-advancement, as a sort of work
        deficit mismeasurement, lost - depending on the work put in, and beyond
        intrinsic income and utility. It isn’t common sense, but even useless
        dollar-park-deeds, for income at least, loses the labor equity in what I
        call a ‘work deficit’ phenomena, depending on the owner really earned
        it.
        <br />
        If those dollars were earned with work - that is in fact a, “net loss” -
        like invoices, expiring-claims, implausible-landlord-use & repo-cycle
        kept-down-payments third-party-donee-beneficiary-claimables, nor if the
        concurrentable currencies are stopped from coming in from outside the
        market: no price-inelastic bid-to-ask monopsony, nor laborless-demand,
        harm done.
        <br />
        <br />
        As a matter of dissolution, dollars are just public-park-shares (20% of
        U.S. lands are federally-”owned,” and in my opinion, dollars stand over
        bonds, lo aren’t included in gini, poverty, nor inflation, to hide the
        wealth, and perpetuate youth into fiefdom and employability, forever,
        impossible-and-implausibly-deniable, at that).
        <br />
        So, although they have no intrinsic value, as a durable-good can
        exhibit, by utility or income (should be separate: 1-level-board
        max-profit-royalty, from equity, by default, much less debt
        “investment”),
        <h2>the work deficit, up-charges the work undone by the work done,</h2>
        unappreciated forevermore thereafter, the loss of record of that work
        done. I say, reverse lender, landlord, and insurer work deficit! That
        is, cap rent by unit or days, not price; (cash/debt)*income every year
        back; truncated sales tax for sewage, police, lawsuits &
        industry-variant-multiple-of-11/12-jury for more or duress beyond
        minimal viable product permit, desistation of jury-truths, or conviction
        with the evidence of the arresting officer and 2 week classified
        discovery and anon uuid executions, with abstention relevant to
        holdings, and default-”no” from no-candidates.
      </div>
    );
  }
}
