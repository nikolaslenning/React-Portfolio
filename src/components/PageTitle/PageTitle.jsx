import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const path = this.props.location.pathname.slice(1)
        const pathname = path.charAt(0).toUpperCase() + path.slice(1)
        return (
            <div className="titleDiv row pb-2 col-12">
                <h1 className="col-lg-12 page-title pt-5">{pathname}</h1>
            </div>
        );
    }
}
export default withRouter(Header);