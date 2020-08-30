---
layout  : wiki
title   : 하루 20줄 vim help 번역하기 (6편)
summary : tags 사용하기, 다양한 커서 움직이기
date    : 2020-08-07 09:20:51 +0900
updated : 2020-08-10 00:19:36 +0900
tags    : [vim]
comments: true
toc     : true
---

## 여러 움직임

| 기호 | 횟수 | 용법                 | 설명                                                              |
|------|------|----------------------|-------------------------------------------------------------------|
| %    |      | %                    | 다음 brace, bracket, comment, 혹은 `#if`/`#else`/`#endif` 찾는다. |
| H    | N    | H                    | N번쨰 윈도우로 라인으로 이동, on the first non-blank              |
| M    |      | M                    | 가운데 윈도우 라인으로 이동, on the first non-blank               |
| L    | N    | L                    | 바닥에서 부터 N번째 라인으로 이동, on the first non-blank         |
| go   | N    | go                   | N번쨰 byte의 버퍼로 이동                                          |
| :go  |      | :[range]go[to] [off] | [off] byte 버퍼로 이동                                            |

------------------------------------------------------------------------------

## tags 사용하기

*아직 사용해 본적이 없어서 차후 실습 후 번역 계획*

| 사용     |                        | 설명                                                                  |
|----------|------------------------|-----------------------------------------------------------------------|
| :ta      | :ta[g][!] {tag}        | jump to tag {tag}                                                     |
| :ta      | :[count]ta[g][!]       | jump to [count]'th newer tag in tag list                              |
| CTRL-]   | CTRL-]                 | jump to the tag under cursor, unless changes have been made           |
| :ts      | :ts[elect][!] [tag]    | list matching tags and select one to jump to                          |
| :tjump   | :tj[ump][!] [tag]      | jump to tag [tag] or select from list when there are multiple matches |
| :ltag    | :lt[ag][!] [tag]       | jump to tag [tag] and add matching tags to the location list          |
| :tags    | :tags                  | print tag list                                                        |
| CTRL-T   | N  CTRL-T              | jump back from Nth older tag in tag list                              |
| :po      | :[count]po[p][!]       | jump back from [count]'th older tag in tag list                       |
| :tnext   | :[count]tn[ext][!]     | jump to [count]'th next matching tag                                  |
| :tp      | :[count]tp[revious][!] | jump to [count]'th previous matching tag                              |
| :tr      | :[count]tr[ewind][!]   | jump to [count]'th matching tag                                       |
| :tl      | :tl[ast][!]            | jump to last matching tag                                             |
| :ptag    | :pt[ag] {tag}          | open a preview window to show tag {tag}                               |
| CTRL-W_} | CTRL-W }               | like CTRL-] but show tag in preview window                            |
| :pts     | :pts[elect]            | like ":tselect" but show tag in preview window                        |
| :ptjump  | :ptj[ump]              | like ":tjump" but show tag in preview window                          |
| :pclose  | :pc[lose]              | close tag preview window                                              |
| CTRL-W_z | CTRL-W z               | close tag preview window                                              |

------------------------------------------------------------------------------
