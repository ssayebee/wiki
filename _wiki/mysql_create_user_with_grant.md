---
layout  : wiki
title   : MySQL 사용자 생성 및 권한부여
summary : 사용자 생성 및 권한 부여
date    : 2020-08-12 17:52:59 +0900
updated : 2020-08-12 17:57:33 +0900
tags    : [db, mysql]
comments: true
toc     : true
---

## 1. 접속

**경로** *C:"Program Files"\MySQL"MySQL Server 8.0"\bin*

- mysql -u root -p // root 계정으로 password 입력
- mysql -u [username] -p // [username] 계정으로 password 입력

## 2. user 생성

~~~bash
create user '[userName]'@'[hostName]' identified by '[passwoard]';
~~~

## 3. 제대로 생성됬는지 확인하기

~~~sql
use mysql;
select user, host from user;
~~~

## 4. DataBase 생성

~~~sql
create database '[dbName]';

//제대로 생성됬는지 확인하기
show databases;
~~~

## 5. User 권한 부여

~~~sql
grant all privileges on '[dbName]'.* to '[userName]'@'[hostName]';
특정 [DBname]에만 권한 부여

grant all privileges on *.* to '[userName]'@'[hostName]';
모든 DB들에 대한 권한 부여

//제대로 적용됬는지 확인하기
show grants for '[userName]'@'[hostName]';
~~~
