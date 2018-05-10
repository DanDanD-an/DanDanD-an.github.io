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
description: Web2 - Python
---
### 목록
<a href="#one">1. DataType</a><br>
<a href="#two">2. Statement</a><br>
<a href="#three">3. List & Containers</a><br>
<a href="#four">4. Fuction</a><br>
<a href="#five">5. Module</a><br>
<a href="#six">6. 문법 외 요소들</a><br>

---
<div id="one"></div>
## 1. DataType

### 1.1. Number
: +, -, * , /, //, %, -x, +x, abs(x), int(x) 등을 이용해 처리
<div class="breaker"></div>
### 1.2. String

#### 1.2.1. 문자열의 표현
* 파이썬에서 문자열은 **'' 또는 ""를 이용해 표현** 한다.
* print("Hell'o' world")와 같이 ''와 ""를 같이 이용하여 문자열 안에 따옴표를 넣어줄 수 있다.<br>
* <span class="evidence-purple">**escape**</span>: ''와 ""를 문자로써 사용하고 싶다면 **\\** 를 이용한다. *ex) print("Hell'o' \"w\"orld")*<br>
* <span class="evidence-purple">**newline**</span>: **\n** 을 이용한다. *ex) print('H\ne\nl\nl\no')*<br>
* <span class="evidence-purple">**docstring**</span>: 문자열에서 docstring을 이용하면 **''''''** 안의 줄바꿈이나 공백 등을 그대로 반영할 수 있다.
{% highlight python %}
print('''
H
e
l
l
o
''')
{% endhighlight %}

#### 1.2.2. 문자열의 처리
* <span class="evidence-purple">**length(strName)**</span>: **len** *ex) len(a)*
* <span class="evidence-purple">**index**</span>: **strName[n]** *ex) a[0]*
* <span class="evidence-purple">**index-slice**</span>: **strName[n:m]** *ex) a[2:5]*
* <span class="evidence-purple">**repeat**</span>: **strName*n** *ex) print((a+'\n')*2)*

#### 1.2.3. 문자열과 변수(치환)
* 예시 코드
{% highlight python %}
name = 'apple'
age = '12'
print('to ' + name + '. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim apple veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '+name+' Duis aute irure dolor in '+age+' reprehenderit apple computer in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui '+name+' officia deserunt mollit anim id est laborum.')
{% endhighlight %}


#### 1.2.4. 포맷팅(Formatting)
* 이전에 사용했던 변수명을 재사용하여 값이 변경되는 것을 방지하기 위해, 또는 다른 형식의 파일로 저장할 때 호환성 문제를 방지하기 위해 **포맷팅** 을 수행한다.
* <span class="evidence-purple">**Positional Formatting**</span>: **'{} {}'.format('str1', 'str2')**
* <span class="evidence-purple">**Named placeholder**</span>: **'{var1} {var2}'.format(var1='str1', var2='str2')**
* 예시 코드
{% highlight python %}
#positional formatting
print('to {}. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim apple veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. {} Duis aute irure dolor in {} reprehenderit apple computer in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui {} officia deserunt mollit anim id est laborum.'.format('egoing', 12, 'egoing', 'egoing'))

#Named placeholder
#변수를 반드시 숫자 형식으로 표현하고 싶다면 age:d와 같이 뒤에 :d를 붙여준다
print('to {name}. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim apple veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. {age:d} Duis aute irure dolor in {name} reprehenderit apple computer in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui {name} officia deserunt mollit anim id est laborum.'.format(name='egoing', age=12))
{% endhighlight %}
* 참고 - <a href="https://pyformat.info/#number">pyformat</a>

<div class="breaker"></div>
### 1.3. Boolean
: True / False.  이 둘에는 다른 값을 설정할 수 없다.

#### 1.3.1. Comparison Operator
* ==, <, >
* Boolean 값 반환

#### 1.3.2. Membership Operator
* <span class="evidence-skyblue">**in**</span>: 어떠한 문자/문자열이 문자열 안에 있는지 확인하는 연산자. Boolean 값 반환. *ex) print('world' in 'Hello world') #True*
* cf) **os.path.exists()**: 어떠한 파일이 존재하는지 확인하는 메소드. Boolean 값 반환<br>
ex)
{% highlight python %}
import os.path
print(os.path.exists('boolean.py'))
{% endhighlight %}

---
<div id="two"></div>
## 2. Statement


---
<div id="three"></div>
## 3. List & Containers

---
<div id="four"></div>
## 4. Function

---
<div id="five"></div>
## 5. Module

---
<div id="six"></div>
## 6. 문법 외 요소

### 1. 주석
: #
