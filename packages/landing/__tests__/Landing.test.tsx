import { render } from '@testing-library/react-native'
import React from 'react'

import Landing from '..'

jest.mock('@react-navigation/native')

describe('landing/Landing', () => {
  describe('when rendered:', () => {
    test('should include a button to navigate to sign-up', () => {
      const component = render(<Landing />)

      expect(component.getByTestId('signup-button')).toBeTruthy()
    })

    test('should include a button to navigate to login', () => {
      const component = render(<Landing />)

      expect(component.getByTestId('login-button')).toBeTruthy()
    })
  })
})
