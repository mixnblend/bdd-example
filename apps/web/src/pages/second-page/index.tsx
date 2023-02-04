import styles from './index.module.scss'

import { Link } from 'react-router-dom'
import { FC } from 'react'

export const SecondPage: FC = () => {
  return (
    <div data-test-id="test" className={styles['container']}>
      <div>
        <h1>Welcome to the Second Page</h1>
      </div>
      <div className={styles['navContainer']}>
        <Link className={styles['link']} to="/">
          Go to home page
        </Link>
      </div>
    </div>
  )
}

export default SecondPage
