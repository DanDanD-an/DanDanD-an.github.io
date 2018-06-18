---
title: "[Web2 - JavaScript] 자바스크립트 문법 정리"
layout: post
date: 2018-05-04 15:09
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Web
- JavaScript
- Webn
- 생활코딩
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: Web2 - JavaScript
---

### 목록
<a href="#one">1. Run JavaScript</a><br>
<a href="#two">2. DataType</a><br>
<a href="#three">3. Operator</a><br>
<a href="#four">4. Statement</a><br>
<a href="#five">5. Object Model</a><br>
<a href="#six">6. 문법 외 요소들</a>

---
<br>
<div id="one"></div>
## 1. Run JavaScript

### 1) < script> 태그
* html 코드에 JavaScript 코드를 추가하기 위해서는 <span class="evidence-purple">**< script> 태그**</span>를 이용한다.

### 2) Inline
: **inline** 은 태그에 직접 자바스크립트를 기술하는 방식이다. 장점은 태그에 연관된 스크립트가 명시적으로 드러난다는 점이지만, 정보와 제어가 섞여 있는 형태이기 때문에 정보로서의 가치가 떨어진다는 단점이 있다.
* 예시코드
{% highlight html %}
<!DOCTYPE html>
<html>
<body>
    <input type="button" onclick="alert('Hello world')" value="Hello world" />
</body>
</html>
{% endhighlight %}

### 3) Event
* 버튼을 클릭했을 때 경고창이 표시되는 등, 웹브라우저 위에서 일어날 수 있는 한정적 사건을 <span class="evidence-purple">**이벤트(Event)**</span>라고 한다.

---
<div id="two"></div>
## 2. DataType
: 자바스크립트의 데이터타입으로는 String, Number, Boolean 등이 있다.

### 1) String
* 자바스크립트의 문자열 데이터타입. "" 또는 ''를 이용한다.
* .length(문자열의 길이), .toUpperCase(대문자변환), trim(공백 제거), indexOf(인덱스 검색) 등 유용한 프로퍼티가 존재 - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String 참조

#### cf) ES2015에서 새롭게 추가된 method 3가지
{% highlight javascript %}
let str ="hello world ! ^^ ~~";

let matchstr1 ="hello";
let matchstr2 ="^~~";
console.log(str.startsWith(matchstr1)); // true
console.log(str.endsWith(matchstr2)); //false

console.log(str.includes("world")); //true
{% endhighlight %}
*출처: 인프런 - 모던 자바스크립트 개발을 위한 ES6 강좌*

### 2) Number

### 3) Variable
* 변수 선언하기: <span class="evidence-purple">**var variableName = value;**</span>

### 4) Boolean
* true / false

### 5) Array
{% highlight javascript %}
var arrayName = [element1, element2]; // 배열 선언하기
document.write(arrayName.length); // 배열 길이 출력

arrayName.push('newElement'); // 배열 끝에 항목 추가하기
arrayName.unshift('newElement2'); // 배열 앞에 항목 추가하기

arrayName.pop(); // 배열 끝에서부터 항목 제거
arrayName.shift(); // 배열 앞에서부터 항목 제거

arrayName.forEach(function(item, index, array)){}; // 배열 순환하며 처리하기

var pos = arrayName.indexOf("element1"); // 항목 인덱스 찾기
arrayName.splice(pos, n); // 인덱스 pos로부터 n개의 아이템 제거하기

var copiedArray = arrayName.slice(); // 배열 복사하기
{% endhighlight %}

### 6) Object
* **객체**: 연관된 함수와 변수들을 정리정돈하기 위한 수납상자. 데이터가 일정한 순서 없이 저장됨
* 객체 선언하기: <span class="evidence-purple">**var objectname = {key1: value1, key2: value2};**</span>
* 객체 불러오기: objectname.key1; 이때 .는 **object access operator**
* 객체 추가하기: objectname.key3 = value3;<br>
cf) ***key 이름에 공백이 있을 경우***: []를 이용한다. ex) <span class="evidence-purple">coworkers["data scientist"] = "dd";</span>

---
<div id="three"></div>
## 3. Operator

### 1) Arithmetic operator
: +, -, * , /

### 2) Assignment operator
: =

### 3) Comparison operator
* ===: 동등
* <, >는 html에서 태그를 나타내므로 각각 <span class="evidence-purple">**&lt(less than), &gt(greater than)**</span>으로 쓴다.

---
<div id="four"></div>
## 4. Statement

### 1) Conditional Statement

### 2) Loop Statement
* 반복문을 이용해 객체 내 모든 데이터 불러오기: <span class="evidence-purple">**for(var key in objectname) { ;}**</span>

### 3) Property & Method
* 객체 안에 함수 넣기: <span class="evidence-purple">**objectname.functionname = function() { ;}**</span>

---
<div id="five"></div>
## 5. Object Model

### 1) BOM(Browser Object Model)
: 전역객체 window를 이용함. 자세한 내용은 아래 포스트를 참고한다.

### 2) DOM(Document Object Model)
: document 프로퍼티를 이용함. 자세한 내용은 아래 포스트를 참고한다.
---
<div id="six"></div>
## 6. 문법 외 요소들

### 1) Library
* **라이브러리**(library): 프로그램을 만들 때 필요한 부품과 같은 소프트웨어를 모아놓은 것.

#### (1) jQuery
* js의 라이브러리 중 가장 유명한 **jQuery** 는 다운로드 혹은 <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script> 을 추가하여 사용(CDN 이용)할 수 있다.
* jQuery 사용하기: <span class="evidence-purple">**$(selector).action**</span> <br>
 cf) jQuery에서 CSS 사용하기: $(selector).css()

### 2) Framework
* **프래임워크**(framework): 프로그램을 만들 때 사용할 수 있는 기본적이고 공통적인 틀

### 3) UI & API
* **UI**(User Interface): 사용자가 시스템을 제어하기 위해 사용하는 조작장치
* **API**(Application Programming Interface): 개발자가 애플리케이션을 만들기 위해 프로그래밍 중 사용하는 장치
