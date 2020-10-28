import { renderWithTheme } from 'utils/tests/helpers'

import { Home } from '.'

describe('<Home />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
