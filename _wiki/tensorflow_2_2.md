---
layout  : wiki
title   : 코딩야학 Tensorflow 2일차(2)
summary : 레몬에이드 판매 예측
date    : 2020-08-19 17:27:12 +0900
updated : 2020-08-22 04:31:05 +0900
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

# 1. 데이터 준비
path = '../csv/lemonade.csv'
lemonade = pd.read_csv(path)

# 독렵, 종속 변수
independent = lemonade[['온도']]
dependent = lemonade[['판매량']]

# 2. 모델 구조 생성
X = tf.keras.layers.Input(shape=[1])          # 독립변수의 갯수와 shape을 일치 시킨다.
Y = tf.keras.layers.Dense(1)(X)               # 종속변수의 갯수와 일치 시킨다.
model = tf.keras.models.Model(X, Y)
model.compile(loss='mse')

# 3. 모델 학습
model.fit(independent, dependent, epochs=10)  # epochs는 학습을 시킬 횟수를 의미한다.

# 4. 모델 사용
print("Predictions: ", model.predict([[15]]))
```

## 3. 결과 확인

위의 경우의 결과값을 보면

```
Epoch 1/10
1/1 [==============================] - 0s 2ms/step - loss: 786.4815
Epoch 2/10
1/1 [==============================] - 0s 872us/step - loss: 782.3079
Epoch 3/10
1/1 [==============================] - 0s 1ms/step - loss: 779.2910
Epoch 4/10
1/1 [==============================] - 0s 939us/step - loss: 776.7711
Epoch 5/10
1/1 [==============================] - 0s 2ms/step - loss: 774.5389
Epoch 6/10
1/1 [==============================] - 0s 2ms/step - loss: 772.4971
Epoch 7/10
1/1 [==============================] - 0s 2ms/step - loss: 770.5913
Epoch 8/10
1/1 [==============================] - 0s 2ms/step - loss: 768.7881
Epoch 9/10
1/1 [==============================] - 0s 2ms/step - loss: 767.0649
Epoch 10/10
1/1 [==============================] - 0s 2ms/step - loss: 765.4055
Predictions:  [[11.634076]]
```

**loss**는 정확성을 나타내는 지표로 해당 값이 **0**에 가까울 수록 학습이 잘되었음을 의미한다.

10번을 학습시킨 결과로 온도가 `15도` 일때, 예측값이 `11.634076`이 나왔다.
이는 학습의 횟수가 너무 적어서 그렇다.

## 4. 개선 하기

10000번을 학습시켜보자.

```python
model.fit(independent, dependent, epochs=9990, verbose=0)
model.fit(independent, dependent, epochs=10)

print("Predictions: ", model.predict([[15]]))
```

fit 함수의 경우 매회 학습의 결과를 출력하는데, verbose=0을 인자로 주면 출력을 끌 수 있다.
맨마지막 10회의 결과값을 출력하고 다시 예측해보자.

```
Epoch 1/10
1/1 [==============================] - 0s 1ms/step - loss: 3.7136e-04
Epoch 2/10
1/1 [==============================] - 0s 1ms/step - loss: 3.7115e-04
Epoch 3/10
1/1 [==============================] - 0s 873us/step - loss: 3.7088e-04
Epoch 4/10
1/1 [==============================] - 0s 1ms/step - loss: 3.7058e-04
Epoch 5/10
1/1 [==============================] - 0s 1ms/step - loss: 3.7037e-04
Epoch 6/10
1/1 [==============================] - 0s 1ms/step - loss: 3.7021e-04
Epoch 7/10
1/1 [==============================] - 0s 2ms/step - loss: 3.7003e-04
Epoch 8/10
1/1 [==============================] - 0s 2ms/step - loss: 3.6980e-04
Epoch 9/10
1/1 [==============================] - 0s 3ms/step - loss: 3.6963e-04
Epoch 10/10
1/1 [==============================] - 0s 1ms/step - loss: 3.6947e-04
Predictions:  [[30.059605]]
```

꽤 쓸모있는 모델이 만들어졌다. !

## 5. 느낀점
뉴런 하나로 동작하는 간단한 모델이라고는 하지만, 고작 12줄의 코드로 뭔가를 만들어 낼 수 있다는게 신기하다.

~~열심히 공부하면 여기저기 써먹을 수도 있지않을까???~~


## Link

* [Youtube 봉수골 개발자 이선비](https://www.youtube.com/watch?v=dpw0wY13XDk&list=PLl1irxoYh2wyLwJutUZx5Q_QEEDZoXBnz&index=1)
