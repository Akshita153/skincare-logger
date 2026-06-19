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

  function addToRoutine(timeOfDay, productId) {
    setRoutine(prev => {
      if (prev[timeOfDay].includes(productId)) return prev
      return { ...prev, [timeOfDay]: [...prev[timeOfDay], productId] }
    })
  }

  function removeFromRoutine(timeOfDay, productId) {
    setRoutine(prev => ({
      ...prev,
      [timeOfDay]: prev[timeOfDay].filter(id => id !== productId)
    }))
  }

  return (
    <AppContext.Provider value={{
      products, addProduct, deleteProduct,
      logs, setLogs,
      routine, addToRoutine, removeFromRoutine
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}