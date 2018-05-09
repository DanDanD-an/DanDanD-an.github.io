---
title: "[Web2 - Python] Python 문법 정리"
layout: post
date: 2018-05-09 17:14
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Web
- Python
- Web2 - Python
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: Web2 - Ajax
---
### 목록
<a href="#one">1. 초기페이지 구현</a><br>
<a href="#one-one">1.1. fragment identifier를 이용한 초기 페이지 기능 구현</a><br>
<a href="#one-two">1.2. fragment identifier 적용하기</a><br>
<a href="#two">2. 글목록 구현</a>

---
## 1. Datatype

### 1.1. Number
: +, -, * , /, //, %, -x, +x, abs(x), int(x) 등을 이용해 처리
<div class="breaker"></div>
### 1.2. String

#### 1.2.1. 문자열의 표현
* 파이썬에서 문자열은 '' 또는 ""를 이용해 표현한다.
* print("Hell'o' world")와 같이 ''와 ""를 같이 이용하여 문자열 안에 따옴표를 넣어줄 수 있다.
* **escape**: ''와 ""를 문자로써 사용하고 싶다면 **\** 를 이용한다. ex) print("Hell'o' \"w\"orld")
* **newline**: **\n** 을 이용한다. ex) print('H\ne\nl\nl\no')
* **docstring**: 문자열에서 docstring을 이용하면 **''''''** 안의 줄바꿈이나 공백 등을 그대로 반영할 수 있다.
{% highlight python %}
print('''
H
e
l
l
o
''')
{% endhighlight %}

---
## 문법 외 요소

### 1. 주석
: #
