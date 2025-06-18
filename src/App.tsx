import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import Layout from './Components/Layout'
import Error from './Components/Error'

const App = () => {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/details' element={<Details />}/>
        
      </Route>
      <Route path='/error' element={<Error />}/>
    </Routes>
  )
}

export default App
   