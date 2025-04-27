import { SignUpInfo } from '@/api/sign-up/types';

export const signUpRequest = (request: SignUpInfo) => {
  return {
    studentId: request.studentId,
    password: request.password,
    name: request.name,
    phoneNumber: request.phoneNumber,
    major: 'SOFTWARE',
  };
};
