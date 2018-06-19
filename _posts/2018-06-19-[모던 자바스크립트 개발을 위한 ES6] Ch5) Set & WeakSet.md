---
title: "[모던 자바스크립트 개발을 위한 ES6] Ch5) Set & WeakSet"
layout: post
date: 2018-06-19 14:13
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
1. <a href="#one">Set으로 유니크한 배열 만들기</a><br>
2. <a href="#two">WeakSet으로 효과적으로 객체타입 저장하기</a><br>

---
<br>
<div id="one"></div>
# 1. Set으로 유니크한 배열 만들기
<div class="underlined"></div>
: 중복없이 유일한 값을 저장하려고 할 때 **Set** 을 사용한다. 어떠한 값이 이미 존재하는지 체크할 때 유용하다.
<br>
* 예시 코드
{% highlight javascript %}
let mySet = new Set();
// console.log(toString.call(mySet)); // type 확인 "[object Set]"

mySet.add("crong");
mySet.add("hary");
mySet.add("crong"); // 오류가 발생하지는 않음

console.log(mySet.has("crong")); // true

mySet.forEach(function(v) {
  console.log(v); // "crong" "hary"
})

mySet.delete("crong");
mySet.forEach(function(v) {
  console.log(v); // "hary"
})
{% endhighlight %}
<br>
<br>
<div id="two"></div>
# 2. WeakSet으로 효과적으로 객체타입 저장하기
<div class="underlined"></div>
: **WeakSet** 은 Set과 달리 참조를 가지고 있는 객체만 저장이 가능하다. 객체 형태를 중복 없이 저장하려고 할 때 유용하다.
<br>
* 예시 코드
{% highlight javascript %}
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(function(){});
ws.add(obj);

arr = null;

// ws.add(111); // number - 에러발생
// ws.add("111"); // string - 에러발생
// ws.add(null); // null - 에러발생


console.log(ws); // [object WeakSet] { ... }
console.log(ws.has(arr), ws.has(arr2)); // false true
{% endhighlight %}
