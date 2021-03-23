import { screen } from '@testing-library/dom'
import { renderWithTheme } from 'utils/tests/helpers'

import { Home } from '.'

describe('<Home />', () => {
  it('should render the social links', () => {
    const { container } = renderWithTheme(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the logo and the city', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('img', { name: /original móveis/i }))
    expect(screen.getByText(/salvador do sul/i))
  })

  it('should render the social links', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/facebook/i))
    expect(screen.getByLabelText(/instagram/i))
    expect(screen.getByLabelText(/phone/i))
    expect(screen.getByLabelText(/email/i))
  })

  it('should render the cover image', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('img', { name: /móveis sob medida/i }))
  })
})
