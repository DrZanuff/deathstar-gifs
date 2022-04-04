import { SearchBar } from '.'
import { RecoilRoot } from 'recoil'
import { fireEvent, render, screen } from '@testing-library/react'

describe('SearchBar', () => {
  it('renders', () => {
    render(
      <RecoilRoot>
        <SearchBar />
      </RecoilRoot>
    )

    expect(screen.getByTestId('search-bar__container')).toBeInTheDocument()
  })

  it('find button is disabled if search text is empty', async () => {
    const dom = render(
      <RecoilRoot>
        <SearchBar />
      </RecoilRoot>
    )

    const searchInput = dom.container.querySelector(
      '#search-bar__textfield'
    ) as HTMLInputElement
    const searchButton = dom.container.querySelector(
      '#search-bar__button'
    ) as HTMLButtonElement

    fireEvent.input(searchInput, { target: { value: 'test' } })

    expect(!searchButton.disabled).toBeTruthy()
  })
})
