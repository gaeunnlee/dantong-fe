import { http, HttpResponse } from 'msw';
import { postListResponse } from './dummy/postListResponse';
import { appliedEventsResponse } from './dummy/appliedEventsResponse';
import { dkuLoginResponse } from './dummy/sign-up/dkuLoginResponse';
import { signUpRequest } from './dummy/sign-up/signUpRequest';
import { SignUpInfo } from '@/api/sign-up/types';
import { loginResponse } from './dummy/login/loginResponse';
import { userInfoResponse } from './dummy/user/userInfoResponse';
import {
  friendListByEventResponse,
  friendListResponse,
} from './dummy/friend/friendListResponse';
import { formResponse } from './dummy/form/formResponse';
import { mySubmitResponse } from './dummy/form/ submit/mySubmitResponse';
import { myFormListResponse } from './dummy/form/myFormListResponse';

export const handlers = [
  http.get('/post/list', () => HttpResponse.json(postListResponse)),
  http.get('/post/:id', ({ params }: { params: { id: string } }) =>
    HttpResponse.json(postListResponse.content[Number(params.id) - 1]),
  ),
  http.get('/survey/my/ticket', () => HttpResponse.json(appliedEventsResponse)),
  http.post('/user/verify', async () => {
    return HttpResponse.json(dkuLoginResponse, { status: 200 });
  }),
  http.post('/user/signup/:signupToken', async ({ request }) => {
    const data = (await request.json()) as SignUpInfo;
    return HttpResponse.json(signUpRequest(data), {
      status: 200,
    });
  }),
  http.post('/user/login', async () => {
    return HttpResponse.json(loginResponse, { status: 200 });
  }),
  http.get('/user', () => HttpResponse.json(userInfoResponse)),
  http.get('/friend/submit-list/postId/:postId', () =>
    HttpResponse.json(friendListByEventResponse),
  ),
  http.get(
    '/survey/:surveyId',
    ({ params }: { params: { surveyId: string } }) =>
      HttpResponse.json(formResponse(Number(params.surveyId))),
  ),
  http.post('/submit', async () => {
    return HttpResponse.json(null, { status: 200 });
  }),
  http.get(
    '/submit/my/:surveyId',
    ({ params }: { params: { surveyId: string } }) =>
      HttpResponse.json(mySubmitResponse(Number(params.surveyId))),
  ),
  http.get('/reply/user', () => HttpResponse.json(myFormListResponse)),
  http.get('/friend/list', () => HttpResponse.json(friendListResponse)),
  http.get('/friend/request', () => HttpResponse.json(friendListResponse)),
];
