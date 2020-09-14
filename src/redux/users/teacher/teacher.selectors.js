import { createSelector } from 'reselect'

const selectUser = (state) => state.teacher

export const selectCurrentTeacher = createSelector(
  [selectUser],
  (teacher) => teacher.current
)

export const selectIsTeacherSigningUp = createSelector(
  [selectUser],
  (teacher) => teacher.signingUp
)

export const selectTeacherSigningIn = createSelector(
  [selectUser],
  (teacher) => teacher.signingIn
)

export const selectTeacherAuthError = createSelector(
  [selectUser],
  (teacher) => teacher.error
)
