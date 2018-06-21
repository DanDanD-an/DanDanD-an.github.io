---
title: "[모던 자바스크립트 개발을 위한 ES6] Ch8) Function"
layout: post
date: 2018-06-20 13:25
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
1. <a href="#one">Arrow function 활용</a><br>
2. <a href="#two">Arrow function의 this context</a><br>
3. <a href="#three">Function default parameters</a><br>
4. <a href="#four">Rest parameters</a><br>


---
<br>
<div id="one"></div>
# 1. Arrow function 활용
<div class="underlined"></div>
: ES6에서는 arrow function을 지원하여 일반함수를 arrow function으로 축약하여 사용할 수 있도록 한다.
<br>
* 예시 코드1: callback 함수 이용하기
{% highlight javascript %}
setTimeout(function() {
  console.log("settimeout");
}, 1000); // "settimeout". 1초 뒤 실행

// arrow function으로 축약하기
setTimeout(()=>{
  console.log("settimeout arraw");
}, 1000); // "settimeout arraw". 1초 뒤 실행
{% endhighlight %}

* callback 함수: 어떠한 함수의 인자로 전달되어 특정한 시간에 또는 특정 동작 수행 시에 비동기적으로 수행되는 함수

* 예시 코드2: map 이용하기
{% highlight javascript %}
let newArr = [1, 2, 3, 4, 5].map(function(value, index, object){
  return value * 2;
});

console.log(newArr); // [2, 4, 6, 8, 10]

// arrow function으로 축약하기
let arrowNewArr = [1, 2, 3, 4, 5].map((v) => v * 2);

console.log("arrow newArr", arrowNewArr); // "arrow newArr" [2, 4, 6, 8, 10]
{% endhighlight %}
<br>
<br>
<div id="two"></div>
# 2. Arrow function의 this context
<div class="underlined"></div>
: arrow function은 항상 바인딩된 this를 가지기 때문에 일반함수에서의 bind(this) 를 생략할 수 있다.
<br>
* 예시 코드1
{% highlight html %}
const myObj = {
  runTimeout() {
    setTimeout(function() {
      this.printData(); // this가 myObj 전체를 가리키게 하기 위해
    }.bind(this), 200); // bind로 this를 감싸줌
  },

  printData() {
    console.log("hi codesquad!");
  }
}

myObj.runTimeout(); // "hi codesquad!"

// arrow function으로 변형
const myArrowObj = {
  runTimeout() {
    setTimeout(() => {
      this.printData();
    }, 200);
  },

  printData() {
    console.log("hi codesquad!");
  }
}

myArrowObj.runTimeout(); // "hi codesquad!"
{% endhighlight %}

* 예시 코드2
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <p>mydiv</p>

  <script>
    const el = document.querySelector("p");

    const myObj = {
      register() {
        el.addEventListener("click", function(evt) {
          this.printData();
        }.bind(this));
      },

      printData() {
        console.log('clicked!!');
      }
    }

    myObj.register(); // "clicked!!"

    // arrow function 적용하기
    const myArrowObj = {
      register() {
        el.addEventListener("click", (evt) => {
          this.printData(evt.target);
        });
      },

      printData(el) {
        console.log('clicked!!', el.innerText);
      }
    }

    myArrowObj.register(); // "clicked!!" "mydiv"
  </script>
</body>
</html>
{% endhighlight %}
<br>
<br>
<div id="three"></div>
# 3. Function default parameters
<div class="underlined"></div>
: 기본 함수 매개변수(default function parameter)를 사용하면 값이 없거나 undefined가 전달될 경우 매개변수를 기본값으로 초기화할 수 있다. -*출처:* <a herf="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters">*MDN*</a>-
<br>
* 예시 코드
{% highlight javascript %}
function sum1(value, size=1) { // default parameter
  return value * size;
}

console.log(sum1(3, 10)); // 30

function sum2(value, size={value:1}) { // default parameter: object 형태
  return value * size.value;
}
console.log(sum2(3, {value:3})); // 9
console.log(sum2(3)); // 값이 없을 경우. 3
{% endhighlight %}
<br>
<br>
<div id="four"></div>
# 4. Rest parameters
<div class="underlined"></div>
: 나머지 매개변수(rest parameter) 구문은 정해지지 않은 수(an indefinite number, 부정수) 인수를 배열로 나타낼 수 있게 해준다. -*출처:* <a herf="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters">*MDN*</a>-
<br>
* 예시 코드
{% highlight javascript %}
// ES3
function checkNum1() {
// 모든 인자가 숫자 형식으로 들어왔는지 확인
  const argArray = Array.prototype.slice.call(arguments); // 배열로 만들기
  console.log(toString.call(arguments)); // array 형식으로 만들어졌는지 확인. "[object Arguments]"

  const result1 = argArray.every((v) => typeof v === "number")
  console.log(result1);
}

const result1 = checkNum1(10, 2, 3, 4, 5, "55"); // false

// ES6
function checkNum2(...argArray) { // rest parameters
  // 파라미터가 이미 배열로 만들어져 들어오기 때문에 따로 배열로 만들 필요가 없다.
  console.log(toString.call(argArray)); // "[object Array]".

  const result2 = argArray.every((v) => typeof v === "number")
  console.log(result2);
}

const result2 = checkNum2(10, 2, 3, 4, 5, "55"); // false

{% endhighlight %}

---
