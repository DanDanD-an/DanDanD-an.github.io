---
title: "[웹브라우저 자바스크립트] 자바스크립트의 Object Model"
layout: post
date: 2018-06-12 20:15
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
description: 웹브라우저 자바스크립트
---

### 목록
<a href="#one">1. BOM</a><br>
<a href="#two">2. DOM</a><br>


---
<div id="one"></div>
## 1. BOM
<div class="underlined"></div>
: <span class="evidence-yellow">**BOM**(Browser Object Model)</span>이란 웹브라우저의 창이나 프레임을 추상화해서 프로그래밍적으로 제어할 수 있도록 제공하는 수단. 전역객체인 <span class="evidence-yellow">**Window**</span>의 프로퍼티와 메소드들을 통해서 제어할 수 있다.

### 1.1. 전역객체 Window
: <span class="evidence-yellow">**window**</span> 객체는 모든 객체가 소속된 객체이고, 전역객체이면서, 창이나 프레임을 의미, 제어한다.

#### 1.1.1. 전역변수 호출하기
* window 객체는 식별자 <span class="evidence-yellow">**window**</span>을 통해서 얻을 수 있으며, 생략 가능하다.
* 예시 코드: window 객체의 메소드인 alert 호출하기
{% highlight html %}
<!DOCTYPE html>
<html>
<script>
    alert('Hello world');
    window.alert('Hello world');
</script>
<body>
 ...
</body>
</html>
{% endhighlight %}

#### 1.1.2. 전역변수에 접근하기
* 예시 코드: 전역변수 a에 접근하기
{% highlight html %}
<!DOCTYPE html>
<html>
<script>
    var a = 1;
    alert(a);
    alert(window.a);
</script>
<body>
 ...
</body>
</html>
{% endhighlight %}

<div class="breaker"></div>
###1.2. 커뮤니케이션 기능

#### 1.2.1. alert
: 경고창. 정보 제공 또는 디버깅 용도로 사용
* 예시 코드
{% highlight html %}
<!DOCTYPE html>
<html>
    <body>
        <input type="button" value="alert" onclick="alert('hello world');" />
    </body>
</html>
{% endhighlight %}

* 결과
<div id="rebox"> <a href="/assets/images/스크린샷2018-06-12-1.jpg"><img src="/assets/images/스크린샷2018-06-12-1.jpg"></a></div>

#### 1.2.2. confirm
: 확인을 누르면 true, 취소를 누르면 false 리턴
* 예시 코드
{% highlight html %}
<!DOCTYPE html>
<html>
    <body>
        <input type="button" value="confirm" onclick="func_confirm()" />
        <script>
            function func_confirm(){
                if(confirm('ok?')){
                    alert('ok');
                } else {
                    alert('cancel');
                }
            }
        </script>
    </body>
</html>
{% endhighlight %}

* 결과
<div id="rebox"> <a href="/assets/images/스크린샷2018-06-12-2.jpg"><img src="/assets/images/스크린샷2018-06-12-2.jpg"></a></div>

#### 1.2.3. prompt
: 사용자로부터 값을 입력받을 수 있음
* 예시 코드
{% highlight html %}
<!DOCTYPE html>
<html>
    <body>
        <input type="button" value="prompt" onclick="func_prompt()" />
        <script>
            function func_prompt(){
                if(prompt('id?') === 'egoing'){
                    alert('welcome');
                } else {
                    alert('fail');
                }
            }
        </script>
    </body>
</html>
{% endhighlight %}

* 결과
<div id="rebox"> <a href="/assets/images/스크린샷2018-06-12-3.jpg"><img src="/assets/images/스크린샷2018-06-12-3.jpg"></a></div>

<div class="breaker"></div>
### 1.3. Location 객체
: <span class="evidence-yellow">**Location**</span> 객체는 문서의 주소와 관련된 객체로 window 객체의 프로퍼티다. 이 객체를 이용해서 윈도우의 문서 URL을 변경할 수 있고, 문서의 위치와 관련해 다양한 정보를 얻을 수 있다.

