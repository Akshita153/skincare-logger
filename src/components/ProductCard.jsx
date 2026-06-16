import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

function ProductCard({ product, onDelete }) {
  return (
    <Card className="product-card">
      <CardContent className="product-card-content">
        <div className="product-emoji">{product.emoji}</div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          {product.brand && <p className="product-brand">{product.brand}</p>}
          <div className="product-badges">
            <Badge className="badge-category">{product.category}</Badge>
            <Badge className="badge-time">{product.timeOfDay}</Badge>
          </div>
        </div>
        <Button
          onClick={() => onDelete(product.id)}
          className="delete-btn"
          variant="ghost"
        >
          🗑️
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProductCard