---
layout  : wiki
title   : 코딩야학 Tensorflow 4일차(1)
summary : 아이리스 품종 예측
date    : 2020-08-26 20:28:22 +0900
updated : 2020-08-30 17:29:24 +0900
tags    : [ml, tensorflow, python, yahak, pandas]
comments: true
toc     : true
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

## 2. 결과 확인

### 2.1 학습 결과 확인

1000번 학습 시킨 결과이다. **loss**값이 `0.1613`, **accuracy**가 `0.9800`으로 학습이 잘된 것 같다.

```
5/5 [==============================] - 0s 2ms/step - loss: 0.1629 - accuracy: 0.9800
Epoch 991/1000
5/5 [==============================] - 0s 2ms/step - loss: 0.1631 - accuracy: 0.9800
Epoch 992/1000
5/5 [==============================] - 0s 2ms/step - loss: 0.1629 - accuracy: 0.9800
Epoch 993/1000
5/5 [==============================] - 0s 2ms/step - loss: 0.1625 - accuracy: 0.9800
Epoch 994/1000
5/5 [==============================] - 0s 2ms/step - loss: 0.1621 - accuracy: 0.9800
Epoch 995/1000
5/5 [==============================] - 0s 2ms/step - loss: 0.1622 - accuracy: 0.9800
Epoch 996/1000
5/5 [==============================] - 0s 2ms/step - loss: 0.1621 - accuracy: 0.9800
Epoch 997/1000
5/5 [==============================] - 0s 1ms/step - loss: 0.1619 - accuracy: 0.9800
Epoch 998/1000
5/5 [==============================] - 0s 2ms/step - loss: 0.1616 - accuracy: 0.9800
Epoch 999/1000
5/5 [==============================] - 0s 2ms/step - loss: 0.1619 - accuracy: 0.9800
Epoch 1000/1000
5/5 [==============================] - 0s 2ms/step - loss: 0.1613 - accuracy: 0.9800
```

### 2.2 예측 결과 확인

독립변수를 이용해서 얼마나 예측을 잘하는지 실행해 보자.

```python
print(model.predict(dependent[0:5]))
print(independent[0:5])
```

```
array([[9.9907386e-01, 9.2596951e-04, 8.9248459e-08],
       [9.9502903e-01, 4.9698786e-03, 1.0555383e-06],
       [9.9821305e-01, 1.7866686e-03, 3.1786809e-07],
       [9.9553680e-01, 4.4619455e-03, 1.3489342e-06],
       [9.9935681e-01, 6.4307783e-04, 6.1289278e-08]], dtype=float32)

   품종_setosa  품종_versicolor  품종_virginica
0          1              0             0
1          1              0             0
2          1              0             0
3          1              0             0
4          1              0             0
```

출력 결과가 부동소수점 실수 표기법으로 `9.9907386e-01`가 출력되서 당황할 수 있지만, 생각보다 어렵지 않다.

**파이썬**에서 실수를 `유효숫자e지수` 방법으로 표현한다.

$$유효숫자e지수 = 유효숫자 \times 10^{지수} $$

따라서 `9.9907386e-01`는 $9.9907386 \times 10^{-1}$로 `0.99907386`으로 읽을 수 있다.

5개 모두 99% 정답을 setosa라고 잘 예측한것을 볼 수 있다.

### 2.3 weights와 bias 확인

```python
print(model.get_weights())
```

**weights**와 **bias**를 확인해보자!

```
[array([[ 0.7652065 ,  0.9651051 , -0.08326522],
        [ 3.230205  , -0.21848603, -1.3792841 ],
        [-3.548093  , -0.5829089 ,  0.96351486],
        [-3.6489978 , -1.2600076 ,  1.7164605 ]], dtype=float32),
 array([ 1.7828934,  1.2210305, -1.3769467], dtype=float32)]
```

**대략 12줄의 코드와 데이터만 가지고 이렇게 멋진 수식을 만들어 냈다.**

## Link

* [Youtube 봉수골 개발자 이선비](https://www.youtube.com/watch?v=dpw0wY13XDk&list=PLl1irxoYh2wyLwJutUZx5Q_QEEDZoXBnz&index=1)
