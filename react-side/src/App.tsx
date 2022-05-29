import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoadHeader} from "./header";
import {GithubRepos} from "./github_api";
import {StackOverflowQuestions} from "./stackoverflow_api";

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