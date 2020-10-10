---
layout  : wiki
title   : Hello Scala
summary : Scala를 사용해보자!
date    : 2020-10-10 16:03:16 +0900
updated : 2020-10-10 17:18:31 +0900
tags    : [fp, scala]
comments: true
---

## 1. 학습 동기

함수형 패러다임에 대해서 관심이 있습니다. Scala를 이용한 프로그램을 JVM위에서 돌릴 수
있다는 소식을 알게 되어서 `Spring Boot`를 Scala로 돌려보고 싶어서 학습을 시작하게 되었습니다.

## 2. 개발 환경 구축

현재 Windows10과, WSL(Ubuntu 18.04)를 병행해서 사용하고 있습니다. 두 가지 환경에서 개발 환경을 구축해 봤습니다.

### 2.1 Windows10

Windows에서는 [chocolatey](https://chocolatey.org/)라는 패키지 매니저를 사용하고 있습니다.

Window PowerShell에서 아래의 명령어로 간단하게 설치 할 수 있습니다.
```powershell
$ choco install scala -y  # scala를 choco 원격저장소에서 다운로드 합니다.
$ refreshenv              # 환경변수를 새로고침 합니다.
```

### 2.2 WSL(Ubuntu 18.04)

`apt` 패키지 매니저를 사용합니다.


```zsh
sudo apt install scala
```

### 2.3 설치 확인

```shell
$ scala -version
```

## 3. Hello Scala

IDE를 사용하지 않고 스칼라 파일을 작성하고 실행해봅니다.

**Scala**는 `.scala`를 확장자로 사용합니다. `Hello.scala` 파일을 아래와 같이 작성합니다.

```scala
object Hello {
    def main(args: Array[String]) {
        println("Hello Scala")
    }
}
```

## 4. Run Scala

```shell
$ scalac Hello.scala        # Hello.scala 파일을 컴파일 합니다.
$ scala -classpath . Hello  # Hello.class 파일을 실행합니다.
```

## 5. Intelij에서 Scala 사용하기

### 5.1 Scala Plugin 설치하기

![ScalaConfigure](/post-img/scala_configure.png)

`Configure` > `Plugins` 를 선택합니다.

![ScalaPlugin](/post-img/scala_plugin.png)

`Scala`를 검색해서 설치하고, Intelij를 재시작 합니다.

### 5.2 sbt프로젝트 생성하기

`New Project`를 누르면 왼쪽 사이드바에 `Scala`가 추가 되있는것을 확인 할 수 있습니다.

`Scala` > `sbt`를 선택해서 새로운 프로젝트를 생성합니다.

저는 `DemoScala`라는 이름으로 프로젝트를 생성하였습니다.


## Link

* [Youtube - 데이터人싸](https://www.youtube.com/watch?v=W54qs5-y7qA&ab_channel=%EB%8D%B0%EC%9D%B4%ED%84%B0%E4%BA%BA%EC%8B%B8)
