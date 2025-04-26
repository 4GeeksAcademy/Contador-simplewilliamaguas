import React from "react"
const SecondsCounter = (props) => {
    return (
        <div className="row bg-black text-white text-center p-4">
            <div className="counter col border border-light-subtle border-1">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="counter col">{props.six}</div>
            <div className="counter col">{props.five}</div>
            <div className="counter col">{props.four}</div>
            <div className="counter col">{props.three}</div>
            <div className="counter col">{props.two}</div>
            <div className="counter col">{props.one}</div>
        </div>
    )

}
export default SecondsCounter