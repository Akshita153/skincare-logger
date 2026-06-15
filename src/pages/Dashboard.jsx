import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { emoji: '🧴', title: 'Products Added', value: '0', color: 'stat-blush' },
  { emoji: '📅', title: 'Days Logged', value: '0', color: 'stat-sage' },
  { emoji: '🔥', title: 'Current Streak', value: '0 days', color: 'stat-lavender' },
]

function StatCard({ emoji, title, value, color }) {
  return (
    <Card className={`stat-card ${color}`}>
      <CardContent className="stat-card-content">
        <span className="stat-emoji">{emoji}</span>
        <div>
          <p className="stat-value">{value}</p>
          <p className="stat-title">{title}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function Dashboard() {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="page">

      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-greeting">{greeting}, Akshi ✨</h1>
        <p className="dashboard-subtitle">Here's your skincare overview for today.</p>
      </div>

      {/* Stat Cards */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Today's Routine */}
      <div className="dashboard-section">
        <h2 className="section-title">Today's Routine</h2>
        <Card className="routine-placeholder">
          <CardContent className="routine-placeholder-content">
            <p>🌸 No routine set up yet.</p>
            <p>Head to <strong>Routine</strong> to build your morning & night routine!</p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default Dashboard