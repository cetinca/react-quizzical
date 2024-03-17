import React from "react";

export default function Answer({ onClick, selected, children}) {
    return (
        <p className={selected && "answer answer-selected" || "answer"} onClick={onClick}>{children}</p>
    )
}