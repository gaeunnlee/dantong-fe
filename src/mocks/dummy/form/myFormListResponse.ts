import { form } from '.';
import { PostStatus } from '@/types/post-status';
import { pageable } from '@/mocks/pageable';
import { posts } from '../posts';

export const myFormListResponse = {
  content: form.slice(1, form.length).map((item) => {
    return {
      surveyId: posts[item.postId - 1].surveyId,
      title: item.title,
      postId: item.postId,
      startTime: item.startTime,
      endTime: item.endTime,
      status: 'ACTIVE' as PostStatus,
      submitCount: 0,
    };
  }),
  ...pageable,
};
