import Nav from './Components/Nav'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import Layout from './Components/Layout'

const App = () => {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/details' element={<Details />}/>
      </Route>
    </Routes>
  )
}

export default App
   