// Import hooks for form state and navigation
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Import shared auth styles
import styles from './Auth.module.scss'

// Login page — existing customers sign in
const Login = () => {

  // Track form input values
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Handle form submission
  const handleSubmit = () => {
    // Will connect to backend later
    console.log('Login:', { email, password })
  }

  return (
    <main className={styles.auth}>
      <div className={styles.container}>

        {/* Logo */}
        <h1 className={styles.logo}>ÀṢÍRÍ</h1>

        {/* Page title */}
        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.subtitle}>
          Sign in to your account
        </p>

        {/* Login form */}
        <div className={styles.form}>

          {/* Email field */}
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={styles.input}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password field */}
          <div className={styles.field}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              className={styles.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button className={styles.submitBtn} onClick={handleSubmit}>
            Sign In
          </button>

        </div>

        {/* Link to register */}
        <p className={styles.switchText}>
          Don't have an account?{' '}
          <Link to="/register" className={styles.switchLink}>
            Create one
          </Link>
        </p>

      </div>
    </main>
  )
}

export default Login