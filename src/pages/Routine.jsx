import { useApp } from '../context/AppContext'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

function RoutineColumn({ title, emoji, timeOfDay }) {
  const { products, routine, addToRoutine, removeFromRoutine } = useApp()

  const selectedIds = routine[timeOfDay]
  const selectedProducts = products.filter(p => selectedIds.includes(p.id))
  const availableProducts = products.filter(p => !selectedIds.includes(p.id))

  return (
    <Card className="routine-column">
      <CardContent className="routine-column-content">
        <h2 className="routine-column-title">{emoji} {title}</h2>

        {selectedProducts.length === 0 ? (
          <p className="routine-empty-text">No products added yet.</p>
        ) : (
          <div className="routine-selected-list">
            {selectedProducts.map(product => (
              <div key={product.id} className="routine-selected-item">
                <span>{product.emoji} {product.name}</span>
                <button
                  className="routine-remove-btn"
                  onClick={() => removeFromRoutine(timeOfDay, product.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {availableProducts.length > 0 && (
          <div className="routine-add-section">
            <p className="routine-add-label">Add from your products:</p>
            <div className="routine-chip-list">
              {availableProducts.map(product => (
                <Badge
                  key={product.id}
                  className="routine-chip"
                  onClick={() => addToRoutine(timeOfDay, product.id)}
                >
                  + {product.emoji} {product.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function Routine() {
  const { products } = useApp()

  return (
    <div className="page">
      <div className="dashboard-header">
        <h1 className="dashboard-greeting">My Routine 🌿</h1>
        <p className="dashboard-subtitle">Build your morning and night skincare steps.</p>
      </div>

      {products.length === 0 ? (
        <Card className="routine-placeholder">
          <CardContent className="routine-placeholder-content">
            <p>🌸 You haven't added any products yet.</p>
            <p>Head to <strong>Products</strong> to add some first!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="routine-columns">
          <RoutineColumn title="Morning Routine" emoji="🌅" timeOfDay="morning" />
          <RoutineColumn title="Night Routine" emoji="🌙" timeOfDay="night" />
        </div>
      )}
    </div>
  )
}

export default Routine