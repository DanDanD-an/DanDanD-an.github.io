---
title: "[모던 자바스크립트 개발을 위한 ES6] Ch4) Destructuring"
layout: post
date: 2018-06-19 13:28
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Web
- JavaScript
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: 모던 자바스크립트 개발을 위한 ES6
---

## 목록
1. <a href="#one">Destructuring Array</a><br>
2. <a href="#two">Destructuring Object</a><br>
3. <a href="#three">Destructuring의 활용_JSON 파싱</a><br>
4. <a href="#four">Destructuring의 활용_Event 객체 전달</a><br>


---
<br>
<div id="one"></div>
# 1. Destructuring Array
<div class="underlined"></div>

### Destructuring 이란?
: <span class="evidence-yellow">**비구조화 할당**(Destructuring Assignment)</span> 구문은 배열의 값이나 객체의 속성을 별개의 변수로 추출할 수 있게 하는 자바스크립트 식이다. -*출처: MDN*-

* 예시 코드
{% highlight javascript %}
let data = ["crong", "aaa", "bbb", "ccc"];
let [j, , k] = data;
console.log(j, k); // crong bbb
{% endhighlight %}

<br>
<div id="two"></div>
# 2. Destructuring Object
<div class="underlined"></div>

* 예시 코드
{% highlight html %}
let obj = {
  name: "Dan",
  address: "Korea",
  age: 24
}

let {name: myName, age: myAge} = obj;
console.log(myName, myAge); // Dan 24
{% endhighlight %}

<br>
<div id="three"></div>
# 3. Destructuring의 활용_JSON 파싱
<div class="underlined"></div>

* 예시 코드
{% highlight javascript %}
var news = [
  {
    "title": "sbs",
    "imgurl": "http://static.naver.net/newsstand/2017/0313/article...1",
    "newslist": [
      "[가보니]가상 경주도 즐기고, 내 손으로 자동차도 만들고",
      "'리캡차'가 사라진다"
    ]
  },
  {
    "title": "mbc",
    "imgurl": "http://static.naver.net/newsstand/2017/0313/article...2",
    "newslist": [
      "'갤럭시S8' 출시?",
      "블로코-삼성SDS, 블록체인 사업 '맞손'"
    ]
  }
];

/* 아래의 코드와 같은 결과 출력
let [, mbc] = news;
let {title, imgurl} = mbc;
console.log(title, imgurl); // mbc, "http://static.naver.net/newsstand/2017/0313/article...2"
* /

let [, {title, imgurl}] = news;
console.log(imgurl); // "http://static.naver.net/newsstand/2017/0313/article...2"
{% endhighlight %}

* 예시 코드
{% highlight javascript %}

{% endhighlight %}


<br>
<div id="four"></div>
# 4. Destructuring의 활용_Event 객체 전달
<div class="underlined"></div>

* 예시 코드1: function의 parameter 이용하기
{% highlight javascript %}
var news = [
  {
    "title": "sbs",
    "imgurl": "http://static.naver.net/newsstand/2017/0313/article...1",
    "newslist": [
      "[가보니]가상 경주도 즐기고, 내 손으로 자동차도 만들고",
      "'리캡차'가 사라진다"
    ]
  },
  {
    "title": "mbc",
    "imgurl": "http://static.naver.net/newsstand/2017/0313/article...2",
    "newslist": [
      "'갤럭시S8' 출시?",
      "블로코-삼성SDS, 블록체인 사업 '맞손'"
    ]
  }
];

function getNewsList([, {newslist}]) {
  console.log(newslist);
}

getNewsList(news); // [  "'갤럭시S8' 출시?", "블로코-삼성SDS, 블록체인 사업 '맞손'"]
{% endhighlight %}

* 예시 코드2: event에서 이용하기
{% highlight javascript %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem voluptates eius recusandae ipsam porro eaque numquam, ducimus, deserunt dolorem dolorum nihil consequatur iste, harum quisquam. Vitae perferendis soluta accusantium earum.</div>
<script>
document.querySelector("div").addEventListener("click", function({type, target}) {
 console.log(type, target.tagName);                                      
}); // "click" "DIV"
</script>
</body>
</html>
{% endhighlight %}

---
[1]: /assets/images/스크린샷2018-06-18-1.jpg
[2]: /assets/images/스크린샷2018-06-18-2.jpg
