---
title: "[Web2 - Python] Python 문법 정리"
layout: post
date: 2018-05-09 17:14
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Web
- Python
- Webn
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: Web2 - Python
---
### 목록
<a href="#one">1. DataType</a><br>
<a href="#two">2. Operator</a><br>
<a href="#three">3. Statement</a><br>
<a href="#four">4. Function</a><br>
<a href="#five">5. Module</a><br>
<a href="#six">6. 기타</a><br>

---
<div id="one"></div>
## 1. DataType

### 1.1. Number
: +, -, * , /, //, %, -x, +x, abs(x), int(x) 등 산술연산자를 이용해 처리
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

<div class="breaker"></div>
### 1.4. List
* 리스트는 순서가 있다!(Sequence Type)
* 리스트를 만드는 방법: listName = [val1, val2, val3] *ex) s = [1, 'four', 9, 16, 25]*
* 리스트의 **인덱스**: 인덱스를 이용해 리스트의 element를 호출할 수 있다. *ex) s[1]*
* 리스트의 길이: <span class="evidence-purple">**len(listName)**</span>
* 리스트의 element 지우기: <span class="evidence-purple">**del listName[n]**</span> *ex) del s[2] => 결과: s = [1, 'four', 16, 25]*
* 리스트 끝에 element 추가하기: <span class="evidence-purple">**listName.append(val)**</span> *ex) s.append('1')*

<div class="breaker"></div>
### 1.5. Dict
* Mapping types
* 값을 이름으로 호출할 수 있음.
* 선언 방법: <span class="evidence-purple">**dictName = {'key1': 'val1', 'key2': 'val2'}**</span> *ex) a = {'name': 'Dan', 'address': 'Seoul'}*
* 이름으로 호출하기: <span class="evidence-purple">**dictName['key']**</span> *ex) a['name']*

---
<div id="two"></div>
## 2. Operator

### 2.1. Arithmetic Operator
: +, -, * , /, //, %, -x, +x, abs(x), int(x) 등

<div class="breaker"></div>
### 2.2. Comparison Operator
* ==, <, >
* Boolean 값 반환

<div class="breaker"></div>
### 2.3. Membership Operator
* <span class="evidence-purple">**in**</span>: 어떠한 문자/문자열이 문자열 안에 있는지 확인하는 연산자. Boolean 값 반환.
* cf) **os.path.exists()**: 어떠한 파일이 존재하는지 확인하는 메소드. Boolean 값 반환<br>
ex)
{% highlight python %}
import os.path
print(os.path.exists('boolean.py'))
{% endhighlight %}

<div class="breaker"></div>
### 2.4. Logical Operator
: and, or, not

### 2.5. Sequence Operator
* **+**: 문자열 또는 리스트 등 연결 *ex) "a"+"b" -> 'ab', ['a']+['b'] -> ['a', 'b']*
* **len**: 길이
* **capitalize()**: 앞글자 대문자로 변환. str에서만. *ex) 'dan'.capitalize() -> 'Dan'*

---
<div id="three"></div>
## 3. Statement

### 3.1. Conditional Statement
: if ~ else ~, **if ~ elif ~ else ~**. 중첩 가능

* 예시 코드
{% highlight python %}
user_id = input('id?')
user_pwd = input('password?')

if user_id == 'egoing':
    if user_pwd == '111111':
        print('Hello master')
    else:
        print('Who are you?')
else:
    print('Who are you?')
{% endhighlight %}

### 3.2. Loop
* 반복문 선언 방법1: <span class="evidence-purple">**for target_list in expression_list" :**</span>
* ex1)
{% highlight raw %}
for value in ['a', 'b', 'c']:
  print(value)
{% endhighlight %}
* 반복문 선언 방법2: <span class="evidence-purple">**for i in range(n):**</span>
* ex2)
{% highlight raw %}
for value in range(10):
  print(value)
{% endhighlight %}

---
<div id="four"></div>
## 4. Function
* 함수 선언 방법: <span class="evidence-purple">**def func_name(parameter):**</span>
* 함수 호출 방법: <span class="evidence-purple">**func_name(argument)**</span>

---
<div id="five"></div>
## 5. Module
* 서로 연관된 변수와 함수 그리고 객체를 정리 정돈하는 도구
* 새로운 py 파일로 서로 연관된 변수나 함수 등을 묶고, 그 파일을 import해서 사용
<br>
* 모듈 가져오기1: <span class="evidence-purple">**import module_name**</span>
* 모듈 안 함수 이용하기1: <span class="evidence-purple">**module_name.func_name()**</span>
<br>
* 모듈 가져오기2: <span class="evidence-purple">**from module_name import func_name**</span>
* 모듈 안 함수 이용하기2: <span class="evidence-purple">**func_name()**</span> - 앞에 모듈 이름을 붙이지 않아도 된다.

---
<div id="six"></div>
## 6. 기타

### 6.1. 주석
: #

### 6.2. 들여쓰기
: 파이썬은 같은 블록 요소를 들여쓰기로 구분하기 때문에, 들여쓰기를 할 때는 똑같은 형식(탭 또는 스페이스)을 이용해야 한다.

### 6.3. 파일 읽기
* <span class="evidence-purple">**f = open('workfile', 'w')**</span>
* 파일을 작성/수정할 때는 'w', 파일을 읽기 전용으로 열 때는 'r', appending 할때는 'a'

### 6.4. form
* 사용자의 정보를 서버로 전송하는 장치. 사용자로부터 정보를 전달받는 양식

### 6.5. package & Pypi
* **package**: 우리가 만드는 소프트웨어에 부품으로 사용되는 작은 소프트웨어.
* **Pypi**: 파이썬 이용자들이 이용할 수 있는 package 목록
* pypi 설치방법: <span class="evidence-purple">**pip3 install program_name()**</span>

---
