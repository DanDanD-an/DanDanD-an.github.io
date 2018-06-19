---
title: "[모던 자바스크립트 개발을 위한 ES6] Ch6) Map & WeakMap"
layout: post
date: 2018-06-19 14:54
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
1. <a href="#one">Map & WeakMap 추가 정보를 담은 객체 저장하기</a><br>
2. <a href="#two">WeakMap 클래스 인스턴스 변수 보호하기</a><br>

---
<br>
<div id="one"></div>
# 1. Map & WeakMap 추가 정보를 담은 객체 저장하기
<div class="underlined"></div>
: Object를 개선한 것. **map** 은 key/value 구조이기 때문에 객체뿐만 아니라 그 객체에 대한 부연 설명도 저장한다.
<br>
* 예시 코드
{% highlight javascript %}
let wm = new WeakMap();
let myfun = function(){};

wm.set(myfun, 0);
console.log(wm);

let count = 0;
for (let i = 0; i < 10; i++) {
  count = wm.get(myfun); // get value
  count++;
  wm.set(myfun, count);
}

console.log(wm.get(myfun)); // 10

myfun = null;
console.log(wm.get(myfun)); // undefined
console.log(wm.has(myfun)); // false
{% endhighlight %}
<br>
<br>
<div id="two"></div>
# 2. WeakMap 클래스 인스턴스 변수 보호하기
<div class="underlined"></div>
: private 한 인스턴스 변수를 생성하려 할 때 WeakMap을 사용하면 편리하다.
<br>
* 예시 코드1
{% highlight javascript %}
const wm = new WeakMap();

function Area(height, width) {
  wm.set(this, {height, width});
}

Area.prototype.getArea = function() {
  const {height, width} = wm.get(this);
  return height * width;
}

let myarea = new Area(10, 20);
console.log(myarea.getArea()); // 200
console.log(myarea.height); // undefined. WeakMap으로 보호하기 때문에 외부에서 접근 불가

console.log(wm.has(myarea)); // true
myarea = null; // 인스턴스 삭제
console.log(wm.has(myarea)); // false
{% endhighlight %}

* 예시 코드2
{% highlight javascript %}
const obj = {};

function Area(height, width) {
  obj.height = height;
  obj.width = width;
}

Area.prototype.getArea = function() {
  return obj.height * obj.width;
}

let myarea = new Area(10, 20);
console.log(myarea.getArea()); // 200
myarea = null;
console.log(myarea); // null
{% endhighlight %}
