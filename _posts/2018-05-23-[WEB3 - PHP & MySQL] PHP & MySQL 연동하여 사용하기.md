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
<a href="#six">6. 관계형데이터베이스의 도입</a><br>
<a href="#seven">7. Table 표현하기</a><br>
<a href="#eight">8. 보안</a><br>

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

<div class="breaker"></div>
### 3.2. 여러 행 가져오기: 반복문 이용

* 사용 예시: while문 이용
{% highlight php %}
<?php
// connect
$conn = mysqli_connect(
  'localhost',
  'root',
  '111111',
  'opentutorials');

// 여러 행 가져오기 with 반복문
$sql = "SELECT * FROM topic";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_array($result)) {
  echo '<h2>'.$row['title'].'</h2>';
  echo $row['description'];
}
 ?>
{% endhighlight %}

---
<div id="four"></div>
## 4. Update

* 사용 예시: mysqli_query & UPDATE 문 이용
{% highlight php %}
<?php
// connect
$conn = mysqli_connect(
  'localhost',
  'root',
  '111111',
  'opentutorials');

// id 값은 반드시 정수
settype($_ POST['id'], 'integer');

// filtering
$filtered = array(
  'id'=>mysqli_real_escape_string($conn, $_ POST['id']),
  'title'=>mysqli_real_escape_string($conn, $_ POST['title']),
  'description'=>mysqli_real_escape_string($conn, $_ POST['description'])
);

// query
$sql = "
  UPDATE topic
    SET
      title = '{$filtered['title']}',
      description = '{$filtered['description']}'
    WHERE
      id = {$filtered['id']}
";
$result = mysqli_query($conn, $sql);

// sql 문 실행 결과 출력
if($result === false){
  echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
  error_log(mysqli_error($conn));
} else {
  echo '성공했습니다. <a href="index_mysql.php">돌아가기</a>';
}
?>
{% endhighlight %}

---
<div id="five"></div>
## 5. Delete

* 사용 예시: mysqli_query & DELETE 문 이용
{% highlight php %}
<?php
// connect
$conn = mysqli_connect(
  'localhost',
  'root',
  '111111',
  'opentutorials');

// id 값은 반드시 정수
settype($_ POST['id'], 'integer');

// filtering
$filtered = array(
  'id'=>mysqli_real_escape_string($conn, $_ POST['id'])
);

// query
$sql = "
  DELETE
    FROM topic
    WHERE id = {$filtered['id']}
";
$result = mysqli_query($conn, $sql);

// sql 문 실행 결과 출력
if($result === false){
  echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
  error_log(mysqli_error($conn));
} else {
  echo '성공적으로 삭제되었습니다. <a href="index_mysql.php">돌아가기</a>';
}
?>
{% endhighlight %}

---
<div id="six"></div>
## 6. 관계형데이터베이스의 도입

* 정보가 많아짐에 따라 하나의 테이블로 모든 정보를 표현하는 것이 어려워졌다. 이러한 문제점을 극복하기 위해서 여러 개의 테이블로 정보를 분산하고, 이들을 연결하는 관계형데이터베이스를 적용시킨다.

### 6.1. JOIN

* 사용 방법: <span class="evidence-purple">**SELECT select_expr FROM table_name LEFTorRIGHTorINNERorOUTER JOIN table_name2 ON condition;**</span>

<div class="breaker"></div>
### 6.2. JOIN - 읽기

* 사용 예시: 본문 아래쪽에 by author 표시. 'WEB' 페이지에서는 표시하지 않음
{% highlight php %}
<?php
...

// 기본값 설정
$article = array(
  'title'=>'Welcome',
  'description'=>'Hello, web'
);

$update_link = '';
$delete_link = '';
$author = '';

if(isset($_ GET['id'])) {
  $filtered_id = mysqli_real_escape_string($conn, $_ GET['id']);

  // author 표시하기 위해 JOIN
  $sql = "SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id WHERE topic.id={$filtered_id}";
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_array($result);
    $article['title'] = htmlspecialchars($row['title']);
    $article['description'] = htmlspecialchars($row['description']);
    $article['name'] = htmlspecialchars($row['name']);
}?>
...

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>WEB</title>
  </head>
  <body>
    <h1><a href="index_mysql.php">WEB</a></h1>
    <ol>
      <?=$list?>
    </ol>
    <a href="create_mysql.php">create</a>
    <?=$update_link?>
    <?=$delete_link?>
    <h2><?=$article['title']?></h2>
    <?=$article['description']?>
    <?=$author?>
  </body>
</html>
{% endhighlight %}

---
<div id="seven"></div>
## 7. Table 표현하기

### 7.1. Table 읽기

* **< table>**: table 표현 태그
* **< tr>**: table raw. table의 행  표현
* **< td>**: column
* 사용 예시
{% highlight php %}
<?php
$conn = mysqli_connect(
'localhost',
'root',
'111111',
'opentutorials');
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>WEB</title>
</head>
<body>
  <h1><a href="index.php">WEB</a></h1>
  <p><a href="index.php">topic</a></p>
  <table border="1">
    <tr>
      <td>id</td><td>name</td><td>profile</td>
      <?php
      $sql = "SELECT * FROM author";
      $result = mysqli_query($conn, $sql);
      while($row = mysqli_fetch_array($result)){
        $filtered = array(
          'id'=>htmlspecialchars($row['id']),
          'name'=>htmlspecialchars($row['name']),
          'profile'=>htmlspecialchars($row['profile'])
        );
        ?>
        <tr>
          <td><?=$filtered['id']?></td>
          <td><?=$filtered['name']?></td>
          <td><?=$filtered['profile']?></td>
        </tr>
        <?php
      }
      ?>
    </tr>
  </table>
</body>
</html>
{% endhighlight %}

<div class="breaker"></div>
### 7.2. Table 생성

* 사용 예시
{% highlight php%}
<?php
// connect
$conn = mysqli_connect(
'localhost',
'root',
'111111',
'opentutorials');

// filtering
$filtered = array(
  'name'=>mysqli_real_escape_string($conn, $_ POST['name']),
  'profile'=>mysqli_real_escape_string($conn, $_ POST['profile'])
);
// query
$sql = "
  INSERT INTO author
    (name, profile)
    VALUES(
        '{$filtered['name']}',
        '{$filtered['profile']}'
    )
";
$result = mysqli_query($conn, $sql);

// sql 문 실행 결과 출력
if($result === false){
  echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
  error_log(mysqli_error($conn));
} else {
  // 성공적으로 생성한 후에는 다시 author_mysql.php 페이지로 돌아감
  header('Location: author_mysql.php');
}
?>
{% endhighlight%}

---
<div id="eight"></div>
## 8. 보안

### 8.1. 입력 공격 차단(filtering)
: sql문을 문자열로 바꾸는 **mysqli_real_escape_string()** 을 이용

* 사용 예시
{% highlight php %}
// filtering
$filtered_id = mysqli_real_escape_string($conn, $_ GET['id']);
// 선택한 글의 본문 출력
$sql = "SELECT * FROM topic WHERE id={$filtered_id}";
{% endhighlight %}

<div class="breaker"></div>
### 8.2. SQL 주입(Injection)의 차단

* **--**: 주석. 주입 공격에서 앞에 '--'를 붙이는 것만으로 미리 작성해둔 SQL문을 모두 무력화시킬 수 있다.

<div class="breaker"></div>
### 8.3. SQL 츨력 공격(Cross Site Scripting)의 차단(escaping)

* 사용자가 악의적 목적으로 JavaScript 코드를 주입하는 것을 방지
* **htmlspecialchars() 이용**
