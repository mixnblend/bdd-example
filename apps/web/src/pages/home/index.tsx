import styles from './index.module.scss'

import { Link } from 'react-router-dom'
import { FC } from 'react'

export const HomePage: FC = () => {
  return (
    <div data-test-id="test" className={styles['container']}>
      <div>
        <h1>Welcome to the BDD demo</h1>
      </div>
      <div className={styles['navContainer']}>
        <Link className={styles['link']} to="second-page">
          Go to second page
        </Link>
      </div>
    </div>
  )
}

export default HomePage
