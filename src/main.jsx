import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Pages from './componenets/Pages.jsx'
//import Root from './componenets/root/Root.jsx';
import Home from './componenets/Home.jsx'




 const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-black text-center text-7xl'>Hello World</div>,
  },
  {
    path : "about",
  element : <div div className='text-black  text-center text-7xl'>About</div>
  },
  {
    path : "App",
    Component : App
  },
  // {
  //   path : '/',
  //   Component : Root ,
  //   children :[
  //       { index :true , Component : Home },
  //       {path : 'Pages' , Component: Pages }
  //   ]
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />, 
  </StrictMode>,
)




//<App />

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
