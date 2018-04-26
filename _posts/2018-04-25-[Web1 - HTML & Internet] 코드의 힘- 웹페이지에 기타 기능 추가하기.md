---
title: "[Web1 - HTML & Internet] 코드의 힘-웹페이지에 기타 기능 추가하기"
layout: post
date: 2018-04-26 14:52
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Web
- HTML
- Web1 - HTML & Internet
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: Web1 - HTML & Internet
---

### 1. 동영상 삽입하기: < ifame> 태그 이용

<p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/jSJM9iOiQ1g" frameborder="0" allowfullscreen></iframe>
</p>

* html 코드
{% highlight raw %}
<p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/jSJM9iOiQ1g" frameborder="0" allowfullscreen></iframe>
</p>
{% endhighlight %}

* youtube 동영상의 경우, **공유 > 소스코드** 탭에 표시되는 html 코드를 사용하면 된다!

---
### 2. 댓글 기능 추가하기: <a href="https://disqus.com/" target="blank" title="html5 specification"><u>Disqus</u></a> 이용

#### 1) Disqus 로그인 > admin
#### 2) 웹 사이트 생성 > Shortname 등 지정 > Create Site 클릭
![Markdowm Image][1]

#### 3) 플랫폼 선택 창에서 Universal Code 버튼 클릭
![Markdowm Image][2]

#### 4) 1번 코드를 복사해 웹페이지 하단에 붙여 넣기
![Markdowm Image][3]

---
### 3. 채팅 기능 추가하기: <a href="https://www.tawk.to/" target="blank" title="html5 specification"><u>tawk</u></a> 이용

: tawk를 이용하면 웹사이트 방문자와 실시간으로 채팅을 할 수 있다!

#### 1) tawk 로그인 > dashboard
#### 2) Admin 탭 클릭
#### 3) 추가 > 사이트 이름, url 등 입력 > 만들기
![Markdowm Image][4]

#### 4) ASSET - Wiget Code 복사 > 웹페이지 하단에 붙여 넣기
![Markdowm Image][5]

---
### 4. 웹사이트 방문자 분석하기: <a href="https://analytics.google.com" target="blank" title="html5 specification"><u>Google analytics</u></a> 사용
: 방문자 수, 방문자 유입 경로, 방문자 이동 경로, 방문자 환경 등의 정보 제공<br>

#### 1) Google analytics 로그인
#### 2) Sign up > 웹사이트 > 계정 이름, 사이트 이름, url 등을 입력
![Markdowm Image][6]

#### 3) 추적 ID 가져오기 > 대한민국 선택 후 동의
#### 4) 추적 코드 > 범용 사이트 태그(gtag.js) 복사
![Markdowm Image][7]

#### 5) 모든 웹페이지의 < head> tag 안쪽에 붙여 넣기
#### 6) 실시간 > 개요 탭에서 현재 웹사이트 방문자 수가 표시된다.
![Markdowm Image][8]

#### 7) 이외의 다양한 방문자 정보는 잠재고객 탭에서 확인 가능하다.



---
[1]: /assets/images/스크린샷3.jpg
[2]: /assets/images/스크린샷2.jpg
[3]: /assets/images/스크린샷4.jpg
[4]: /assets/images/스크린샷5.jpg
[5]: /assets/images/스크린샷6.jpg
[6]: /assets/images/스크린샷7.jpg
[7]: /assets/images/스크린샷8.jpg
[8]: /assets/images/스크린샷9.jpg
