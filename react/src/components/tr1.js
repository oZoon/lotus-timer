import React from 'react';

export default (props) => {
    return (
        <td className="table-2-1">
            <span className="timer" style={props.show ? { opacity: 1 } : { opacity: 0 }}>
                <span className="timer-digits">{props.time}</span>
                <img className="timer-gif" src="build/timer.gif" />
            </span>
        </td>
    )
}
