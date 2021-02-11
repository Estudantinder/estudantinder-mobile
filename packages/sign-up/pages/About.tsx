import React from 'react'

import EditStudentAbout from 'packages/student-info/edit-target-info/pages/About'

import { useSignUpContext } from '../context'

const SignUpAbout: React.FC = () => {
  const context = useSignUpContext()

  return (
    <EditStudentAbout initialData={context.about} setData={context.setAbout} />
  )
}

export default SignUpAbout
