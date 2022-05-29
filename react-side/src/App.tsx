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