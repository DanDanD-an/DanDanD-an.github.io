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
<a href="#four">4. Update</a><br>
<a href="#five">5. Delete</a><br>
<a href="#six">6. 테이블 분리 & JOIN: 중복의 제거</a><br>
<a href="#seven">7. Index</a><br>
<a href="#eight">8. 사용자 관리</a><br>

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

<div class="breaker"></div>
### 3.6. 특정 칼럼 기준으로 그룹핑
{% highlight sql %}
mysql> SELECT * FROM table_name GROUP BY col_name;
{% endhighlight %}

* 그룹핑 후 그 칼럼 기준으로 평균 또는 합계 등을 낼 수 있음
{% highlight sql %}
mysql> SELECT col_name, sum(col_name2), avg(col_name2) FROM table_name GROUP BY col_name;
{% endhighlight %}

---
<div id="four"></div>
## 4. Update: UPDATE

### 4.1. 특정 행 수정
{% highlight sql %}
mysql> UPDATE table_name SET assignment_list WHERE where_condition
{% endhighlight %}

* ex) ORACLE -> Oracle 로 수정<br>
![Markdown Image][12]

---
<div id="five"></div>
## 5. Delete: DELETE

### 5.1. 특정 행 삭제
{% highlight sql %}
mysql> DELETE FROM table_name WHERE where_condition
{% endhighlight %}

* ex) 마지막 행 삭제<br>
![Markdown Image][13]

---
<div id="six"></div>
## 6. 테이블 분리 & JOIN: 중복의 제거

### 6.1. 테이블 분리하기
* ex) author와 profile 중복 정리 위해 테이블 분리
{% highlight sql %}
--
-- Table structure for table `author`
--
CREATE TABLE `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `profile` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
)

--
-- Dumping data for table `author`
--
INSERT INTO `author` VALUES (1,'egoing','developer');
INSERT INTO `author` VALUES (2,'duru','database administrator');
INSERT INTO `author` VALUES (3,'taeho','data scientist, developer');

--
-- Table structure for table `topic`
--
CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
)

--
-- Dumping data for table `topic`
--
INSERT INTO `topic` VALUES (1,'MySQL','MySQL is...','2018-01-01 12:10:11',1);
INSERT INTO `topic` VALUES (2,'Oracle','Oracle is ...','2018-01-03 13:01:10',1);
INSERT INTO `topic` VALUES (3,'SQL Server','SQL Server is ...','2018-01-20 11:01:10',2);
INSERT INTO `topic` VALUES (4,'PostgreSQL','PostgreSQL is ...','2018-01-23 01:03:03',3);
INSERT INTO `topic` VALUES (5,'MongoDB','MongoDB is ...','2018-01-30 12:31:03',1);
{% endhighlight %}

* 결과 <br>
![Markdown Image][14]

<div class="breaker"></div>
### 6.2. JOIN
{% highlight sql %}
mysql> SELECT select_expr FROM table_name LEFTorRIGHTorINNERorOUTER JOIN table_name2 ON condition;
{% endhighlight %}

* ex) 위에서 분리한 테이블 2개 author_id 통해 결합<br>
![Markdown Image][15]
* topic.id: topic table의 id를 가리킴
* JOIN 후에 한 테이블의 값을 수정하면 다른 테이블에서도 해당 정보가 수정된다.

---
<div id="seven"></div>
## 7. Index

### 7.1. Primary Key
* 테이블 전체를 통틀어서 <span class="evidence">**중복되지 않는 값** 지정</span>
* **where** 문 이용해 조회할 때 가장 빨리 데이터를 가져올 수 있다
* 테이블마다 딱 하나의 primary key 가질 수 있음
{% highlight sql %}
...
PRIMARY KEY ('col_name')
...
SELECT * FROM table_name WHERE col_name;
{% endhighlight %}

<div class="breaker"></div>
### 7.2. Unique Key
* 테이블 전체를 통틀어서 <span class="evidence">**중복되지 않는 값** 지정</span>
* 빠르게 데이터 검색
* **여러 개 지정 가능**
{% highlight sql %}
...
UNIQUE KEY 'key_name' ('col_name') USING BTREE
...
SELECT * FROM table_name WHERE col_name=value;
{% endhighlight %}

<div class="breaker"></div>
### 7.3. Normal Key
* **중복 허용**
* primary, normal 보다 속도가 느림
* **여러 개 지정 가능**
{% highlight sql %}
...
KEY 'key_name' ('col_name')
...
SELECT * FROM table_name WHERE col_name=value;
{% endhighlight %}

<div class="breaker"></div>
### 7.4. FULL Text
* MySQL의 기본 설정(ft_min_word_len)이 4로 되어 있기 때문에 최소 4글자 입력하거나 이 값을 조정해야 함
* 한글 검색은 어려움
{% highlight sql %}
...
FULLTEXT KEY 'key_name' ('col_name')
...
SELECT col_name, MATCH(col_name) AGAINST('text') FROM table_name WHERE MATCH(col_name) AGAINST('text') ;
{% endhighlight %}

<div class="breaker"></div>
### 7.5. 중복 Key
* 하나의 키에 여러 개의 칼럼 포함
{% highlight sql %}
...
KEY 'key_name' ('col_name1', 'col_name2')
...
SELECT * FROM table_name WHERE col_name1=value1 AND col_name2=value2;
{% endhighlight %}

---
<div id="eight"></div>
## 8. 사용자 관리

### 8.1. 사용자 생성, 권한 부여: GRANT
* 접속하는 **사용자**, 사용자가 제어할 **대상**, 사용할 수 있는 **기능** 의 제한 가능
{% highlight sql %}
mysql> GRANT priv_type ON priv_level TO user_or_role;
{% endhighlight %}

* ex) ID가 dev, 비밀번호가 1234인 사용자가 class 데이터베이스만 접근 허용<br>
{% highlight sql %}
mysql> GRANT DELETE,INSERT,SELECT,UPDATE ON class.* TO 'dev'@'%' IDENTIFIED BY '1234';

{% endhighlight %}

<div class="breaker"></div>
### 8.2. 사용자 권한 열람: SHOW GRANT
{% highlight sql %}
mysql> SHOW GRANTS FOR user_or_role;
{% endhighlight %}

<div class="breaker"></div>
### 8.3. 사용자 권한 제거: REVOKE
{% highlight sql %}
mysql> REVOKE prev_type ON priv_level FROM user_or_role;
{% endhighlight %}

<div class="breaker"></div>
### 8.4. 사용자 삭제: DROP USER
{% highlight sql %}
mysql> DROP USER user_or_role;
{% endhighlight %}

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
[12]: /assets/images/스크린샷2018-05-21-1.jpg
[13]: /assets/images/스크린샷2018-05-21-2.jpg
[14]: /assets/images/스크린샷2018-05-21-3.jpg
[15]: /assets/images/스크린샷2018-05-21-4.jpg
