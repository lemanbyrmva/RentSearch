import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./router";
import Layout from "./Components/Layout/Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.length > 0 &&
            routes.map((element, index) => (
              <Route
                key={index}
                index
                element={element.element}
                path={element.path}
              />
            ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
