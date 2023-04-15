import React from "react";

// import { a } from "react-router-dom";
function Nav() {
    return (
        <div>
            <ul class="nav justify-content-center  bg-dark">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact us</a>
                </li>
            </ul>
        </div>

    );
}
export default Nav