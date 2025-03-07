# 49-2nd-5Sherlock-backend


## 5SHERLOCK 프로젝트 Front-end/Back-end 소개

- 차 전문 브랜드 [오설록](https://www.osulloc.com/) 클론 프로젝트
- 제품 분석과 가치 분석 진행
- 유저 플로우를 따라 제품정보 부터 주문의 과정의 UI와 API 구현
  
### 개발 인원 및 기간

- 개발기간 : 2023/9/18 ~ 2023/10/6
- 개발 인원 : 프론트엔드 3명, 백엔드 4명
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/49-2nd-5Sherlock-backend)
- [프론트엔드 github 링크](https://github.com/wecode-bootcamp-korea/49-2nd-5Sherlock-frontend)

### 프로젝트 선정이유

- 오설록은 국내 차 전문 브랜드로, 다양한 차를 판매함은 물론 구독 서비스를 제공하여 차와 함께하는 일상을 제공
- 다양성, 일상, 편리함을 주요 성질로 판단하고 이를 중심으로 기능 구현

### 데모 영상(이미지 클릭)
[데모영상](https://www.youtube.com/watch?v=-dnFsE2nu9c)

<br>

## 적용 기술 및 구현 기능

### 적용 기술

> - Front-End : React.js, sass
> - Back-End : Node.js, express.js, typeORM, bcrypt, JWT, MySQL
> - Common : RESTful API



### 구현 기능

#### 공통
##### 회원가입
- 실시간 유효성 검사
- bcrypt 비밀번호 암호화

##### 로그인
- bcrypt 비밀번호 검증
- JWT 토큰 발행

##### 메인페이지
- 베스트 상품 API
- 특가상품 API
- image slide

##### 제품 목록
- 제품 필터, 정렬
- pagination
- 장바구니 추가 버튼

##### 제품 상세
- 제품 상세 정보 및 API
- 리뷰 목록 및 API
- 바로구매 기눙/API
- 구매수량, 옵션 선택

##### 장바구니
- 장바구니 API
- 선택주문/전체주문
- 장바구니 추가 및 업데이트 API

##### 주문/결제
- 주문정보 API
- 결제 옵션
- 주문자, 배송지 입력, 기본배송지

##### 공통
- Nav, Footer
- JWT token 검증 middleware


<br>


## Reference

- 이 프로젝트는 [오설록](https://www.osulloc.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