#### 1.3.1. 문서의 주소 정보 알아내기

* 현재 윈도우의 URL 콘솔에 출력
{% highlight javascript %}
console.log(location.toString(), location.href);
{% endhighlight %}

#### 1.3.2. URL 변경하기

* **location.href**: 특정 URL로 이동
{% highlight javascript %}
location.href = 'http://egoing.net';

// 아래의 방법도 같은 효과를 낸다
location = 'http://egoing.net';
{% endhighlight %}

* **location.reload()**: 현재 문서 리로드
{% highlight javascript %}
location.reload();

// 해쉬와 함께 리로드
function reloadPageWithHash() {
  var initialPage = location.pathname;
  location.replace('http://example.com/#' + initialPage);
}
{% endhighlight %}

<div class="breaker"></div>
### 1.4. 창 제어

#### 1.4.1. window.open: 새 창 생성
* 사용법 & 예시 코드
{% highlight javascript %}
<!DOCTYPE html>
<html>
<style>li {padding:10px; list-style: none}</style>
<body>
<ul>
    <li>
        첫번째 인자는 새 창에 로드할 문서의 URL이다. 인자를 생략하면 이름이 붙지 않은 새 창이 만들어진다.<br />
        <input type="button" onclick="open1()" value="window.open('demo2.html');" />
    </li>
    <li>
        두번째 인자는 새 창의 이름이다. _self는 스크립트가 실행되는 창을 의미한다.<br />
        <input type="button" onclick="open2()" value="window.open('demo2.html', '_self');" />
    </li>
    <li>
        _blank는 새 창을 의미한다. <br />
        <input type="button" onclick="open3()" value="window.open('demo2.html', '_blank');" />
    </li>
    <li>
        창에 이름을 붙일 수 있다. open을 재실행 했을 때 동일한 이름의 창이 있다면 그곳으로 문서가 로드된다.<br />
        <input type="button" onclick="open4()" value="window.open('demo2.html', 'ot');" />
    </li>
    <li>
        세번재 인자는 새 창의 모양과 관련된 속성이 온다.<br />
        <input type="button" onclick="open5()" value="window.open('demo2.html', '_blank', 'width=200, height=200, resizable=yes');" />
    </li>
</ul>

<script>
function open1(){
    window.open('demo2.html');
}
function open2(){
    window.open('demo2.html', '_self');
}
function open3(){
    window.open('demo2.html', '_blank');
}
function open4(){
    window.open('demo2.html', 'ot');
}
function open5(){
    window.open('demo2.html', '_blank', 'width=200, height=200, resizable=no');
}
</script>
</body>
</html>
{% endhighlight %}

_ㅌㅌㅌ_

#### 1.4.2. 상호작용
{% highlight javascript %}
<!DOCTYPE html>
<html>
<body>
    <input type="button" value="open" onclick="winopen();" />
    <input type="text" onkeypress="winmessage(this.value)" />
    <input type="button" value="close" onclick="winclose()" />
    <script>
    // 버튼 클릭 시 새 창 열기
    function winopen(){
        win = window.open('demo2.html', 'ot', 'width=300px, height=500px');
    }
    // 사용자가 입력한 메시지를 해당 창에 출력, 저장
    function winmessage(msg){
        win.document.getElementById('message').innerText=msg;
    }
    // 창 닫기
    function winclose(){
        win.close();
    }
    </script>
</body>
</html>
{% endhighlight %}


#### 1.4.3. 팝업 차단
* 예시 코드: 사용자의 인터렉션 없이 창을 열려고 하면 팝업 차단
{% highlight html %}
<!DOCTYPE html>
<html>
<body>
    <script>
    window.open('demo2.html');
    </script>
</body>
</html>
{% endhighlight %}
