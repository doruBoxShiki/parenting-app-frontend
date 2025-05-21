import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Articles from './pages/Articles'
import DefaultLayout from './layout/DefaultLayout'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Route>
    </Routes>
  )
}

export default App
