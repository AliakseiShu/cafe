import React from "react";

export const Pagination = () => {
    return (
        <ul className="Pagination_root__uwB0O">
            <li className="previous disabled"><a className=" " role="button"
                                                 aria-disabled="true" aria-label="Previous page"
                                                 rel="prev">&lt;</a></li>
            <li className="selected"><a rel="canonical" role="button"
                                        aria-label="Page 1 is your current page"
                                        aria-current="page">1</a></li>
            <li><a rel="next" role="button" aria-label="Page 2">2</a></li>
            <li><a role="button" aria-label="Page 3">3</a></li>
            <li className="next"><a className="" role="button" aria-disabled="false"
                                    aria-label="Next page" rel="next">&gt;</a></li>
        </ul>
    )
}