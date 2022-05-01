import Parent from "./Parent"
import React from "react"

function GrandParent() {
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a GrandParent Component</p>
            <Parent />
            <Parent />
        </div>
    )
}

function customComparison(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */

    /* 
        Example:
        return prevProps.title === nextProps.title
                 && prevProps.releaseDate === nextProps.releaseDate;
    */
}

export default React.memo(GrandParent, customComparison)