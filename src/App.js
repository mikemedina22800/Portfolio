import  { Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/Home'
import Works from './pages/Works/Works'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/works' element={<Works/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
