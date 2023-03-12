import { useState } from 'react';
// import { Pre } from "./styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import Layout from './layouts/Layout';
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles';
import Installation from "./views/Installation.jsx";
import Home from "./views/Home.jsx";
import Examples from "./views/Examples.jsx";
import Collabs from "./views/Collabs.jsx";
const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`.trim();


function App() {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/example",
      element: <Examples />,
    },
    {
      path: "/collabs",
      element: <Collabs />,
    }
  ])

  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} fallbackElement={<>Loading...</>} />
      </Layout>
    </div>
  )
}

export default App
