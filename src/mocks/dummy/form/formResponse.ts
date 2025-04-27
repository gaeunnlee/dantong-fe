import { form } from '.';

export const formResponse = (id: number) => ({
  title: form[id].title,
  description: form[id].description,
  startTime: form[id].startTime,
  endTime: form[id].endTime,
  surveyItems: form[id].surveyItems,
});
