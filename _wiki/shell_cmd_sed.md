---
layout  : wiki
title   : sed를 이용한 문제 해결 경험
summary : title과 중복되는 h1을 지우자
date    : 2020-08-05 02:21:27 +0900
updated : 2020-08-06 19:35:35 +0900
tags    : [command, sed, zsh]
comments: true
---

## 1. 문제 상황

`wiki/_wiki/`에 위치한 `index.md`를 제외한 `*.md`은 아래의 형식으로 구성되어 있었다.

```md
---
layout  : wiki
title   : JS 함수형 프로그래밍
summary : JS로 함수형 프로그래밍 작성하기
date    : 2020-07-08 12:37:29 +0900
updated : 2020-08-04 16:40:31 +0900
tags    : [js, fp]
---

# JS 함수형 프로그래밍
 
함수형 프로그래밍은 성공적인 프로그래밍을 위해 부수 효과를 미워하고 조합성을 강조하는 프로그래밍 패러다임이다.
```

`title`과 `# (h1)`이 동일한 내용을 갖기 때문에, 중복을 제거하기로 했다.

단순하게, 위에 언급한 조건에 부합되는 파일들의 10, 11번째 라인을 삭제 하면되는 상황이다.

검색 도중 sed라는 command가 있는 것을 알았고, shell command를 작성해 보았다.

## 2. 문제 해결
```bash
$ ls _wiki | grep *.md | grep -v index | while read line
do
    sed -i '10,11d' "$line"
done
```

1. `_wiki` 디렉토리의 파일 목록을 출력
2. 해당 목록중 `*.md`로 나오는 것을 파이프
3. `index`가 매치되지 않는 파일을 파이프
4. 라인을 읽어서 `sed -i '10,11d' {fileName}` 명령어 실행

## 3. 새로 알게된 내용

* `grep`의 -v는 해당 패턴을 제외한 패턴들만 매칭한다.
* `sed`는 원래 원본 파일을 수정하지 않고 결과를 출력하지만, -i옵션을 사용하면 원본 파일을 수정할 수 있다.

+ 추가
    
## 4. sed를 이용해서 라인 추가하기

```md
---
layout  : wiki
title   : JS 함수형 프로그래밍
summary : JS로 함수형 프로그래밍 작성하기
date    : 2020-07-08 12:37:29 +0900
updated : 2020-08-04 16:40:31 +0900
tags    : [js, fp]
---
```

해당 블로그에 disqus를 이용한 comments 기능을 추가하면서, tags 밑에 라인에 `comments: true`를 추가해야 한다.

간단하게 7번째 라인에 comments: true를 추가하면 된다.

```bash
$ ls _wiki | grep *.md | grep -v index | while read line
do
    sed -i '7acomments: true' "$line"
done
```

놀랍게도 너무 잘된다.!

##  5. 정리

`sed`명령어는 여러모로 강력한 명령어인 것 같다. 좀 더 학습하면, 터미널 환경에서도 강력한 에디팅을 할 수 있을거 같다.
시간날 때, 제대로 다시 정리하자!
