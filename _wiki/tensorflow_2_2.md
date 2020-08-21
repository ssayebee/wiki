---
layout  : wiki
title   : 코딩야학 Tensorflow 2일차(2)
summary : 레몬에이드 판매 예측
date    : 2020-08-19 17:27:12 +0900
updated : 2020-08-22 00:21:21 +0900
tags    : [ml, tensorflow, python, yahak, pandas]
comments: true
---

## 1. 레몬에이드 판매를 예측해보자.

이전에 배웠던 지도학습의 과정을 다시보자.

1. 과거의 데이터를 준비한다.
2. 모델의 구조를 만든다.
3. 데이터로 모델을 학습(FIT)한다.
4. 모델을 이용한다.

## 2. 위의 과정을 python 코드로 작성해보자.


```python
import pandas as pd
import tensorflow as tf

path = '../csv/lemonade.csv'
lemonade = pd.read_csv(path)

independent = lemonade[['온도']]
dependent = lemonade[['판매량']]

X = tf.keras.layers.Input(shape=[1])
Y = tf.keras.layers.Dense(1)(X)

model = tf.keras.models.Model(X, Y)
model.compile(loss='mse')

model.fit(independent, dependent, epochs=1000)

print("Predictions: ", model.predict([[15]]))"
```

## Link

* [Youtube 봉수골 개발자 이선비](https://www.youtube.com/watch?v=dpw0wY13XDk&list=PLl1irxoYh2wyLwJutUZx5Q_QEEDZoXBnz&index=1)
