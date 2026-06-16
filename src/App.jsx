import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Routine from './pages/Routine'
import DailyLog from './pages/DailyLog'
import Products from './pages/Products'
import Insights from './pages/Insights'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/log" element={<DailyLog />} />
            <Route path="/products" element={<Products />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App