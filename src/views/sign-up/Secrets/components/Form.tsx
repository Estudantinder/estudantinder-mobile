import React, { forwardRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Input from 'src/components/Input'
import { useSignUpContext } from 'src/context/sign-up'
import { IValidateSignUpSecretData } from 'src/validators/sign-up/Secret'

import PasswordInput from './PasswordInput'

export interface ISignUpSecretsFormProps {
  onSubmit(data: IValidateSignUpSecretData): void
}

const SignUpSecretsForm = forwardRef<FormHandles, ISignUpSecretsFormProps>(
  function SignUpSecretsFormComponent(props, ref) {
    const { secrets } = useSignUpContext()

    return (
      <Form ref={ref} onSubmit={props.onSubmit} initialData={secrets}>
        <Input
          name="email"
          label="email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <PasswordInput name="password" label="senha" />

        <PasswordInput name="confirm_password" label="Confirmar senha" />
      </Form>
    )
  }
)

export default SignUpSecretsForm
