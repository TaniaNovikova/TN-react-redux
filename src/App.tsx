import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/UsersApp/Layout/Layout"
import Home from "./pages/UsersApp/Home/Home"
import Users from "./pages/UsersApp/Users/Users"

//lessons
// import Lesson16 from "./lessons/Lesson16/Lesson16"
//import Lesson17 from "./lessons/Lesson17/Lesson17"
import Lesson18 from "./lessons/Lesson18/Lesson18"



//homeworks
//import Homework16 from "./homeworks/Homework16.tsx/Homework16"
//import Homework17 from "./homeworks/Homework17/Homework17"

//consultations
// import Consultation08 from "./consultations/Consultation08/Consultation08"



const App = () => {
  return (
    <BrowserRouter>
      {/* <Consultation08 /> */}
      {/* <Lesson16 /> */}
      {/* UserApp - Practice - Lesson16 */}
      {/* <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout> */}
      {/* <Homework16/> */}
      {/* <Lesson17/> */}
      {/* <Homework17/> */}
      <Lesson18/>
    </BrowserRouter>
  )
}

export default App
