import React from 'react';
import './App.css';
import {GithubRepos} from "./github_api";
import {StackOverflowQuestions} from "./stackoverflow_api";
import {LoadHeader} from "./header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LoadHeader />} />
                  <Route path="/github-repos" element={<GithubRepos />} />
                  <Route path="/stackoverflow-questions" element={<StackOverflowQuestions />} />
              </Routes>
          </BrowserRouter>
      </>

  );
}

export default App;

/*
 <div id="header">
              <p>Welcome to the React-Forum   |   <a href="test">Reload Page</a>   |   <a href="test">Stack Overflow Questions</a>   |   <a href="/" onClick={GithubRepos}>Github Repositories</a> </p>
          </div>

          <div id="content">
              <p>Main content</p>
          </div>

          <div id="footer">
              For test
          </div>
 */

/*
<>
          <div className="box">
              <div className="image-bar" style={imageBarStyle}>
                  <img src={imageBarImage} style={imageStyle} alt="Italian Trulli" />
              </div>
              <div className="menu-bar" style={menuBarStyle}>
                wqe
              </div>
          </div>
      </>
 */

/*
<div class="image-bar" style={"float":"left"}>

</div>
<div class="menu-bar">

/div>
 */

/*
return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> 133to reload.
        </p>
        <form action="/post" method="post">
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
 */