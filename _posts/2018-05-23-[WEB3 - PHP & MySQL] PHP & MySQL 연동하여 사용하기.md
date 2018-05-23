---
title: "[WEB3 - PHP & MySQL] PHP & MySQL 연동하여 사용하기"
layout: post
date: 2018-05-23 14:45
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Database
- MySQL
- PHP
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: WEB3 - PHP & MySQL
---
### 목록
<a href="#one">1. Connect: mysqli_connect</a><br>
<a href="#two">2. INSERT</a><br>
<a href="#three">3. SELECT</a><br>
<a href="#four">4. Update</a><br>
<a href="#five">5. Delete</a><br>
<a href="#six">6. 테이블 분리 & JOIN: 중복의 제거</a><br>
<a href="#seven">7. Index</a><br>
<a href="#eight">8. 사용자 관리</a><br>

---
<div id="one"></div>
## 1. Connect: mysqli_connect

* PHP와 MySQL을 연동시키기 위해서는 **mysqli_connect** 를 이용해 MySQL server에 접속해야 한다.
* 사용 방법: <span class="evidence-purple">**mysqli_connect("localhost", "user_name", "password", "database");**</span>
{% highlight php %}
<?php
mysqli_connect("localhost", "root", "111111", "opentutorials");
?>
{% endhighlight %}

---
<div id="two"></div>
## 2. INSERT

* **mysqli_query** 를 이용해 mysql server에 sql문을 전송한다.
* sql문이 제대로 실행되면 true, 아니면 false를 리턴한다.
* 사용 방법: <span class="evidence-purple">**mysqli_query($mysqli, "sql");**<span>
* 사용 예시
{% highlight php %}
$conn = mysqli_connect("localhost", "root", "111111", "opentutorials");
mysqli_query($conn, "
    INSERT INTO topic (
        title,
        description,
        created
    ) VALUES (
        'MySQL',
        'MySQL is ....',
        NOW()
    )");
{% endhighlight %}

<div class="breaker"></div>
### 2.1. 디버그: mysqli_error

* **mysqli_error** 를 이용해 문제가 발생했을 경우 원인을 규명할 수 있다.
* 사용 방법: <span class="evidence-purple">**mysqli_error($mysqli);**</span>
* 사용 예시
{% highlight php %}
<?php
$conn = mysqli_connect("localhost", "root", "111111", "opentutorials");
$sql  = "
    INSER INTO topic (
        title,
        description,
        created
    ) VALUES (
        'MySQL',
        'MySQL is ....',
        NOW()
    )";
$result = mysqli_query($conn, $sql);
if($result === false){
    echo mysqli_error($conn);
}
?>
{% endhighlight %}

* 접속 과정에서의 error는 **mysqli_connect_error** 를 이용

---
<div id="three"></div>
## 3. SELECT

* **mysqli_query** 를 이용해 SQL select를 실행할 수 있다.
* 사용 방법: <span class="evidence-purple">**mysqli_query("SELECT select_expr FROM table_name");**<span>
* 사용 예시
{% highlight php %}
<?php
$conn = mysqli_connect(
  'localhost',
  'root',
  '111111',
  'opentutorials');
$sql = "SELECT * FROM topic";
$result = mysqli_query($conn, $sql);
var_dump($result->num_rows);
?>
{% endhighlight %}

<div class="breaker"></div>
### 3.1. 배열로 변환하기: mysqli_fetch_array

* **mysqli_fetch_array** 를 이용해 mysql 서버가 응답한 결과를 배열로 변환할 수 있다.
* 사용 방법: <span class="evidence-purple">**mysqli_fetch_array($result);**</span>
* 사용 예시: id = 19인 행의 데이터를 배열에 저장
{% highlight php %}
<?php
$conn = mysqli_connect(
  'localhost',
  'root',
  '111111',
  'opentutorials');
$sql = "SELECT * FROM topic WHERE id = 19";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result);
echo '<h1>'.$row['title'].'</h1>';
echo $row['description'];
?>
{% endhighlight %}
