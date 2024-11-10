# 2025 시대에듀 유선배 웹디자인개발기능사 실기 과외노트

## PART 1 웹디자인기능사 실기 기본

- CHAPTER 1 유형분석
- CHAPTER 2 기술적 준수사항

## PART 2 기본기 다지기

- CHAPTER 1 Visual Studio Code 핵심
- CHAPTER 2 포토샵 필수 핵심
- CHAPTER 3 HTML 핵심
- CHAPTER 4 CSS 핵심
- CHAPTER 5 Javascript 핵심
- CHAPTER 6 jQuery 핵심

## PART 3 파트별 집중 공략

- CHAPTER 1 와이어프레임
- CHAPTER 2 메뉴 내비게이션
- CHAPTER 3 이미지 슬라이드
- CHAPTER 4 팝업 구현
- CHAPTER 5 탭

## PART 4 최신 기출 유형 공략

- CHAPTER 1 기출 유형 문제 - 은빛 억새 축제
- CHAPTER 2 기출 유형 문제 - 조은은행
- CHAPTER 3 기출 유형 문제 - WD중공업
- CHAPTER 4 기출 유형 문제 - YOUNG 쇼핑몰
- CHAPTER 5 기출 유형 문제 - 조은 여행사

## PART 5 신유형 기출 공략

- CHAPTER 1 신유형 문제(D1형)
- CHAPTER 2 신유형 문제(D2형)
- CHAPTER 3 신유형 문제(D3형)
- CHAPTER 4 신유형 문제(D4형)
- CHAPTER 5 신유형 문제(E1형)
- CHAPTER 6 신유형 문제(E3형)
- CHAPTER 7 신유형 문제(F4형) 
- CHAPTER 7 신유형 문제(E2형 - 실전)
- CHAPTER 8 신유형 문제(E4형 - 실전)

## 도서 구매
##### [sdedu] (https://www.sdedu.co.kr/book/item.php?it_id=1724026195&cat_id=001009021)
##### [yes24] (https://www.yes24.com/Product/Goods/136757366)
##### [교보문고] (https://product.kyobobook.co.kr/detail/S000214657907)


# 2024 SD에듀 유선배 웹디자인기능사 실기 과외노트

## PART 1 웹디자인기능사 실기 기본

- CHAPTER 1 유형분석
- CHAPTER 2 기술적 준수사항

## PART 2 기본기 다지기

- CHAPTER 1 Visual Studio Code 핵심
- CHAPTER 2 포토샵 필수 핵심
- CHAPTER 3 HTML 핵심
- CHAPTER 4 CSS 핵심
- CHAPTER 5 Javascript 핵심
- CHAPTER 6 jQuery 핵심

## PART 3 파트별 집중 공략

- CHAPTER 1 와이어프레임
- CHAPTER 2 메뉴 내비게이션
- CHAPTER 3 이미지 슬라이드
- CHAPTER 4 팝업 구현
- CHAPTER 5 탭

## PART 4 최신 기출 유형 공략

- CHAPTER 1 기출 유형 문제 - 은빛 억새 축제
- CHAPTER 2 기출 유형 문제 - 조은은행
- CHAPTER 3 기출 유형 문제 - WD중공업
- CHAPTER 4 기출 유형 문제 - YOUNG 쇼핑몰
- CHAPTER 5 기출 유형 문제 - 조은 여행사

## PART 5 신유형 기출 공략

- CHAPTER 1 신유형 문제(D1형)
- CHAPTER 2 신유형 문제(D2형)
- CHAPTER 3 신유형 문제(D3형)
- CHAPTER 4 신유형 문제(D4형)
- CHAPTER 5 신유형 문제(E1형)
- CHAPTER 6 신유형 문제(E3형)
- CHAPTER 7 신유형 문제(E2형 - 실전)
- CHAPTER 8 신유형 문제(E4형 - 실전)

------------

### 도서 오류 정정합니다. 
대상본 - 발행일: 2024년 01월 10일

#### 페이지72
h5{color: rgba(0,0,0,255,0.5);} -> h5{color: rgba(0,0,255,0.5);}
```
    h5 {
      ch5{color: rgba(0,0,255,0.5);}
    }
```

h6{color: hls(240,100%,50%);} -> h6{color: hsl(240,100%,50%);}
```
    h6{color: hsl(240,100%,50%);}
```
#### 페이지87
```
    body {
      font-family: '돋움', dotum, helvetica, sans-serif;
    }
```
#### 페이지150
let obj = New Object(); -> let obj = new Object();
```
   let obj = new Object();
```
#### 페이지194
header logo, nav css 누락
```
   /* header */
.logo{
  width: 200px;
  background: #999;
  height: 100px;
  float: left;
}
nav{
  width: 1000px;
  background: #888;
  height: 100%;
  float:right;
}
```

#### 페이지226
클래스명 수정
.slide-banner -> .banner
```
.banner{
  height: 150px;
  /* 임시 */
}
```
#### 페이지250
position: relative; 제거
.slide-banner -> .banner
```
header nav{
  position: absolute;
  top: 30px;
  right: 10px;
  width: 720px;
  background: #fff;
  /* position: relative; */
  z-index: 1;
}
```
#### 페이지275
문구 수정

클래스명 slides에 클래스명 sliderwrapper를
추가하고
->
클래스명 slides에 클래스명 slidewrapper를
추가하고

#### 페이지286
문구수정
즉 hreft -> 즉 href

#### 페이지298
//let tabContent = $('.tabcontent > div'); 라인 제거

