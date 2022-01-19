import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Homepage from "./components/homepage.js";
import PaperPage from "./components/paperpage.js";
import AuthorPage from "./components/authorspage";
import ReadingListPage from "./components/readinglistpage.js";
import SavedListPage from "./components/savedlistpage";
import NotFound from "./components/notfound.js";

/**
 * @author Sam Johnston
 * @id W17004648
 * @date 16/01/2022
 * @time 16:00
 *
 */

function App() {
  return (
      <BrowserRouter basename={"/kf6012/coursework/part2"}>
        <div className="App">
          <header className="App-header">

            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="paperpage.js">Papers</NavLink>
                </li>
                <li>
                  <NavLink to="authorpage.js">Authors</NavLink>
                </li>
                <li>
                  <NavLink to="readinglist.js">Login</NavLink>
                </li>
                <li>
                  <NavLink to="savedlistpage.js">Saved List</NavLink>
                </li>
              </ul>
            </nav>

              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="authorpage.js" element={<AuthorPage />} />
                <Route path="paperpage.js" element={<PaperPage />} />
                <Route path="readinglist.js" element={<ReadingListPage />} />
                <Route path="savedlistpage.js" element={<SavedListPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;
