---
title: "[Web2 - Python] MaxOS에서 파이썬 이용하기"
layout: post
date: 2018-05-09 16:12
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

## 1. Python 설치 & 실행하기

### 1) <a href="https://www.python.org/" style="text-decoration:underline">Python 공식 홈페이지</a>에서 python 다운로드
* 생활코딩의 Web2 - Python에서는 python3을 이용해 수업을 진행하였다.

### 2) 터미널 실행

### 3-1) 터미널에서 직접 파이썬 이용하기
* 터미널에 <span class="evidence-purple">**python3**</span> 명령어를 이용하면 python을 실행할 수 있다. 이후 python 사용을 종료하려면 **exit()** 를 입력한다.<br>
{% highlight bash linenos %}
Python 3.6.5 (v3.6.5:f59c0932b4, Mar 28 2018, 03:03:55)
[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
3+4+5
12
12/3
4.0
exit()
{% endhighlight %}

### 3-2) py파일로 파이썬 이용하기: python3 명령어 이용
* py 파일을 생성한 후, 터미널에서 해당 폴더로 이동하여 <span class="evidence-purple">**python3 pyFileName**</span> 을 입력하면 파일 내 파이썬 코드들을 실행해 결과를 반환/출력해 준다.
* 소스코드
{% highlight python %}
a = 3+4+5
b = a/3
print(b)
{% endhighlight %}
<br>
![Markdown Image][2]

### 3-3) py파일로 파이썬 이용하기: 더욱 간단한 버전
* 더욱 간단하게 파이썬을 이용하는 명령어는 <span class="evidence-purple">**'./pyFileName.py'**</span>이다. 그러나 이를 그대로 실행하면 다음과 같이 권한 문제가 발생한다.<br>
{% highlight bash linenos %}
-bash: ./helloworld.py: Permission denied
{% endhighlight %}

 * 이를 해결하기 위해 터미널에서 <span class="evidence-purple">**sudo chmod a+x helloworld.py**</span> 를 입력하여 모든 사용자에게 실행권한을 부여한다.
 * 그리고 다시 위의 명령어를 실행하면 이번에는 아래와 같은 에러가 발생한다.<br>
{% highlight bash linenos %}
./helloworld.py: line 1: a: command not found
./helloworld.py: line 2: b: command not found
./helloworld.py: line 3: syntax error near unexpected token 'b'
./helloworld.py: line 3: 'print(b)'
  * 이러한 문제를 해결하기 위해서는 py 파일 맨 위에 <span class="evidence-purple">**#!/Library/Frameworks/Python.framework/Versions/3.6/bin/python3**</span>를 추가해주면 운영체제가 해당 위치의 python3를 이용하여 py파일을 실행한다. 그러나 이러한 방법은 이식성이 낮다는 문제점이 있다.<br>
  * 따라서 이식성을 높이기 위해 위의 코드 대신에 <span class="evidence-purple">**#!/usr/bin/env python3**</span>를 적어주면 env가 python3의 위치를 반환해주어 env와 python3가 설치되어 있는 모든 컴퓨터에서 해당 py파일을 실행할 수 있다.<br>
![Markdown Image][2]

  ---
## 2. Apache와 Python을 CGI로 연동하기

#### 1) /Applications/mampstack-7.1.16-0/apache2/conf/httpd.conf 파일에서 LoadModule cgid_module modules/mod_cgid.so를 활성화한다.(맨 앞의 # 지워주기)

#### 2) httpd.conf 파일에서 <Directory "/Applications/mampstack-7.1.16-0/apache2/htdocs"> 안에 아래 코드를 추가한다.
* 소스 코드
{% highlight html %}
<Files * .py>
      Options ExecCGI
      AddHandler cgi-script .py
</Files>
{% endhighlight %}

#### 3) 수정 사항을 반영하기 위해  서버 전원을 껐다가 다시 켠다.

#### 4) 에러 화면이 나오면 py파일의 맨 위에 아래와 같은 코드를 추가한다.
{% highlight html %}
print("content-type:text/html; charset=utf-8\n")
{% endhighlight %}

#### 5) 다시 웹페이지를 리로드하면 다음과 같이 py파일의 결과가 출력된다.<br>
  ![Markdown Image][6]<br>

---
[1]: /assets/images/스크린샷2018-05-09-1.jpg
[2]: /assets/images/스크린샷2018-05-31-7.jpg
