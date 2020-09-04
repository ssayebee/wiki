---
layout  : wiki
title   : vim replace를 이용한 문제 해결 경험
summary : 단어의 시작을 대문자로 변환하라
date    : 2020-08-07 01:46:32 +0900
updated : 2020-08-07 02:24:03 +0900
tags    : [vim, regex]
comments: true
---

## 1. 문제 상황

아래의 table에 있는 문자들을 capitalize 시키고 싶다.

vim 매크로를 이용해서 W~로 하는 방법을 생각해봤지만, replace 기능을 이용해서 해결할 수 없을까?

| Character | Name                                                      |
|-----------|-----------------------------------------------------------|
| `` ` ``   | backtick, grave accent, grave, backquote                  |
| `(`       | qarentheses                                               |
| `{`       | curly braces                                              |
| `[`       | square brackets                                           |
| `!`       | Exclamation mark, bang, factorial, exclam, not            |
| `"`       | Quotation mark, double quote, literal mark, double glitch |
| `#`       | Number sign, hash sign, pound, octothorpe                 |
| `$`       | dollar sign                                               |
| `%`       | percent sign                                              |
| `&`       | ampersand                                                 |
| `'`       | Apostrophe, signle quote, quote, prime                    |
| `*`       | asterisk, star, wild card, mult, times                    |
| `-`       | hyphen, dash, minus                                       |
| `.`       | full stop, dot, point                                     |
| `/`       | solidus, slash, stroke                                    |
| `?`       | question mark                                             |
| `@`       | commercial at, at sign, at, strudel                       |
| `\`       | reverse solidus, backslash, escape                        |
| `^`       | circumflex, accent                                        |
| `_`       | low line, underline, underscore, underbar                 |
| `|`       | vertical line, bar, pipe                                  |
| `~`       | tilde, not                                                |

## 2. 문제 해결

vim replace아래와 같이 구성된다.

```vim
:`range`/`target`/`replace`/`flag`
```

다음과 같은 정규표현식으로 해결할 수 있었다.
```vim
:{line1}, {line2}s/\(\w\)\(\w*\)/\u\1\2/g
```

1. `{line1}, {line2}s` 변경할 범위 지정
2. `\(\w\)` 맨앞 글자 하나를 역추적하며 범위 지정, `\(\w*\)` 나머지 글자를 역추적 하며 범위 지정
3. `\u\1` 첫 글자를 대문자로 변경 후 입력, `\2` 나머지 글자를 그대로 입력
4. `g` 글로벌 하게 변경(g를 붙이지 않을 경우 라인에서 가장 처음 매칭되는 문자만 변경됨)

## 3. 새로 알게된 내용

1. `\(\)`를 이용하면, 검색된 문자를 역추적 할 수 있다.
2. `+`, `?`, `|`, `&`, `{`, `)`등을 특별 기호로 사용하려면 escape문자 `\`를 붙여야 한다.
