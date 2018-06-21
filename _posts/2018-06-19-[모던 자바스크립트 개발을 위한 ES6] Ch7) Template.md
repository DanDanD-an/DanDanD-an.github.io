---
title: "[모던 자바스크립트 개발을 위한 ES6] Ch7) Template"
layout: post
date: 2018-06-19 16:59
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
1. <a href="#one">Template 처리</a><br>
2. <a href="#two">Tagged Template literals</a><br>

---
<br>
<div id="one"></div>
# 1. Template 처리
<div class="underlined"></div>
: UI 개발에서는 데이터와 HTML 문자의 결합을 위해, JSON 으로 응답을 받고,  javascript object로 데이터 처리 조작을 한 후에 이를 DOM에 추가한다.  템플릿 문자열을 이용하기 위해서는 ` `를 이용한다.
<br>
* 예시 코드
{% highlight javascript %}
const data = [
  {
    name: 'coffee-bean',
    order: true,
    items: ['americano', 'milk', 'green-tea']
  },
  {
    name: 'starbucks',
    order: false,
  }
]

const template = `<div>welcome ${data[0].name} !!`;
console.log(template);
{% endhighlight %}
<br>
<br>
<div id="two"></div>
# 2. Tagged Template literals
<div class="underlined"></div>
: 템플릿에 함수를 적용하기 위해서는 함수이름을 ` ` 앞에 붙여준다.
<br>
* 예시 코드
{% highlight javascript %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <div id = "message"></div>
  <script>
    const data = [
    {
      name: 'coffee-bean',
      order: true,
      items: ['americano', 'milk', 'green-tea']
    },
    {
      name: 'starbucks',
      order: false,
    },
    {
      name: 'coffee-king',
      order: true,
      items: ['americano', 'latte']
    },
    ]

    function fn (tags, name, items) {
    if (typeof items === "undefined") {
      items = "주문가능한 상품이 없습니다.";
    }

    return (tags[0] + name + tags[1] + items + tags[2]);
    }

    data.forEach((v) => {
    let template = fn`<h2>welcome ${v.name} !!</h2><h4>주문가능항목</h4><div>${v.items}</div>`;
    document.querySelector("#message").innerHTML += template;
    });
  </script>
</body>
</html>
{% endhighlight %}

---
