import { css } from 'styled-components'

import SourceSansLight from 'assets/fonts/SourceSansPro-Light.ttf'
import SourceSansRegular from 'assets/fonts/SourceSansPro-Regular.ttf'
import SourceSansBold from 'assets/fonts/SourceSansPro-Bold.ttf'


export const fonts = css`
  @font-face {
    font-family: 'Source Sans Pro';
    src: url('${SourceSansRegular}') format('opentype');
  }

  @font-face {
    font-family: 'Source Sans Pro Bold';
    src: url('${SourceSansBold}') format('opentype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Source Sans Pro Light';
    src: url('${SourceSansLight}') format('opentype');
    font-weight: 300;
  }
`
