# 밀양 시내 노선도 프로젝트

## 소개

부산대학교 밀양 캠퍼스 내 교통편의 불편함을 해결하기 위한 서비스

#### `기존 문제`

- 밀양캠퍼스는 정해진 시간에 버스와 기차가 도착하고 출발하는데도 매번 환승가능한 시간을 따로따로 알아봐야 한다.

- 각 시간 마다 버스의 노선이 다르고 그에 따라 이동시간, 거리도 달라진다.
   
- 몇몇 정류장의 출발 시간만을 제공하기 때문에 그 사이 정류장까지의 이동시간이나 도착시간을 알 수 없다.
   
#### `제공 기능`

1. 열차 - 버스의 환승을 돕기 위한 `타임 테이블 시간표` 

2. 밀양 시내 `길찾기` & 지도 기능

3. 기존 `버스 시간표` 디자인 수정

#### `전체 디자인`

<img width="300px" alt="image" src="https://user-images.githubusercontent.com/80307321/197475873-9fb9b024-8b9f-4a5e-bc38-24d23d31091a.png">

## 기능 설명

### `1. 열차 - 버스 타임 테이블`

밀양 캠퍼스는 정해진 시간에 버스와 기차가 도착한다. 기차 - 버스 환승 시 마다 버스 정류장에 있는 시간표를 캡처하거나 웹에 올라와 있는 시간표를 확인하고 열차 어플로 들어가 기차 시간을 확인한 뒤 탑승해야는 불편함이 있다. 

출발 시간, 도착역을 선택하면 해당 시간으로부터 한 시간 내에 있는 기차 - 버스들의 시간을 타임 테이블 형태로 동시에 보여준다. 


![기능1 - 전체-2](https://user-images.githubusercontent.com/80307321/197461059-43d68ae4-38b7-42c6-bc6f-8afb54e6b7d7.png)
![기능1-1 시간표 보여주기 (밀양출발)](https://user-images.githubusercontent.com/80307321/197463754-1cc64085-7fff-4119-8ae9-f5f874657b0c.png)




### `2. 길찾기`

밀양의 버스 시간표는 주요 종점 세개 사이의 시간만 알려주고 있기 때문에 그 사이의 정류장엔 버스가 언제 도착하고 출발하는지 알기 어려운 부분이 많다. 또한 버스의 이동경로가 종류마다 다르기 때문에 각 노선번호가 어느 경로를 거치는지 미리 알고 있어야 하지만 캠퍼스 특성상 외지인이 많아 해당 경로를 알기 어렵다.

출발 지점과 도착지점을 선택하면 해당 지점에서 가장 근처에 있는 버스 정류장을 표시해준다. (최대 3개 예상) 버스 정류장을 사용자가 선택하면, 선택한 버스 정류장을 통해 갈 수 있는 노선과 출발 시간, 이동 시간등을 계산하여 제공한다. 

![기능2(길찾기) - 처음 지도](https://user-images.githubusercontent.com/80307321/197465237-00e17164-5312-4de0-bc25-3761c5b9aecd.png)
![기능2(길찾기) - 노선 상세정보](https://user-images.githubusercontent.com/80307321/197461183-ae016124-a647-4a79-a13c-329b7e934623.png)

### `3. 기존 버스 시간표`

표 형식의 버스 시간표를 학생들이 더 편리하게 확인할 수 있는 시간표로 수정한다. 

평일 / 주말, 공휴일 / 학생 방학마다 달라지는 시간표까지 제공해야 한다.

![기능3(버스시간표)](https://user-images.githubusercontent.com/80307321/197460874-3c504a33-e4e3-4fc9-aa88-fa2c4c8c1c15.png)


## 사용 방법

### React 프로젝트 폴더 생성

```
npx create-react-app (폴더명)
```

터미널에 `npx create-react-app` 명령어를 입력하여 React 프로젝트 폴더를 생성한다.

`main` 혹은 `submain` 레포지토리에 있는 코드를 다운로드 하여 생성한 React 폴더 안에 추가한다. (기존 파일과 일치하는 이름들은 덮어 씌운다.)

`npx` 명령어가 제대로 실행되기 위해선 node js 페이지에서 추천하는 버전(왼쪽)을 설치해야 한다.

<img width="300" alt="image" src="https://user-images.githubusercontent.com/80307321/197467393-e484b1f1-e2dd-4e6b-a82d-a19442e92de2.png">


### 서버 실행

```
npm start
```

터미널에 `npm start` 명령어를 입력하여 서버를 실행한다.
