# 💡 Health-Logger : 운동 기록 시각화 서비스

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [기능 소개](#기능-소개)
- [개발 이야기](#개발-이야기)
- [기술 스택](#기술-스택)
  <br><br>

---

<br>

## 프로젝트 소개

### 💡 운동 기록과 기록된 데이터를 시각화하는 웹 서비스입니다. <br>

### 🔗 배포 링크 : [hlogger.site](https://hlogger.site)

1. 각 날짜에 운동, 식단, 간단 회고, 점수를 기록할 수 있습니다.
2. 기록된 데이터는 Calendar, Report 페이지에서 확인할 수 있습니다.
   - Calendar Page : 달력 형식의 컴포넌트에 날짜마다 기록을 확인할 수 있습니다.
   - Report Page
     - 운동 : 일 년간의 운동 기록을 확인할 수 있습니다. 기록된 점수에 따라 색상이 다릅니다.
     - 몸무게 : 몸무게 기록을 SVG로 구현된 Line Chart로 확인할 수 있습니다.
     - 미션 : 미션 목록을 확인할 수 있습니다.
3. 미션을 통해 기간 내의 몸무게, 운동 횟수를 목표 설정을 할 수 있습니다.
   <br /> <br />

---

<br />

## 기능 소개

### 회원가입 / 로그인 & 달력 페이지

- Google 회원가입 및 로그인이 가능합니다.
- Guest로 둘러보실 수 있습니다.
- 각 날짜의 기록을 확인할 수 있습니다.

<p align="center"><img width="550" height="375" src="https://github.com/jeongdopark/H-Logger/assets/72500346/ae6fe71e-ab30-4549-b734-ee044fe31d86"></p>

<br />

### 상세 페이지 ( 기록 CRUD )

- 캘린더의 날짜를 클릭하면 상세 페이지로 이동합니다.
- 해당 날짜의 기록을 할 수 있습니다.

<p align="center"><img width="550" height="375" src="https://github.com/jeongdopark/H-Logger/assets/72500346/76b2ec64-ab8e-4af5-9a1e-757d347fe797"></p>

<br />

### 기록 페이지

- 운동 : 일 년간의 운동 기록을 확인할 수 있습니다. 기록된 점수에 따라 색상이 다릅니다.
- 몸무게 : 몸무게 기록을 SVG로 구현된 Line Chart로 확인할 수 있습니다.
- 미션 : 미션 목록 확인 및 미션 현황을 확인할 수 있습니다.

<p align="center"><img width="550" height="375" src="https://github.com/jeongdopark/H-Logger/assets/72500346/c54d34c0-8ca7-4845-9d60-1f45bb754481"></p>

<br />

### 미션 등록

- 미션을 통해 기간 내의 몸무게, 운동 횟수를 목표 설정을 할 수 있습니다.

<p align="center"><img width="550" height="375" alt="스크린샷 2023-12-12 오후 1 25 02" src="https://github.com/jeongdopark/H-Logger/assets/72500346/c24e1fcb-59fe-4020-9032-bb3650eb33b7"></p>

---

<br />

## 개발 이야기

- [React Portal + Context API 활용하여 Toast 메세지 구현](https://github.com/jeongdopark/H-Logger/wiki/React-Portal---Context-API-활용하여-Toast-메세지-구현)
- [resize event + Context API 활용하여 반응형 대응](https://github.com/jeongdopark/H-Logger/wiki/resize-event에-debounce-적용-및-isMobile-전역-상태관리로-모바일-환경-대응)
- [SVG 라인 차트, 도넛 차트 구현 이야기](https://github.com/jeongdopark/H-Logger/wiki/SVG-라인-차트%2C-도넛-차트-구현-이야기)
- [vite manualChunks & React.lazy - 성능 최적화](https://github.com/jeongdopark/H-Logger/wiki/성능-최적화-%E2%80%90-vite-manualChunks-%26-React.lazy)

<br />

## 기술 스택

`React` `Typescript` `Context-API` `React-Query` `styled-components` `Firebase` `AWS` `GitHub-Actions`

<br /><br />

## 현재 진행률

`70%`
