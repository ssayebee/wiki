---
layout  : wiki
title   : 코딩야학 Tensorflow 4일차(1)
summary : 아이리스 품종 예측
date    : 2020-08-26 20:28:22 +0900
updated : 2020-08-26 20:50:46 +0900
tags    : [ml, tensorflow, python, yahak, pandas]
comments: true
---

## 1. 코드로 옮기기

이전시간에 배운 원핫인코딩을 적용하여 코드를 작성해보자.

```python
import tensorflow as tf
import pandas as pd

path = "https://raw.githubusercontent.com/blackdew/tensorflow1/master/csv/iris.csv"
iris = pd.read_csv(path)
iris = pd.get_dummies(iris)

dependent = iris[['꽃잎길이', '꽃잎폭',	'꽃받침길이',	'꽃받침폭']]
independent = iris[['품종_setosa', '품종_versicolor', '품종_virginica']]

X = tf.keras.layers.Input(shape=[4])
Y = tf.keras.layers.Dense(3, activation='softmax')(X)
model = tf.keras.models.Model(X, Y)
model.compile(loss='categorical_crossentropy',
              metrics='accuracy')

model.fit(dependent, independent, epochs=1000)
```

**이전 레몬에이드, 집값 예측 코드와 크게 달라진 부분은 없지만 몇 가지 부분이 추가 되었다.**

* 원핫인코딩을 하는 `pd.get_dummies`라는 코드가 추가되었다.
* 종속변수가 **1개** 였지만, 원핫인코딩 과정을 통해서 **3개로** 늘어난 것을 코드에서 볼 수 있다.
* Dense에 추가된 `softmax`, comile부분에 추가된 `crossentropy`에 대해서는 나중에 다시 정리한다.
* compile에 추가된 `metrics='accuracy'`는 fit을 수행할 때, 사람이 보기 좋은 지표인 **정확도**(accuracy)를 출력해주는 옵션이다.

## Link

* [Youtube 봉수골 개발자 이선비](https://www.youtube.com/watch?v=dpw0wY13XDk&list=PLl1irxoYh2wyLwJutUZx5Q_QEEDZoXBnz&index=1)
