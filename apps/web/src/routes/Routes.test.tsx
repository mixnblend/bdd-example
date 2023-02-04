import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { RoutesComponent } from './Routes'

describe('router behavior with protected routes', () => {
  it('displays the home route by default', () => {
    // given ... We have created a memory history

    const history = createMemoryHistory()
    // when ... I render my component with my router
    render(
      <Router location={history.location} navigator={history}>
        <RoutesComponent />
      </Router>
    )
    // then ... the home route should be rendered as expected
    expect(history.location.pathname === '/').toBeTruthy()
  })
})
