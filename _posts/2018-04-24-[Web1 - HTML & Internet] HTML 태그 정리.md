---
title: "[Web1 - HTML & Internet] HTML 태그 정리"
layout: post
date: 2018-04-24 15:52
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

### 1. < strong>: 강조 표시

Hypertext Markup Language (HTML) is the standard markup language for <strong>creating web pages</strong> and web applications.

* html 코드
{% highlight html %}
Hypertext Markup Language (HTML) is the standard markup language for <strong>creating web pages</strong> and web applications.
{% endhighlight %}
<br>
---
### 2. < u>: 밑줄

Hypertext Markup Language (HTML) is the standard markup language for creating <u>web pages</u> and web applications.

* html 코드
{% highlight html %}
Hypertext Markup Language (HTML) is the standard markup language for creating <u>web pages</u> and web applications.
{% endhighlight %}
<br>
---
### 3. < br>: 줄바꿈. 닫는 코드 없음!

Hypertext Markup Language (HTML) is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications. Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.<br><br>HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.

* html 코드
{% highlight html %}
Hypertext Markup Language (HTML) is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications. Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.<br><br>HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
{% endhighlight %}
<br>
---
### 4. < p>: paragraphs

<p>Hypertext Markup Language (HTML) is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications. Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p><p>HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. </p>

* html 코드
{% highlight html %}
<p>Hypertext Markup Language (HTML) is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications. Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p><p>HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. </p>
{% endhighlight %}

<div class="breaker"></div>

### 4-1. < p>태그에 CSS 이용해 단락 간 간격 조절하기

<p>Hypertext Markup Language (HTML) is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications. Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. </p>

* html 코드
{% highlight html %}
<p>Hypertext Markup Language (HTML) is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications. Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. </p>
{% endhighlight %}
<br>
---
### 5. < img>: 이미지 삽입. src 속성(이미지 주소)을 추가해야 함!

<img src="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/3135/7648.png">

* html 코드
{% highlight html %}
<img src="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/3135/7648.png">
{% endhighlight %}

<div class="breaker"></div>

### 5-1. 웹페이지 파일과 같은 위치에 있는 이미지 삽입: src 속성의 값으로 이름만 써주면 됨!

<img src="/assets/images/profile.jpg">

* html 코드
{% highlight html %}
<img src="/assets/images/profile.jpg">
{% endhighlight %}

<div class="breaker"></div>

### 5-2. width 속성: 이미지 사이즈 조절(숫자 or %)

<img src="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/3135/7648.png" width="50%">

* html 코드
{% highlight html %}
<img src="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/3135/7648.png" width="50%">
{% endhighlight %}
<br>
---
### 6. < li>: 리스트

<li>1. HTML</li>
<li>2. CSS</li>
<li>3. JavaScript</li>

* html 코드
{% highlight html %}
<li>1. HTML</li>
<li>2. CSS</li>
<li>3. JavaScript</li>
{% endhighlight %}

<div class="breaker"></div>

### 6-1. < ul>: undordered list

<ul>
<li>1. HTML</li>
<li>2. CSS</li>
<li>3. JavaScript</li>
</ul>

* html 코드
{% highlight html %}
<ul>
<li>1. HTML</li>
<li>2. CSS</li>
<li>3. JavaScript</li>
</ul>
{% endhighlight %}

<div class="breaker"></div>

### 6-2. < ol>: ordered list

<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>

* html 코드
{% highlight html %}
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>
{% endhighlight %}

<br>

---
### 7. < title>: 웹페이지 제목 설정
### 8. < body>: 본문
### 9. < head>: 본문 설명

* html 코드
{% highlight html %}
<!doctype html> // 웹페이지가 HTML로 만들어짐
<html>
<head>
  <title>WEB1 - html</title>
  <meta charset="utf-8"> // utf-8방식으로 작성됨
</head>
<body>
...
{% endhighlight %}

<br>
---
### 10. < a>: 링크

<a href="https://www.w3.org/TR/html5/" target="blank" title="html5 specification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.

* html 코드
{% highlight html %}
<a href="https://www.w3.org/TR/html5/" target="blank" title="html5 specification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.
{% endhighlight %}

* href: HyperText Reference의 약자

---
