---
layout  : wiki
title   : 코딩야학 Tensorflow 1일차
summary : 기계학습, 딥러닝의 정의
date    : 2020-08-16 15:44:01 +0900
updated : 2020-08-16 17:15:16 +0900
tags    : [ml, tensorflow, python, yahak]
comments: true
---


## 1. 기계 학습(Machine Learning)

**기계를 학습시켜서 인간의 판단 능력을 기계에게 위임하는 것**

1. 지도학습(supervised learning)
  * 분류(classification)
  * 회귀(regression)
2. 강화학습(reinforcement learning)
3. 비지도학습(unsupervised learning)
  * 군집화(clustering)
  * 변환(transform)
  * 연관(association)

해당 강의에서는 Tensorflow를 이용하여 `지도학습`의 `분류`, `회귀` 문제에 대해서 다룬다.

**회귀**: 숫자로 된 결과를 예측하는 것

**분류**: 카테고리 형태의 결과를 예측하는 것

분류와 회귀문제를 풀기 위한 방법을 **Machine Learning Algorithm**이라 한다.

### Machine Learning Algorithm
1. Decision Tree
2. Random Forest
3. KNN
4. SVM
5. Neural Network

해당 강의에서는 Neural Network를 이용해서 분류와 회귀 문제를 해결하는 방법에 대해서 다룬다.

## 2. Neural Network

**Neural Network는 사람의 두뇌를 모방해서 기계가 학습을 할 수 있도록 고안된 알고리즘이다.**

### Neural Network, Deep Learning

1. neural network는 neural들로 연결되어 있는 신경망을 인공적으로 만들었다고 해서 `인공신경망`으로도 불린다.
2. 인공신경망을 깊게 쌓아서 만들었다는 표현으로 Deep Learning이라고 하며, 오늘날 널리 사용되고 있다.

### Deep Learning Library

1. TensorFlow
2. PyTorch
3. Caffe2
4. theano

## 3. 지도학습의 빅피쳐

1. 과거의 데이터를 준비한다.
2. 모델의 구조를 만든다.
3. 데이터로 모델을 학습(FIT)한다.
4. 모델을 이용한다.

**위의 과정으로 레몬에이드를 판매하는 시나리오를 그려보면...**

------------------------------------------------------------

### 상황
1. 레몬이 부족하면, 에이드를 만들어서 판매할 수 있는 기회비용이 낯아진다.
2. 레몬이 판매량 보다 많이 준비될 경우, loss가 발생한다.

### 해결

1. `기온별 판매량` 데이터를 준비한다.

      | 온도 | 판매량 |
      |------|--------|
      | 20   | 40     |
      | 21   | 42     |
      | 22   | 44     |
      | 23   | 46     |

2. 해당 데이터를 이용해서, 독립변수가 1개, 종속변수가 1개인 모델의 구조를 만든다.
3. `기온별 판매량`데이터를 이용하여 데이터를 학습(FIT)시킨다. 해당 과정을 통해 `온도 * 2 = 판매량`이라는 **모델** 생성
4. 해당 **모델**을 이용해서, 일기예보를 통한 레몬양을 예측 할 수 있다.

## 용어 정리

1. `온도`는 `판매량`이라는 결과의 원인이 되는 데이터임으로, **독립변수**라고 한다.
2. `판매량`은 `온도`라는 데이터에 종속되어있는 데이터임으로, **종속변수**라고 한다.
3. 특정 유형의 패턴을 가진 데이터를 인식하도록 학습된 파일을 **모델**이라고 한다.
4. **모델**을 데이터에 딱 맞게 하는 과정(학습 하는 과정)을 **FIT**이라고 한다.

## Link
* [Youtube 봉수골 개발자 이선비](https://www.youtube.com/watch?v=dpw0wY13XDk&list=PLl1irxoYh2wyLwJutUZx5Q_QEEDZoXBnz&index=1)
