import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProductCard from '../components/ProductCard'

const CATEGORIES = ['Cleanser', 'Toner', 'Serum', 'Moisturiser', 'SPF', 'Eye Cream', 'Exfoliant', 'Other']

const CATEGORY_EMOJI = {
  Cleanser: '🫧',
  Toner: '💧',
  Serum: '✨',
  Moisturiser: '🧴',
  SPF: '☀️',
  'Eye Cream': '👁️',
  Exfoliant: '🌿',
  Other: '🪄',
}

function Products() {
  const { products, addProduct, deleteProduct } = useApp()

  const [form, setForm] = useState({
    name: '',
    brand: '',
    category: '',
    timeOfDay: '',
  })

  const [filter, setFilter] = useState('All')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit() {
    if (!form.name || !form.category || !form.timeOfDay) return
    addProduct({ ...form, emoji: CATEGORY_EMOJI[form.category] || '🪄' })
    setForm({ name: '', brand: '', category: '', timeOfDay: '' })
  }

  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter)

  return (
    <div className="page">

      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-greeting">My Products 🧴</h1>
        <p className="dashboard-subtitle">Manage your skincare shelf.</p>
      </div>

      {/* Add Product Form */}
      <Card className="form-card">
        <CardContent className="form-card-content">
          <h2 className="section-title">Add a Product</h2>
          <div className="form-grid">
            <Input
              placeholder="Product name *"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-input"
            />
            <Input
              placeholder="Brand (optional)"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              className="form-input"
            />
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select category *</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{CATEGORY_EMOJI[cat]} {cat}</option>
              ))}
            </select>
            <select
              name="timeOfDay"
              value={form.timeOfDay}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">When do you use it? *</option>
              <option value="Morning">🌅 Morning</option>
              <option value="Night">🌙 Night</option>
              <option value="Both">🌓 Both</option>
            </select>
          </div>
          <Button onClick={handleSubmit} className="add-btn">
            + Add Product
          </Button>
        </CardContent>
      </Card>

      {/* Filter Badges */}
      <div className="filter-row">
        {['All', ...CATEGORIES].map(cat => (
          <Badge
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-badge ${filter === cat ? 'filter-badge-active' : ''}`}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <Card className="routine-placeholder">
          <CardContent className="routine-placeholder-content">
            <p>🌸 No products here yet. Add your first one above!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="products-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} onDelete={deleteProduct} />
          ))}
        </div>
      )}

    </div>
  )
}

export default Products