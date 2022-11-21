import myRequest from '@/utils/request';
import { MyResponseType } from '../type';

type LoginType = {
  email: string;
  penName: string;
  code: string;
};

export async function sendMail(params: string) {
  return myRequest.post<MyResponseType>({
    url: '/blog/sendMail',
    data: { email: params },
  });
}

export async function login(params: LoginType) {
  return myRequest.post<MyResponseType>({
    url: '/blog/login',
    data: { ...params },
  });
}
