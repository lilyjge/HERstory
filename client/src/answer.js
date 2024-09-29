import React from 'react';
import './App.css'; //create this same file but for CSS

function DisplayAnswer({ ans, solved }) {
    // console.log("in function")
    if (!solved) return null;
    else return (
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="card" style={{ width: "100%" }}>
                    <div className="m-3 p-3">
                        <div className="DisplayAnswer">
                            <h5>{ans}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayAnswer;