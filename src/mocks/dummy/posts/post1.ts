import { PostDetailResponse } from '@/api/post/types';
import { form1 } from '../form/form1';

export const post1: PostDetailResponse = {
  postId: 1,
  title: '2024 SW융합대학 체육대회',
  description: '우리 모두가 함께 즐기고 소통할 수 있는 체육대회 개최',
  content: `  <p>안녕하세요, SW융합대학 학생 여러분!</p>

  <p>다가오는 봄, 우리 모두가 함께 즐기고 소통할 수 있는 <strong>체육대회</strong>를 개최하게 되어 안내드립니다!</p>

  <h2>📅 일시</h2>
  <p><strong>2025년 5월 15일 (목) 10:00 ~ 17:00</strong></p>

  <h2>📍 장소</h2>
  <p><strong>OO대학교 대운동장</strong></p>

  <h2>🛠️ 주요 프로그램</h2>
  <ul>
    <li>단체 경기 (피구, 축구, 계주 등)</li>
    <li>레크리에이션 및 부스 체험</li>
    <li>학과 대항전 및 다양한 상품 제공 🎁</li>
  </ul>

  <h2>🙌 참가 대상</h2>
  <p>SW융합대학 소속 재학생 누구나</p>

  <h2>🎉 특별 혜택</h2>
  <p>참가자 전원에게 기념품 제공 및 간식 부스 운영 예정입니다!</p>

  <p>다가오는 체육대회에서 함께 땀 흘리고, 소중한 추억을 만들어봐요!<br>
  많은 관심과 참여 부탁드립니다 :)</p>

  <h2>문의사항</h2>
  <p>학생회 인스타그램 DM 또는 공식 오픈채팅방을 통해 문의해주세요.</p>

  <p>감사합니다.<br>
  <strong>SW융합대학 학생회 드림</strong></p>
`,
  startTime: '2025-04-15T00:56:45.408942',
  endTime: '2025-04-15T00:56:45.408942',
  status: '진행중',
  category: 'EVENT',
  postFileResponse: [
    {
      id: 1,
      url: 'https://blog.kakaocdn.net/dn/bNTObD/btsNA7qDNnJ/5zn51tfzoHObt7wq5pVsO1/img.jpg',
      originalName: 'string',
      mediaType: 'string',
    },
    {
      id: 2,
      url: 'https://blog.kakaocdn.net/dn/cGDMW1/btsNAeKPlaY/RhpiU84rPqkxJiRPKSrQI1/img.jpg',
      originalName: 'string',
      mediaType: 'string',
    },
    {
      id: 3,
      url: 'https://blog.kakaocdn.net/dn/dlStlD/btsNA8JOfOR/zkV7tNjWlKiUVyZKxVvjb0/img.jpg',
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
    surveyId: 1,
    title: form1.title,
    postId: 1,
    startTime: form1.startTime,
    endTime: form1.endTime,
  },
  surveyId: 1,
};
