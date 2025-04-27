import { PostDetailResponse } from '@/api/post/types';
import { form2 } from '../form/form2';

export const post3: PostDetailResponse = {
  postId: 3,
  title: '2024 SW융합대학 농민학생연대활동',
  description: '농촌과 도시의 학생들이 함께 연대한 다양한 활동',
  content: `<p>안녕하세요, SW융합대학 학생 여러분!</p>

  <p>우리 학생회에서는 <strong>농민학생연대활동</strong>을 통해 농촌과 도시의 학생들이 함께 연대하여 다양한 활동을 진행합니다.<br>
  올해도 여러분과 함께 <strong>농민들과의 연대</strong>를 이어가기 위한 프로그램을 마련했으니 많은 참여 부탁드립니다!</p>

  <h2>📅 활동 기간</h2>
  <p><strong>2024년 5월 10일 (토) ~ 2024년 5월 15일 (목)</strong></p>

  <h2>🛠️ 주요 활동 내용</h2>
  <ul>
    <li>농촌 봉사활동 (수확 및 농사 도와주기)</li>
    <li>농민들과의 간담회 및 문화교류</li>
    <li>농산물 직거래 장터 운영</li>
    <li>농업 관련 세미나 및 특강</li>
  </ul>

  <h2>🙌 참가 대상</h2>
  <p>SW융합대학 소속 재학생 누구나</p>

  <h2>✍️ 참가 신청</h2>


  <h2>🎉 특별 혜택</h2>
  <p>참여자에게는 농촌 체험 후 기념품과 농산물 세트를 제공합니다!</p>

  <h2>📞 문의 방법</h2>
  <ul>
    <li>학생회 인스타그램 DM</li>
    <li>공식 오픈채팅방을 통해 문의해주세요.</li>
  </ul>

  <p>농민학생연대활동을 통해 함께 배우고 나누는 의미 있는 시간이 될 것입니다.<br>
  여러분의 많은 참여 부탁드리며, 농민들과의 소중한 연대 활동을 함께 해요!</p>

  <p>감사합니다.<br>
  <strong>SW융합대학 학생회 드림</strong></p>`,
  startTime: '2025-04-15T00:56:45.408942',
  endTime: '2025-04-15T00:56:45.408942',
  status: '진행중',
  category: 'EVENT',
  postFileResponse: [
    {
      id: 1,
      url: 'https://blog.kakaocdn.net/dn/PgqGe/btsNBrWA2YE/P0pAd8hztw0j3KgpNcKFd1/img.jpg',
      originalName: 'string',
      mediaType: 'string',
    },
    {
      id: 2,
      url: 'https://blog.kakaocdn.net/dn/cVh1oE/btsNA7YrXoR/4vkokZKURrWFKSHMJdtUVk/img.jpg',
      originalName: 'string',
      mediaType: 'string',
    },
  ],
  userResponse: {
    name: 'string',
    studentId: 'string',
    major: 'SOFTWARE',
    phoneNumber: 'string',
    userRole: 'string',
  },
  surveySummaryResponse: {
    surveyId: 2,
    title: form2.title,
    postId: form2.postId,
    startTime: form2.startTime,
    endTime: form2.endTime,
  },
  surveyId: 2,
};
