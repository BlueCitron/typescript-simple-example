# typescript-simple-example
타입스크립트를 통해 클래스와 인터페이스를 이용한 간단한 예제

# 타입스크립트 프로젝트를 구성할 때 알아야할 점
* 필요한 모듈은 다음과 같다
  * typescript
  * ts-node
* tsconfig.json 설정파일에서 lib에 "dom"을 추가하지 않으면 console.log를 사용할 수 없다
* 아래 명령어로 개발스크립트를 등록하면 편하다
    > "nodemon --exec ts-node src/app.ts --watch src"
