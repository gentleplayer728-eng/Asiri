// Import hooks for form state and navigation
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Import shared auth styles
import styles from './Auth.module.scss'

// Register page — new customers create an account
const Register = () => {

  // Track form input values
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Handle form submission
  const handleSubmit = () => {
    // Will connect to backend later
    console.log('Register:', { firstName, lastName, email, password })
  }

  return (
    <main className={styles.auth}>
      <div className={styles.container}>

        {/* Logo */}
        <h1 className={styles.logo}>ÀṢÍRÍ</h1>

        {/* Page title */}
        <h2 className={styles.title}>Join ÀṢÍRÍ</h2>
        <p className={styles.subtitle}>
          Create your account to start shopping
        </p>

        {/* Register form */}
        <div className={styles.form}>

          {/* Name fields — side by side */}
          <div className={styles.nameRow}>
            <div className={styles.field}>
              <label className={styles.label}>First Name</label>
              <input
                type="text"
                className={styles.input}
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Last Name</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button className={styles.submitBtn} onClick={handleSubmit}>
            Create Account
          </button>

        </div>

        {/* Link to login */}
        <p className={styles.switchText}>
          Already have an account?{' '}
          <Link to="/login" className={styles.switchLink}>
            Sign in
          </Link>
        </p>

      </div>
    </main>
  )
}

export default Register