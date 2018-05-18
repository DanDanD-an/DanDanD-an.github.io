---
title: "[DATABASE2 - MySQL] SQL"
layout: post
date: 2018-05-18 15:22
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Database
- SQL
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
<a href="#one">1. Table</a><br>
<a href="#two">2. Create</a><br>
<a href="#three">3. Read</a><br>

---
* **SQL** = Structured Query Language

<div id="one"></div>
## 1. Table

### 1.1. SQL과 Table 구조
* 표(table)은 **row**(행, record)와 **column**(열)로 구성된다.
* row는 하나의 데이터를 가리킨다.
* column은 데이터의 구조, 특징 등을 가리킨다.
![Markdown Image][1]

<div class="breaker"></div>
### 1.2. Table 생성하기
{% highlight raw %}
mysql> CREATE TABLE tbl(
                c1 datatype(length) NULL or NOT NULL ...,
                c2 datatype(length) NULL or NOT NULL ...,
                ...
                PRIMARY KEY(c1));
{% endhighlight %}

* **NULL or NOT NULL**: <span class="evidence">꼭 필요한 값이면 NOT NULL, 그렇지 않다면 NULL을 입력</span>
* **PRIMARY KEY()**: <span class="evidence">성능 향상과 중복 방지를 위해 **메인 키 설정**</span>

* ex)<br>
![Markdown Image][2]
* **AUTO_INCREMENT**: 자동으로 값이 1씩 증가

<div class="breaker"></div>
### 1.3. Table 확인하기

#### 1.3.1. SHOW: 전체 table 확인
{% highlight raw %}
mysql> SHOW TABLES;
{% endhighlight %}

* ex)<br>
![Markdown Image][3]

#### 1.3.2. DESC: 특정 table 구조 확인
{% highlight raw %}
mysql> DESC table_name;
{% endhighlight %}

* ex)<br>
![Markdown Image][4]

---
<div id="two"></div>
## 2. Create: INSERT

### 2.1. INSERT INTO
{% highlight sql %}
mysql> INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
{% endhighlight %}

* ex)<br>
![Markdown Image][5]
* **NOW()**: 현재 시간 입력 함수

<div class="breaker"></div>
### 2.2. 생성한 raw 확인하기
{% highlight sql %}
mysql> SELECT * FROM table_name;
{% endhighlight %}

* ex)<br>
![Markdown Image][6]

---
<div id="three"></div>
## 3. Read: SELECT

### 3.1. 모든 행 출력
{% highlight sql %}
mysql> SELECT * FROM table_name;
{% endhighlight %}

* ex)<br>
![Markdown Image][7]

<div class="breaker"></div>
### 3.2. 특정 행 출력
{% highlight sql %}
mysql> SELECT select_expr  FROM table_name;
{% endhighlight %}

* ex)<br>
![Markdown Image][8]

<div class="breaker"></div>
### 3.3. 특정 값 가진 행만 출력
{% highlight sql %}
mysql> SELECT select_expr FROM table_name WHERE where_condition;
{% endhighlight %}

* ex) author가 'Dan'인 데이터만 출력<br>
![Markdown Image][9]

<div class="breaker"></div>
### 3.4. 정렬하여 출력
{% highlight sql %}
mysql> SELECT select_expr ORDER BY {col_name | expr | position};
{% endhighlight %}

* ex) id값 내림차순 정렬<br>
![Markdown Image][10]

<div class="breaker"></div>
### 3.5. 특정 개수 데이터만 출력
{% highlight sql %}
mysql> SELECT select_expr LIMIT n;
{% endhighlight %}

* ex) 조건 만족하는 데이터 2개 출력<br>
![Markdown Image][11]


---
[1]: /assets/images/스크린샷2018-05-18-4.jpg
[2]: /assets/images/스크린샷2018-05-18-5.jpg
[3]: /assets/images/스크린샷2018-05-18-6.jpg
[4]: /assets/images/스크린샷2018-05-18-7.jpg
[5]: /assets/images/스크린샷2018-05-18-8.jpg
[6]: /assets/images/스크린샷2018-05-18-9.jpg
[7]: /assets/images/스크린샷2018-05-18-10.jpg
[8]: /assets/images/스크린샷2018-05-18-11.jpg
[9]: /assets/images/스크린샷2018-05-18-12.jpg
[10]: /assets/images/스크린샷2018-05-18-13.jpg
[11]: /assets/images/스크린샷2018-05-18-14.jpg
