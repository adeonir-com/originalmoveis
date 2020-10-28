import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Phone } from '@styled-icons/boxicons-solid/Phone'
import { Email } from '@styled-icons/entypo/Email'
import { theme } from 'styles'

import * as S from './styles'

export const Home = () => (
  <S.HomeContainer>
    <S.Info>
      <img src="/assets/logo.svg" alt="Original Móveis" />

      <hr />

      <S.Contact>
        <S.Link href="https://www.facebook.com/originalmoveis/" target="blank">
          <S.Item>
            <FacebookCircle color={theme.colors.info} />
            <span>@originalmoveis</span>
          </S.Item>
        </S.Link>
        <S.Link
          href="https://www.instagram.com/original_moveis_sob_medida/"
          target="blank"
        >
          <S.Item>
            <Instagram color={theme.colors.news} />
            <span>@original_moveis_sob_medida</span>
          </S.Item>
        </S.Link>
        <S.Item>
          <Phone color={theme.colors.success} />
          (51) 3638-1443
        </S.Item>
        <S.Link href="mailto:contato@originalmoveis.com.br">
          <S.Item>
            <Email color={theme.colors.warning} />
            <span>contato@originalmoveis.com.br</span>
          </S.Item>
        </S.Link>
      </S.Contact>
    </S.Info>

    <S.Image>
      <img
        src="https://source.unsplash.com/8DSudktoBMc/960x1080"
        alt="Original Móveis"
      />
    </S.Image>
  </S.HomeContainer>
)
