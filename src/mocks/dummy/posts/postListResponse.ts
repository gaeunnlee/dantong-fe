import { PostListResponse } from '@/api/post/types';
import { posts } from '.';
import { pageable } from '../../pageable';

export const postListResponse: PostListResponse = {
  content: [...posts],
  ...pageable,
};
