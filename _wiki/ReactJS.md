---
layout  : wiki
title   : 
summary : 
date    : 2020-07-22 00:24:08 +0900
updated : 2020-07-31 15:37:26 +0900
tags    : [js, reactjs]
toc     : true
public  : true
parent  : 
latex   : false
---

# ReactJS

## 1. 도입
* UI를 효과적으로 구축하기 위해 사용하는 자바스크립트 기반의 프론트엔드 라이브러리
* 선행 과정 JavaScript
* FACEBOOK 관리하는 OPENSOURCE 라이브러리
* MIT 라이센스를 따른다.

## 2. 특징
* 선언적(Declarative) : 대화형 UI를 작성하기에 유리함. 데이터가 변경되었을 때, 효율적으로 렌더링을 수행할 수 있도록 함
* 컴포넌트 기반(Component-Based) : 캡슐화된 컴포넌트가 상태를 관리하고 UI를 효과적으로 구성할 수 있다.
* 한 번 배워서 어디에서나 사용(Learn Once, Write Anywhere) : 코드의 재사용 용이

## 3. 문서
https://reactjs.org/docs/getting-started.html

**웹에서 실행하기**
> https://reactjs.org/redirect-to-codepen/hello-world

## 4. 장점
* 뛰어난 성능을 가지고 있으며 클라이언트 렌더링 뿐만 아니라 서버 사이드 렌더링도 지원한다.
* Ajax 등과 같은 비동기 방식과 비교했을 때 검색 엔진 최적화 등에 있어서 유리하다.

## 5. Props vs. State
<details markdown="1">
### Props (Properties)

1. 컴포넌트에 값을 전달하는데 이용 (인자와 유사).
2. props.defaultProps 를 이용해 기본 값을 정의할 수 있음.
3. props의 값은 변경되어서는 안됨

### starte

1. 컴포넌트에 대한 정보를 가짐
2. 값을 업데이트 할 수 있음 (ex: this.setState( {name: 'foo'} );)
3. 컴포넌트에서 만들어짐

### 정리
* props와 state 모두 컴포넌트와 관련된 정보를 나타내지만, 별도로 보관해야 함
* props에는 부모 컴포넌트가 설정한 정보가 들어 있지만 변경해선 안됨
* state에는 컴포넌트가 초기화, 변경 및 사용하는 'private'정보가 들어 있음
</details>

## 6. React LifeCycle 및 API 호출

<details markdown="1">
### 초기 구성
*React 컴포넌트 객체가 DOM에 실제로 삽입되기 전까지의 과정(Mounting)*
1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()

**componentDidMount() 함수에서 API를 호출하는 것이 효과적임**


### 데이터 변경
*객체를 렌더링 하기 위해 props 혹은 state를 사용*
1. shouldComponentUpdate() : 컴포넌트 업데이트를 수행할지 여부 확인
2. compoentWillUpate()
3. render() : 다시 화면이 구성
4. componentDidUpdate() : 컴포넌트가 업데이트 됨

### 컴포넌트 해제
*컴포넌트의 동작을 위해 사용됬었던 메소드들의 리소스를 제거, 성능 향상을 위해서 사용*
* componentWillUnmount()


**Server 없이 Web에서 JSON 데이터를 테스트 할 수 있는 사이트**

[TEST_JSON_WEB_SERVER](https://jsonplaceholder.typicode.com/)

ex) API 호출
`index.html`
```html
<div id="root"></div>
```

`index.js`
```JavaScript
class ApiExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  callApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => {
      this.setState({
        data: json.title
      });
    })
  }
  componentDidMount() {
    this.callApi();
  }
  render() {
    return (
      <h3>
        {this.state.data? this.state.data : '데이터를 불러오는 중입니다.'}
      </h3>
    );
  }
}

ReactDOM.render(<ApiExample/>, document.getElementById('root'));
```
</details>

## 7. React Event 처리

<details markdown="1">
### 정리
1. camelcase 사용 ex) `onClick`
2. JSX 문법 사용 ex) `{this.state.isToggleOn}`
3. JavaScript는 바인딩 처리가 기본설정으로 제공 되지 않음 (이벤트에 바인딩 처리가 필요)

```JavaScript
class EventHandling extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
        isToggleOn: !this.state.isToggleOn
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
ReactDOM.render(<EventHandling/>, document.getElementById('root'));
```

### 바인딩 처리 방법

#### Case1.) 간단한 방법
```JavaScript
class EventHandling extends React.Component {
  constructor(props){}
  handleClick = () => {
    this.setState({
        isToggleOn: !this.state.isToggleOn
    })
  }
  // 이하 생략
  }
}
```

#### Case2.) 생성자에 `method.bind(this)` 추가
```JavaScript
class EventHandling extends React.Component {
  constructor(props){
  this.handleClick = this.handleClick.bind(this);
  // 이하 생략
  }
}
```


#### Case3.) render 함수에 attr 부분 `method.bind(this)` 추가
```JavaScript
class EventHandling extends React.Component {
  // 상단 생략
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

</details>
