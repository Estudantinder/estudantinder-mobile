import { act, fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import faker from 'faker'

import MockNavigator, { Screen } from 'packages/__tests__/utils/navigation.mock'
import { waitNavigationRender } from 'packages/__tests__/utils/wait_navigation_render'
import { GENDERS } from 'packages/entities/Gender'

import EditStudentAbout, { EditStudentAboutProps } from '../pages/About'
import {
  STUDENT_ABOUT_SCHEMA_MAX_DATE,
  STUDENT_ABOUT_SCHEMA_MIN_DATE,
} from '../validators/StudentAboutSchema'

describe('edit-student-info/about', () => {
  const pageProps: EditStudentAboutProps = {
    formRef: { current: null },
    handleSubmit: jest.fn(),
  }

  const TestingComponent = () => (
    <MockNavigator>
      <Screen name="secrets">
        {() => <EditStudentAbout {...pageProps} />}
      </Screen>
    </MockNavigator>
  )

  describe('when rendered:', () => {
    test('should have a name input', async () => {
      const { queryByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      expect(queryByTestId('name')).not.toBeNull()
    })

    test('should have a birthday input', async () => {
      const { queryByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      expect(queryByTestId('birthday')).not.toBeNull()
    })

    test('should have a gender input', async () => {
      const { queryByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      expect(queryByTestId('gender')).not.toBeNull()
    })

    test('should have a custom gender input', async () => {
      const { queryByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      expect(queryByTestId('custom-gender')).not.toBeNull()
    })

    test('should have a submit button', async () => {
      const { queryByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      expect(queryByTestId('submit-button')).not.toBeNull()
    })
  })

  describe('form completion:', () => {
    test('should set name input and returns its value on submit', async () => {
      const { getByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      const nameInput = getByTestId('name')

      const fakeName = faker.name.findName()

      fireEvent.changeText(nameInput, fakeName)

      expect(pageProps.formRef.current?.getFieldValue('name')).toBe(fakeName)

      pageProps.formRef.current?.submitForm()

      expect(pageProps.handleSubmit).toBeCalledWith(
        { name: fakeName, birthday: undefined, gender: undefined },
        { reset: expect.any(Function) },
        undefined
      )
    })

    test('should set gender input and returns its value on submit', async () => {
      const { getByText } = render(<TestingComponent />)

      await waitNavigationRender()

      const genderInput = getByText('Masculino')

      fireEvent.press(genderInput)

      expect(pageProps.formRef.current?.getFieldValue('gender')).toBe(
        GENDERS.MALE
      )

      pageProps.formRef.current?.submitForm()

      expect(pageProps.handleSubmit).toBeCalledWith(
        { name: undefined, birthday: undefined, gender: GENDERS.MALE },
        { reset: expect.any(Function) },
        undefined
      )
    })

    test('should set custom gender input and returns its value on submit', async () => {
      const { getByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      const customGenderInput = getByTestId('custom-gender')

      const fakeCustomGender = faker.random.alpha({ count: 20 })

      act(() => fireEvent.changeText(customGenderInput, fakeCustomGender))

      expect(pageProps.formRef.current?.getFieldValue('gender')).toBe(
        fakeCustomGender
      )

      pageProps.formRef.current?.submitForm()

      expect(pageProps.handleSubmit).toBeCalledWith(
        {
          name: undefined,
          custom_gender: fakeCustomGender,
          gender: fakeCustomGender,
          birthday: undefined,
        },
        { reset: expect.any(Function) },
        undefined
      )
    })
  })

  describe('form events:', () => {
    test('should set initial data when provided', async () => {
      const initialData = {
        birth_date: faker.date.between(
          STUDENT_ABOUT_SCHEMA_MIN_DATE,
          STUDENT_ABOUT_SCHEMA_MAX_DATE
        ),
        name: faker.name.findName(),
        gender: faker.random.boolean() ? GENDERS.FEMALE : GENDERS.MALE,
      }
      render(
        <MockNavigator>
          <Screen name="secrets">
            {() => (
              <EditStudentAbout
                formRef={pageProps.formRef}
                handleSubmit={pageProps.handleSubmit}
                initialData={initialData}
              />
            )}
          </Screen>
        </MockNavigator>
      )

      await waitNavigationRender()

      pageProps.formRef.current?.submitForm()

      expect(pageProps.handleSubmit).toBeCalledWith(
        initialData,
        { reset: expect.any(Function) },
        undefined
      )
    })
  })
})
