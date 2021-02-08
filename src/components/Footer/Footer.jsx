import React from "react";
import "./Footer.css";

function Footer(props) {
    // console.log(props)
    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="footer col-12 fixed-bottom text-center w-100">
                    <div className="card-class card text-center rounded-0">
                        <h6 className="card-footer text-muted"> &copy;Copyright 2020</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 