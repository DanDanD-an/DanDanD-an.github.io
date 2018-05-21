---
title: "[Web3 - Ajax] fetch API"
layout: post
date: 2018-05-04 16:37
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Web
- JavaScript
- Ajax
- Webn
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: Web2 - Ajax
---

### 1. fetch API 기본 사용법
{% highlight html %}
<!doctype html>
<html>
  <body>
    <input type="button" value="fetch" onclick="
      fetch('html').then(function(response){
        response.text().then(function(text){
          alert(text);
        })
      })
    ">
  </body>
</html>
{% endhighlight %}

* 위 코드를 실행, 만들어진 버튼을 클릭하면 'html' 파일의 내용이 경고창에 표시된다.
* 위 코드에서 'text'에는 서버에서 응답한 내용이 저장된다.

---
### 2. fetch API의 요청과 응답
* 소스 코드1
{% highlight html %}
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <article>

    </article>
    <input type="button" value="fetch" onclick="
      function callbackme()
      {
          console.log('respnse end');
      }
      fetch('3.html').then(callbackme);
    ">
  </body>
</html>
{% endhighlight %}

* 클라이언트가 fetch('javascript')를 실행시키면, 웹브라우저에게 'javascript'라는 파일을 응답해달라고 요청한 것.
* then: 서버가 응답할 때까지 다른 일을 수행할 수 있도록 함.
* 응답이 끝난 후 메소드 callbackme를 실행
* 결과
![Markdown Image][1]

<div class="breaker"></div>

* 소스 코드2
{% highlight html %}
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <article>

    </article>
    <input type="button" value="fetch" onclick="
      function callbackme()
      {
          console.log('respnse end');
      }
      fetch('3.html').then(callbackme);
      console.log(1);
      console.log(2);
    ">
  </body>
</html>
{% endhighlight %}

* 결과
![Markdown Image][2]
서버가 응답하는 동안 콘솔에 1, 2를 출력한다. 서버가 응답을 마치면 callbackme 메소드를 실행해 콘솔에 'response end'를 출력한다.

* 동기적 실행: callbackme가 실행되는 동안 console.log(1)과 console.log(2)가 실행<br>
cf) 비동기적 실행: callbackme가 실행되는 동안 console.log(1)과 console.log(2)가 실행되지 않음. 병렬적으로 실행.

---
### 3. fetch API - response 객체

* **response 객체의 status** 에는 서버와의 통신 상태를 파악할 수 있는 정보가 들어있다.

* 소스 코드
{% highlight html %}
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <article>

    </article>
    <input type="button" value="fetch" onclick="
    //Asynchronous
      fetch('3.html').then(function(response){
        console.log(response);
      });
      console.log(1);
      console.log(2);
    ">
  </body>
</html>
{% endhighlight %}

* 결과
![Markdown Image][3]
파일을 성공적으로 찾았다는 의미에서 response 객체의 status 값 200을 반환<br>

* 파일을 발견하지 못했다면, 200 대신 404를 반환한다.


---
[1]: /assets/images/스크린샷2018-05-04-1.jpg
[2]: /assets/images/스크린샷2018-05-04-2.jpg
[3]: /assets/images/스크린샷2018-05-08-1.jpg
