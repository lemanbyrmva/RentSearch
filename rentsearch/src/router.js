import Home from "./Components/Pages/Home/Home"
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import Faq from "./Components/Pages/Faq/Faq";
import News from "./Components/Pages/News/News";



const router=[
   {
      id:Math.random()*1000,
      name:"Home",
      path:"/",
      element:<Home/>
   },
   {
      id:Math.random()*1000,
      name:"About",
      path:"/about",
      element:<About/>
   },
   {
      id:Math.random()*1000,
      name:"Blog",
      path:"/blog",
      element:<Blog/>
   },
   {
      id:Math.random()*1000,
      name:"Faq",
      path:"/faq",
      element:<Faq/>
   },
   {
      id:Math.random()*1000,
      name:"News",
      path:"/news",
      element:<News/>
   },
];
export default router;