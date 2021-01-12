import styled from 'styled-components/native'

import { InputLabel } from 'views/styles/globalStyles'

const Divider = styled.View`
  width: 10px;
`

const OrText = styled(InputLabel)`
  text-align: center;
  justify-content: center;

  margin-bottom: -10px;
  margin-top: 10px;
`

export default {
  Divider,
  OrText,
}
