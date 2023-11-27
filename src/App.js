import  { Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './pages/Layout/Layout'
import Home from './pages/Home'
import Works from './pages/Works'
import Contact from './pages/Contact'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
