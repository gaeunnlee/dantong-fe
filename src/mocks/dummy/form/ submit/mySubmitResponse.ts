import { MySubmitResponse } from '@/api/form/types';
import { form } from '..';
import { QuestionType } from '@/api/form-upload/types';

export const mySubmitResponse = (id: number): MySubmitResponse => ({
  surveyId: id,
  surveyReplies: form[id].surveyItems.map((item) => ({
    surveyReplyId: 1,
    surveyItem: {
      surveyItemId: item.surveyItemId,
      tag: item.tag as QuestionType,
      title: item.title,
      description: item.description,
      options: item.options || [],
    },
    content:
      item.tag === 'SUBJECTIVE'
        ? '몇 시까지 가야 되나요?'
        : item.options?.[0] || '',
  })),
});
