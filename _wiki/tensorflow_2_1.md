---
layout  : wiki
title   : 코딩야학 Tensorflow 2일차(1)
summary : 지도학습을 위한 개발환경 구축 및 pandas의 기본 사용법
date    : 2020-08-19 15:16:52 +0900
updated : 2020-08-19 17:31:54 +0900
tags    : [ml, tensorflow, python, yahak, pandas]
comments: true
---

## 1. 개발환경 구축

해당 강의에서는 google의 **Colaborattory**라는 tool을 사용했지만, 보다 친숙한 **jupyter notebook**을 이용해서 진행하였음.

```zsh
$ mkdir notebook         			# 프로젝트 디렉토리 생성
$ cd notebook            			# 프로젝트 디렉토리로 이동

$ pipenv --python3.6     			# 해당 디렉토리를 pipenv를 이용해 python3.6의 가상환경으로 설정
$ pipenv shell           			# 가상 환경 실행 (virtualenv의 active와 동일)

# jupyterm pandas, tensorflow 설치
$ pipenv install jupyter pandas tensorflow

$ jupyter notebook       			# jupyter notebook 실행

$ mkdir csv 									# csv 파일 저장을 위한 디렉토리 생성
$ cd csv

# 강의에 사용되는 csv 파일 다운로드
$ csv_names=("lemonade.csv" "iris.csv" "boston.csv")
$ for name in $csv_names
	do
	curl -O https://raw.githubusercontent.com/blackdew/tensorflow1/master/csv/$name
	done
```

## 2. pandas 사용법

```python
import pandas as pd

# csv 파일 읽어오기
file_path = '../csv/lemonade.csv'
lemonade = pd.read_csv(file_path)

file_path = '../csv/boston.csv'
boston = pd.read_csv(file_path)

file_path = '../csv/iris.csv'
iris = pd.read_csv(file_path)

# data shape 확인
print(lemonade.shape)
print(boston.shape)
print(iris.shape)

# (6, 2)
# (506, 14)
# (150, 5)
```

```python
# column name 출력
print(lemonade.columns)
print(boston.columns)
print(iris.columns)

# Index(['온도', '판매량'], dtype='object')
# Index(['crim', 'zn', 'indus', 'chas', 'nox', 'rm', 'age', 'dis', 'rad', 'tax', 'ptratio', 'b', 'lstat', 'medv'], dtype='object')
# Index(['꽃잎길이', '꽃잎폭', '꽃받침길이', '꽃받침폭', '품종'], dtype='object')
```


```python
# 독린변수 종속 변수 분리
independent = lemonade[['온도']]
dependent = lemonade[['판매량']]

print(independent.shape, dependent.shape)

independent = boston[['crim', 'zn', 'indus', 'chas', 'nox', 'rm', 'age', 'dis', 'rad', 'tax', 'ptratio', 'b', 'lstat']]
dependent = boston[['medv']]

print(independent.shape, dependent.shape)

independent = iris[['꽃잎길이', '꽃잎폭', '꽃받침길이', '꽃받침폭']]
dependent = iris[['품종']]

print(independent.shape, dependent.shape)

# (6, 1) (6, 1)
# (506, 13) (506, 1)
# (150, 4) (150, 1)
```

## Link

* [Youtube 봉수골 개발자 이선비](https://www.youtube.com/watch?v=dpw0wY13XDk&list=PLl1irxoYh2wyLwJutUZx5Q_QEEDZoXBnz&index=1)
