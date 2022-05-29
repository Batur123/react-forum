import React from "react";

export const LoadHeader = () => {
    return(
        <div id="header">
            Welcome to the React-Forum <br/>
            <ul id="navigationBarList">
                <li><a href="/">Main Menu</a></li>
                <li><a href="stackoverflow-questions">Stack Overflow Questions</a></li>
                <li><a href="github-repos">Github Repositories</a></li>
            </ul>
        </div>
    )
}
