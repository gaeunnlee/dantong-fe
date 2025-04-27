import { FriendListItem } from '@/api/friend/types';
import { pageable } from '@/mocks/pageable';

export const friendListByEventResponse: Omit<FriendListItem, 'friendshipId'>[] =
  [
    {
      name: '김ㅇㅇ',
      studentId: '3277777',
      major: '소프트웨어학과',
    },
    {
      name: '이ㅇㅇ',
      studentId: '3288888',
      major: '소프트웨어학과',
    },
    {
      name: '박ㅇㅇ',
      studentId: '3299999',
      major: '소프트웨어학과',
    },
  ];

export const friendListResponse = {
  content: friendListByEventResponse.map((v) => ({
    ...v,
    friendshipId: 1,
  })),
  ...pageable,
};
