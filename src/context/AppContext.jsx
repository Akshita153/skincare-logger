import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [products, setProducts] = useState([])
  const [logs, setLogs] = useState([])
  const [routine, setRoutine] = useState({ morning: [], night: [] })

  function addProduct(product) {
    setProducts(prev => [...prev, { ...product, id: Date.now() }])
  }

  function deleteProduct(id) {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  return (
    <AppContext.Provider value={{
      products, addProduct, deleteProduct,
      logs, setLogs,
      routine, setRoutine
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}