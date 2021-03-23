import {
  FacebookCircle as Facebook,
  Instagram,
} from '@styled-icons/boxicons-logos'
import { Phone } from '@styled-icons/boxicons-solid'
import { Email } from '@styled-icons/entypo'

import { theme } from 'styles'

import * as S from './styles'

export const Home = () => (
  <S.Container>
    <S.Info>
      <img src="/assets/logo.svg" alt="Original Móveis" />

      <S.Locale>Salvador do Sul/RS</S.Locale>

      <hr />

      <S.Contact>
        <S.Link href="https://www.facebook.com/originalmoveis/" target="blank">
          <S.Item aria-label="facebook">
            <Facebook color={theme.colors.info} aria-hidden="true" />
            <span>@originalmoveis</span>
          </S.Item>
        </S.Link>
        <S.Link
          href="https://www.instagram.com/original_moveis_sob_medida/"
          target="blank"
        >
          <S.Item aria-label="instagram">
            <Instagram color={theme.colors.news} aria-hidden="true" />
            <span>@original_moveis_sob_medida</span>
          </S.Item>
        </S.Link>
        <S.Item aria-label="phone">
          <Phone color={theme.colors.success} aria-hidden="true" />
          (51) 3638-1443
        </S.Item>
        <S.Link href="mailto:contato@originalmoveis.com.br">
          <S.Item aria-label="email">
            <Email color={theme.colors.warning} aria-hidden="true" />
            <span>contato@originalmoveis.com.br</span>
          </S.Item>
        </S.Link>
      </S.Contact>
    </S.Info>

    <S.Image>
      <img src="/assets/moveis.jpg" alt="Móveis sob medida" />
    </S.Image>
  </S.Container>
)
