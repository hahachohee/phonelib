import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Info from './pages/Info'
import Login from './pages/Login'
import GlobalHeader from './Components/GlobalHeader'


const App = () => {

return (

     <Router>
       <GlobalHeader/>
      <Route exact path="/" component={MainPage} />
      <Route path="/info/:name/:phoneNumber" component={Info} /> 
      <Route path="/login" component={Login} /> 
    </Router> 
  )
}
export default App