---
title: "[DATABASE2 - MySQL] MySQL 설치 및 이용하기"
layout: post
date: 2018-05-18 14:29
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Database
- MySQL
- DATABASE2 - MySQL
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: DATABASE2 - MySQL
---
### 목록
<a href="#one">1. MySQL 설치하기</a><br>
<a href="#two">2. MySQL 이용하기</a><br>

---
<div id="one"></div>
## 1. MySQL 설치하기

### 1) MySQL Community Server 다운로드
* https://dev.mysql.com/downloads/mysql/ ← 이곳에서 다운로드

### 2) 다운로드 중 비밀번호 설정 > 다운로드 완료
* 비밀번호 설정 창이 뜨지 않는다면 terminal에서 아래와 같은 코드 입력 후 비밀번호 설정
{% highlight raw %}
mysql> SET PASSWORD = PASSWORD('your_password');
{% endhighlight %}

---
<div id="two"></div>
## 2. MySQL 이용하기

### 2.1. MySQL 서버 접속

#### 1) terminal(or iTerm) 에서 /usr/local/mysql/bin/ 으로 이동
{% highlight raw %}
cd /usr/local/mysql/bin/
{% endhighlight %}

#### 2) MySQL 실행시켜 root 사용자(=관리자)로 접속 > 비밀번호 입력
{% highlight raw %}
./mysql -uroot -p
{% endhighlight %}

#### 3) 아래와 같은 화면이 뜬다면 MySQL 서버가 성공적으로 실행되고 있는 것이다.
<br>
![Markdown Image][1]

<div class="breaker"></div>
### 2.2. MySQL 스키마 사용

#### 1) Database 생성
{% highlight raw %}
mysql> CREATE DATABASE database_name;
{% endhighlight %}
* 아래와 같은 메세지가 뜬다면 database 생성이 완료된 것
![Markdown Image][2]

#### 2) Database 생성 확인
{% highlight raw %}
mysql> SHOW DATABASES;
{% endhighlight %}
* 결과
![Markdown Image][3]

#### 3) 생성한 database를 mysql에 전달
{% highlight raw %}
mysql> USE database_name;
{% endhighlight %}

<div class="breaker"></div>
### 2.3. MySQL 클라이언트 사용: MySQL Workbench
* GUI 기반

#### 1) MySQL Workbench 다운로드
* https://dev.mysql.com/downloads/workbench/ ← 이곳에서 다운로드

#### 2) 다운로드 완료 후 MySQL Workbench 실행

#### 3) 첫 화면에서 '+' 버튼 클릭 > connection name 등 설정
![Markdown Image][4]

#### 4) Test Connection > 'Successfully Connected'
![Markdown Image][5]

#### 5) 만들어진 서버로 들어가 schema 생성

#### 6) schema 변경 후 table 추가 > 필요한 정보 입력
![Markdown Image][6]

#### 7) SQL script review
![Markdown Image][7]

#### 8) 생성한 table을 클릭해 값 입력
![Markdown Image][8]

---
[1]: /assets/images/스크린샷2018-05-18-1.jpg
[2]: /assets/images/스크린샷2018-05-18-2.jpg
[3]: /assets/images/스크린샷2018-05-18-3.jpg
[4]: /assets/images/스크린샷2018-05-21-5.jpg
[5]: /assets/images/스크린샷2018-05-21-6.jpg
[6]: /assets/images/스크린샷2018-05-21-8.jpg
[7]: /assets/images/스크린샷2018-05-21-9.jpg
[8]: /assets/images/스크린샷2018-05-21-10.jpg
