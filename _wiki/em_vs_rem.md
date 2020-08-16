---
layout  : wiki
title   : rem, em에 대한 정리
summary : 반응형의 시작, 상대적 font-size
date    : 2020-08-12 16:16:15 +0900
updated : 2020-08-12 16:58:09 +0900
tags    : [css, responsive]
comments: true 
---

## 1. `em` 단위

~~~css
.box{
	font-size: 20px;
	.child{
		width: 0.5em;
	}
}
~~~

`em`은 `px`, `%` 와 같이 웹브라우저에서 사용되는 단위이다. 
child의 폭은 가장 가까운 root 즉, .box의 **font-size**에 따라, **10px**이 되게 된다.

## 2. `rem` 단위

~~~css
html {
	font-size: 16px;
}
.box{
	font-size: 20px;
	.child{
		width: 0.5rem;
	}
}
~~~

`rem`은 `em`과 달리 root의 **font-size**에 따라 변경된다. 따라서, 
위와 같은 경우 child의 폭은 **8px**이 된다. **대부분의 브라우저의 default font-size는 16px이다.**
