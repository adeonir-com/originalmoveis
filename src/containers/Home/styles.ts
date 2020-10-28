import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HomeContainer = styled.div`
  min-height: 100vh;
  height: 100vh;

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `};
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    place-content: center;
    padding: 10rem 1rem;

    img {
      width: min(70%, 32rem);
    }

    hr {
      border: 0;
      border-top: 0.1rem solid ${theme.colors.lightGray};
      margin-top: 5rem;
      margin-bottom: 5rem;
      width: min(95%, 40rem);
    }

    ${media.greaterThan('medium')`
      padding: 2rem;
    `};
  `}
`

export const Contact = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: 1.3rem;
    display: grid;
    align-items: center;
    gap: 2rem;

    > div:last-child {
      svg {
        width: 2.4rem;
      }
    }

    ${media.greaterThan('small')`
      font-size: 1.4rem;
      grid-template-columns: repeat(2, auto);
    `};
  `}
`

export const Link = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    span::before {
      width: 100%;
    }
  }
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
      width: 3rem;
    }

    span {
      position: relative;

      &::before {
        content: '';
        display: block;
        border-top: 0.1rem solid ${theme.colors.darkGray};
        position: absolute;
        bottom: -0.4rem;
        left: 0;
        width: 0;
        transition: width 0.2s ease-in-out;
      }
    }
  `}
`

export const Image = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
