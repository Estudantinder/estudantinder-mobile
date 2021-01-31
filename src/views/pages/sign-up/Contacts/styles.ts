import styled from 'styled-components/native'

import Input from 'views/components/molecules/Input'
import InputMask from 'views/components/molecules/InputMask'

const FacebookInput = styled(Input)`
  background-color: #dfe5f2;
`
const InstagramInput = styled(Input)`
  background-color: #fde6ef;
`
const WhatsappInput = styled(InputMask)`
  background-color: #e0efdf;
`
const TwitterInput = styled(Input)`
  background-color: #d2ecfc;
`

export default {
  FacebookInput,
  InstagramInput,
  WhatsappInput,
  TwitterInput,
}
