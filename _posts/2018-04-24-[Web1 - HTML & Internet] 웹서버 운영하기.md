---
title: "[Web1 - HTML & Internet] 웹서버 운영하기"
layout: post
date: 2018-04-24 16:40
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Web
- HTML
- Web1 - HTML & Internet
star: false
category: blog
categories: Web
author: Dan
description: Web1 - HTML & Internet
---

### 방법 1. 웹호스팅 사이트(github pages) 이용하기


1. Repository 생성
2. 이전에 만들어 둔 웹페이지 파일들 업로드 & 커밋
3. Settings > Github Pages > Source > master branch 선택 & Save
4. 이후 표시된 주소로 이동
5. 페이지가 생성된 것을 볼 수 있다!!

<br>

* *주소 클릭 시 404 error 페이지가 뜨는 경우*: REAME.md 파일의 이름을 readme.md 로 수정해주었더니 해결되었다!!

---
### 방법 2. 웹서버 직접 운영하기(Apache 이용)

#### 1. 웹서버 설치
* 맥에는 Apache가 기본적으로 설치되어 있다!! 하지만 Apache를 이용하지 못할 경우를 대비해 해당 강좌에서는 Bitnami 라는 프로그램을 추가적으로 설치, 이를 이용해 수업을 진행하였다.

  1) Bitnami MAMP Stack 프로그램 다운로드 & 설치<br>
    <a href = "https://bitnami.com/stack/mamp">https://bitnami.com/stack/mamp</a>

    2) Bitnami Manager 프로그램 실행<br>: 웹 서버 제어 프로그램<br>
    * Bitnami Manager 프로그램이 자동으로 실행되지 않을 경우: Bitnami를 설치한 디렉토리-*보통 Application/mampstack-... 아래에 있다*-에서 manager-osx 프로그램을 실행하면 된다

    3) Bitnami Manager 프로그램에서 'Go to Application' 버튼 클릭<br>

    4) 아래와 같은 창이 나온다면 웹서버를 성공적으로 설치 완료한 것이다.
    ![Markdowm Image][1]
    <figcaption class="caption">http://localhost:8080/</figcaption>

<br>5) 이제 Bitnami Manager 프로그램을 이용해 웹서버를 끄고 켤 수 있다<br>
{% highlight raw %}
Manager Servers > Apache Web Server 선택 > Start or Stop
{% endhighlight %}


<div class="breaker"></div>

#### 2. 웹서버와 HTTP


[1]: /assets/images/스크린샷2018-04-24오후5.16.14.jpg
