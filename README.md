# scss-practice

- 본인이 코드 작성 시 빠르게 참고할 수 있도록 예제와 문법을 정리한 것입니다.
- 자세한 설명은 scss파일 주석에서 확인할 수 있습니다.

#### 1.변수 만들기

```
$메인칼라: rgb(83, 153, 150);

.redDiv {
  // 변수 사용 시에도 달러 기호와 변수명
  background-color: $메인칼라;
}
```

#### 2.import하기

```
    @import "./\_reset.scss";
```

#### 3. nesting

- 셀렉터가 복잡해지거나 중복될 때 원래는 이렇게 사용하지만

```
    div.container h4 {
        color: blue;
    }

    div.container h3 {
        color: green;
    }
```

- 이렇게 부모 셀렉터 안에 관련 하위 셀렉터를 여러개 넣을 수 있다.

```
    div.container {
        h4 {
            background-color: orange;
            font-size: 14px;
        }
        h3 {
            background-color: orangered;
            font-size: 14px;
        }
    }
```

#### 4. extend 문법을 통해 비슷한 코드 축약하기

- 기본 알림창 코드

```
.lightAlert {
    background-color: #e5e5e5;
    padding: 20px;
    border-radius: 5px;
    border: none;
    p {
        margin: 0px;
        padding: 0px;
    }
}
```

- @extend .셀렉터명을 입력하면 해당 셀렉터의 정보를 가져온다.
- styled-components에서 styled(.lightAlert)와 같은 역할

```
.darkAlert {
    @extend .lightAlert;
    background-color: black;
    color: white;
}
```

#### 5. @mixin과 @include를 사용해서 함수 만들기

- 함수의 위치는 위에 (인식할 수 있도록) 놓고,
- @mixin을 사용하여 함수를 만들고,
- @include를 사용하여 함수를 사용한다.

```
@mixin textLineFunc() {
    text-decoration: line-through;
    color: rgb(104, 63, 3);
    font: weight 600px;
    margin-left: 20px;
}
```

```
.test {
    @include italicFunc;
}
```

![SCSS 문법](https://user-images.githubusercontent.com/78027252/153388805-ca373650-663a-40c3-aedd-fb00e9e665a6.png)
