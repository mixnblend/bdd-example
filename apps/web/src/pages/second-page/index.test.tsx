import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import SecondPage from '.'

describe('Second Page Page', () => {
  it('should render the homepage with a heading', () => {
    // given .. we have created a memory router for testing

    // when ... we render our component
    render(
      <Router>
        <SecondPage />
      </Router>
    )

    // then ... is should display a heading and a link as expected
    const heading = screen.getByText('Welcome to the Second Page')
    const goToHomePageLink = screen.getByRole('link', {
      name: 'Go to home page',
    })

    expect(heading).toBeDefined()
    expect(goToHomePageLink).toBeDefined()
    expect(goToHomePageLink.getAttribute('href')).toBe('/')
  })
})
