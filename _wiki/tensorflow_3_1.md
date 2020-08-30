---
layout  : wiki
title   : 코딩야학 Tensorflow 3일차(1)
summary : 보스턴 집값 예측, 워크 북을 이용한 동작원리 파악
date    : 2020-08-24 15:13:23 +0900
updated : 2020-08-24 18:47:24 +0900
tags    : [ml, tensorflow, python, yahak, pandas]
comments: true
toc     : true
---

## 1. 이전 수업내용을 토대로 보스턴 집값을 예측해보자

```python
import pandas as pd
import tensorflow as tf

path = '../csv/boston.csv'
boston = pd.read_csv(path)

dependent = boston[['crim', 'zn', 'indus', 'chas', 'nox', 'rm', 'age', 'dis', 'rad', 'tax', 'ptratio', 'b', 'lstat']]
independent = boston[['medv']]

X = tf.keras.layers.Input(shape=[13])
Y = tf.keras.layers.Dense(1)(X)
model = tf.keras.models.Model(X, Y)
model.compile(loss='mse')

model.fit(dependent, independent, epochs=1000, verbose=0)

# 훈련 데이터에 이용된 독립변수를 사용해 예측한다.
print("Predictions: ", model.predict(dependent[0:5]))

# 훈련 데이터의 종속변수 (결과값)
print(independent[:5])
```

## 2. 결과 확인
```
# 예측한 결과 값
29.51495
24.853735
30.591393
29.816202
29.228037

# 실제 보스턴 집값
24.0    
21.6
34.7
33.4
36.2

# 오차
-5.51495
-3.253735
4.108607
3.583798
6.971963
```

레몬에이드 처럼 근접하게 값을 예측하지는 못했지만, 학습을 통해서 결과 예측을 시도해보았다.

회귀를 통해서 100% 정답을 맞추는 것은 거의 불가능한 일이라고 한다. 

## 3. 모델의 수식 확인

```python
print(model.get_weights())
```

### get_weights를 이용한 가중치, 편향 확인

아래는 tensorflow가 학습데이터를 바탕으로 만들어낸 가중치와 편향 값이다.

```
[array([[-8.8557653e-02],
       [ 7.5129941e-02],
       [-5.4185625e-02],
       [ 3.3059478e+00],
       [ 1.1103268e+00],
       [ 4.1311884e+00],
       [ 1.4247766e-02],
       [-9.2980683e-01],
       [ 1.5135795e-01],
       [-9.0361387e-03],
       [ 2.1885931e-03],
       [ 1.5918961e-02],
       [-5.6748134e-01]], dtype=float32), array([2.4000535], dtype=float32)]
```

가중치와 편향을 이용에 아래와 같이 계산이 이뤄진다.

$
(\sum_{k=1}^N W_kX_k) + B
$

학습 데이터들을 가지고 이런 멋진 수식을 만들어 냈다.

## 4. 워크 북을 이용한 동작원리 파악

구글시트 [워크북](https://bit.ly/2DEBlPd)의 사본을 만들면 tensorflow가 가중치와 
편향을 계산해 나가는 과정을 이해 할 수 있다.

**loss 함수로는 MSE(Mean Squared Error: 평균 제곱 오차)를 사용한다.**

### 워크북 STEP

1. 임의의 W(Weight: 가중치)와 B(Bias: 편향)을 입력한다.
2. MSE를 이용해서 loss값을 구한다. (해당 방법에 대해서는 아래에서 다룬다.)
3. 해당 W, B, loss 값을 History에 남기고, loss값을 prev_loss에 옮겨둔다.
4. W값을 아주 작은 수치(dt)만큼 더 한다. MSE 다시 loss 값을 구한다.
5. (W-(loss - prev_loss)/dt)*dt 값이 다음 W값이 된다.
6. W에 다시 dt를 빼준다.
7. 이번엔 B에 dt를 더해 준다.
8. (B-(loss - prev_loss)/dt)*dt 값이 다음 B값이 된다.
9. `2~8`번의 과정을 반복한다.

### MSE란?

**평균 제곱 오차의 약어 이다.**

학습데이터를 바탕으로 아래의 연산을 수행한 뒤 평균을 구한것을 손실함수로 사용한다.

$
(\sum_{k=1}^M (independent_N - W_1X_1 + W_2X_2 ... W_NX_N + B)^2) / M
$

## Link

* [Youtube 봉수골 개발자 이선비](https://www.youtube.com/watch?v=dpw0wY13XDk&list=PLl1irxoYh2wyLwJutUZx5Q_QEEDZoXBnz&index=1)
* [워크북](https://bit.ly/2DEBlPd)
