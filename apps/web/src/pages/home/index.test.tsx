import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'

import HomePage from '.'

describe('Home Page', () => {
  it('should render the homepage with a heading and a link to another page', () => {
    // and .. we have created a memory router for testing

    // when ... we render our component
    render(
      <Router>
        <HomePage />
      </Router>
    )
    // then ... is should display a heading and a link as expected
    const heading = screen.getByText('Welcome to the BDD demo')
    const goToSecondPageLink = screen.getByRole('link', {
      name: 'Go to second page',
    })

    expect(heading).toBeDefined()
    expect(goToSecondPageLink).toBeDefined()
    expect(goToSecondPageLink.getAttribute('href')).toBe('/second-page')
  })
})
