# Health-Logger : 운동 기록 및 시각화 서비스

## 소개

운동을 기록하고 기록된 데이터를 시각화하는 웹 서비스입니다.

1. 날짜마다 운동, 식단, 간단 회고, 점수를 기록할 수 있습니다.
2. 기록된 데이터는 Calendar, Report 페이지에서 확인할 수 있습니다.
   - Calendar Page : 달력 형식의 컴포넌트에 날짜마다 기록을 확인할 수 있습니다.
   - Report Page
     - 운동 : 일 년간의 운동 기록을 확인할 수 있습니다. 기록된 점수에 따라 색상이 다릅니다.
     - 몸무게 : 몸무게 기록을 SVG로 구현된 Line Chart로 확인할 수 있습니다.
     - 미션 : 미션 목록을 확인할 수 있습니다.
3. 미션을 통해 기간 내의 몸무게, 운동 횟수를 목표 설정을 할 수 있습니다.
   <br /> <br />

---

## 기능 소개

### 회원가입 / 로그인

- Google 회원가입 및 로그인이 가능합니다

<img width="600" height="300" alt="스크린샷 2023-12-12 오후 1 14 41" src="https://github.com/jeongdopark/H-Logger/assets/72500346/61c9ec9a-d0cc-403f-acb9-1d88d041bba5" >

<br /> <br />

### 달력 페이지

- 달력 형식의 컴포넌트에 날짜마다 기록을 확인할 수 있습니다.

<img width="600" height="350" alt="스크린샷 2023-12-12 오후 1 17 37" src="https://github.com/jeongdopark/H-Logger/assets/72500346/db484345-4225-4ff7-8e90-c1a72433d0e4">

<br /> <br />

### 상세 페이지 ( 기록 CRUD )

- 캘린더의 날짜를 클릭하면 상세 페이지로 이동합니다.
- 해당 날짜의 기록을 할 수 있습니다.

<img width="600" height="350" alt="스크린샷 2023-12-12 오후 1 19 37" src="https://github.com/jeongdopark/H-Logger/assets/72500346/d8a2a541-32d6-48c3-840f-c4b6cbeca10b">

<br /> <br />

### 기록 페이지

- 운동 : 일 년간의 운동 기록을 확인할 수 있습니다. 기록된 점수에 따라 색상이 다릅니다.
- 몸무게 : 몸무게 기록을 SVG로 구현된 Line Chart로 확인할 수 있습니다.
- 미션 : 미션 목록 확인 및 미션 현황을 확인할 수 있습니다.

<img width="600" height="350" alt="스크린샷 2023-12-12 오후 1 23 08" src="https://github.com/jeongdopark/H-Logger/assets/72500346/ae97dddf-93bb-450c-88f9-196b5c3c6aad">
<img width="600" height="300" alt="스크린샷 2023-12-12 오후 1 26 16" src="https://github.com/jeongdopark/H-Logger/assets/72500346/4e363a03-9ec5-47ad-bb8d-7ecb9555939a">

<br /> <br />

### 미션 등록

- 미션을 통해 기간 내의 몸무게, 운동 횟수를 목표 설정을 할 수 있습니다.

<img width="600" height="300" alt="스크린샷 2023-12-12 오후 1 25 02" src="https://github.com/jeongdopark/H-Logger/assets/72500346/c24e1fcb-59fe-4020-9032-bb3650eb33b7">

---

<br />

## Stack

`React` `Typescript` `React-Query` `styled-components` `Firebase`
<br /><br />

## 현재 진행률

`50%`
