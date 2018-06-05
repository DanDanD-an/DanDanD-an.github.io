---
title: "[PHP 고급수업] Xdebug"
layout: post
date: 2018-05-31 17:07
image: /assets/images/markdown.jpg
headerImage: false
tag:
- PHP
- Xdebug
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: PHP 고급수업
---
### 목록
1. <a href="#one">설치하기</a><br>
2. <a href="#two">기본 기능</a><br>
3. <a href="#three">오류 추적</a><br>
4. <a href="#four">Profiling</a><br>
5. <a href="#five">Remote Debugging</a><br>
6. <a href="#six">선택적 실행</a><br>

---
<div id="one"></div>
## 1. 설치하기(MacOS)
<div class="underlined"></div>
: 나는 MacOS에 기본으로 설치되어 있던 php를 이용해왔기 때문에, homebrew대신 pecl을 이용하여 xdebug를 설치하였다.

#### 1) pecl을 이용해 xdebug 다운로드한다.
: 터미널에 아래의 명령어를 입력한다.
{% highlight raw %}
$ sudo pecl install xdebug
{% endhighlight %}

* pecl이 설치되지 않은 경우, Pear와 함께 설치해준다. 나는 아래의 블로그를 참고하였다.
https://jason.pureconcepts.net/2012/10/install-pear-pecl-mac-os-x/
<br>
* php 버전이 pecl/xdebug에서 요구하는 버전과 일치하지 않을 경우, 에러가 발생할 수 있다.
<br>

<div id="php"></div>
#### 2) 'php.ini' 파일 설정
: 'php.ini' 파일을 찾아 아래와 같이 수정하여 xdebug를 활성화시킨다.
![Markdown Image][1]
<br>
#### 3) apache 서버를 restart하여 변경사항을 저장한다.
<br>
#### 4) 터미널에 아래의 명령어를 입력한다.
{% highlight raw %}
$ php -v
{% endhighlight %}

#### 5) 다음과 같은 문구가 표시되는지 확인한다.
{% highlight raw %}
PHP 7.0.27 (cli) (built: Feb  1 2018 13:49:26) ( NTS )
Copyright (c) 1997-2017 The PHP Group
Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
    with Zend OPcache v7.0.27, Copyright (c) 1999-2017, by Zend Technologies
    with Xdebug v2.6.0, Copyright (c) 2002-2018, by Derick Rethans
{% endhighlight %}

#### 6) 'phpinfo.php' 파일을 생성하고, 웹브라우저에서 열었을 때 Xdebug 항목이 표시되는지 확인한다.
{% highlight php %}
<?php
  phpinfo();
?>
{% endhighlight %}
<br>
![Markdown Image][2]{: id="myImg" alt="Hi"}

 <div class="breaker"></div>
<div id="two"></div>
## 2. 기본 기능
<div class="underlined"></div>

### 2.1. Context
: 현재 실행되고 있는 함수나 메소드의 맥락-*어떤 파일에 위치하는지, 몇번째 줄에 위치하는지, 어떻게 호출되었는지 등*-을 출력
<br>
* 예시
{% highlight php %}
<?php
    function fix_string($a)
    {
        echo "Called @ ".
            xdebug_call_file().
            ":".
            xdebug_call_line().
            " from ".
            xdebug_call_function();
    }

    $ret = fix_string(array('Derick'));
?>
{% endhighlight %}

<div class="breaker"></div>
### 2.2. Memory
: 메모리 소모 내역을 출력
<br>
* 예시
{% highlight php %}
<?php
$text = "coding everybody";
$prev_mem = xdebug_memory_usage();
for($i=0; $i<10; $i++){
        $text.=$text;
        echo $i.':'.xdebug_memory_usage().':'.(xdebug_memory_usage()-$prev_mem).':'.strlen($text)."\n";
}
?>
{% endhighlight %}

<div class="breaker"></div>
### 2.3. 실행시간
: 실행 시간 출력
<br>
* 예시
{% highlight php %}
<?php
echo xdebug_time_index()."\n";
for($i=0; $i<3; $i++){
        echo xdebug_time_index()."<br />\n";
        sleep(1);
}
?>
{% endhighlight %}

<div class="breaker"></div>
### 2.4. 데이터 출력
: var_dump 출력방식을 웹과 CLI에 맞게 변경
<br>
* 예시
{% highlight php %}
<?php
class test {
    public $pub = false;
    private $priv = true;
    protected $prot = 42;
}
$t = new test;
$t->pub = $t;
$data = array(
    'one' => 'a somewhat long string!',
    'two' => array(
        'two.one' => array(
            'two.one.zero' => 210,
            'two.one.one' => array(
                'two.one.one.zero' => 3.141592564,
                'two.one.one.one'  => 2.7,
            ),
        ),
    ),
    'three' => $t,
    'four' => range(0, 5),
);
var_dump( $data );
?>
{% endhighlight %}

<div class="breaker"></div>
### 2.5. 전역변수 열람
: 전역 변수의 목록을 출력
<br>
* 예시
{% highlight php %}
<?php
ini_set('xdebug.dump.GET', '*');
ini_set('xdebug.dump.SERVER','*');
xdebug_dump_superglobals();
?>
{% endhighlight %}


 <div class="breaker"></div>
<div id="three"></div>
## 3. 오류 추적
<div class="underlined"></div>
: xdebug는 오류가 발생했을 때 어떤 맥락에서 발생한 것인지 추적해서 보여준다.
<br>
* 예시
{% highlight php %}
<?php
ini_set('xdebug.collect_params', '4');
ini_set('xdebug.dump.GET', '* ');
ini_set('xdebug.dump.SERVER', 'REQUEST_URI');
ini_set('xdebug.show_local_vars', 'on');

function a($_a){
        echo $d;
        return $_a;     
}
function b($_b){
        return a($_b);
}
function c($_c){
        return b($_c);
}
print_ r(c(array('param'=>'test')));
?>
{% endhighlight %}

#### 결과
![Markdown Image][3]
<figcaption class="caption">생활코딩 PHP 고급수업 - Xdebug 오류 추적 중에서</figcaption>
<br>
* **xdebug.collect_params** : 함수로 전달된 인자를 얼마나 디테일하게 표현할 것인지를 지정. 1부터 4까지 값을 지정할 수 있음. 값이 높을수록 더 자세한 정보를 제공.
* **xdebug.dump.GET** : GET 방식으로 전달된 값을 출력한다.
* **xdebug.show_local_vars** : 지역변수의 리스트를 출력한다.

 <div class="breaker"></div>
<div id="four"></div>
## 4. Profiling
<div class="underlined"></div>
: Profiling이란 소프트웨어의 성능을 측정하는 방법론으로 주로 메모리 사용률과 실행 속도를 평가한다.

### 4.1. 동작 방법
: 'phpinfo.php' 파일을 웹브라우저에서 열었을 때, xdebug 항목의 **xdebug.profiler_enable** 이 **On** 으로 설정되어 있다면, 프로파일러를 사용할 수 있다.<br>
![Markdown Image][4]
<br>
* 해당 항목이 On으로 설정되어 있지 않은 경우, <a href="#php" style="text-decoration:underline;">1. 설치하기 - 2) 'php.ini' 파일 설정</a> 을 참고한다.

<div class="breaker"></div>
### 4.2. 시스템 성능 향상 방법

#### 4.2.1. Cache
: 연산 작업의 결과를 저장했다가 동일작업을 호출할 때 저장된 결과를 반환하는 방법
<br>

#### 4.2.2. 코드 최적화
: APC, Hiphop 등
<br>

#### 4.2.3. 비동기 작업
: 사용자가 어떤 데이터를 입력했을 때 그 순간 작업을 처리하지 않고, 처리해야할 작업의 내용만을 저장했다가 실제 작업은 시스템이 한가한 시간이나 다른 컴퓨터에서 처리하는 기법 ex) cron
<br>
 <div class="breaker"></div>

<div id="five"></div>
## 5. Remote Debugging
<div class="underlined"></div>
: 리모트 디버깅이란 원격지의 서버를 로컬의 디버거를 이용해서 디버깅하는 것으로 한줄씩 실행하면서 로직의 흐름을 추적해 문제를 파악할 수 있도록 한다. 코드리뷰에도 도움이 된다.

### 5.1. 매커니즘
![Markdown Image][5]
<figcaption class="caption">생활코딩 PHP 고급수업 - Xdebug Remote Debugging 중에서</figcaption>

<div class="breaker"></div>
### 5.2. Remote Debugging 설정
: 아래의 내용을 xdebug.ini 파일에 추가해준다.
<br>
#### 1) xdebug.remote_enabled
: 리모트 디버깅 활성화. 1로 설정하면 켤 수 있다.<br>

#### 2) xdebug.remote_autostart
: remote_autostart를 1로 지정하면 xdebug.remote_enable의 값이 설정된 서버는 항상 xdebug remote debugging이 자동으로 구동된다.
<br>
* 자동 구동 기능은 편리하지만, 보안 상의 문제를 일으킬 수 있다.
* 자동 구동 기능을 이용하지 않고 remote debugging을 할 경우, GET/POST의 값으로 **XDEBUG_SESSION_START** 나 **XDEBUG_SESSION cookie** 를 전달한다.
<p> ex) localhost:8080/phpinfo.php?XDEBUG_SESSION_START </p>

#### 3) xdebug.remote_host
: Xdebug의 리모트 디버깅이 시작되었을 때 디버거가 위치하는 클라이언트의 IP 지정. xdebug는 이 IP를 통해 클라이언트와 통신한다.
<br>
#### 4) xdebug.remote_connect_back
: 여러 이용자가 한 대의 서버에서 리모트 디버깅을 하거나, 클라이언트의 IP가 계속 변경되는 상황이라면, **xdebug.remote_connect_back** 를 사용하여 자동으로 접속자의 IP로 디버깅이 수립되도록 한다.<br>
* 단, 이 옵션은 모든 클라이언트에 접속하기 때문에 불특정 다수가 접속하는 서버환경에서는 보안 홀이 생길 수도 있으므로 사용하지 않는 것이 좋다!

 <div class="breaker"></div>

<div id="six"></div>
## 6. 선택적 실행
<div class="underlined"></div>
: Xdebug의 일부 기능들은 시스템에 많은 부하를 주거나, 보안상 심각한 위험을 초래할 수 있기 때문에 원하는 경우에만 이러한 기능이 동작하게 할 필요가 있다.

### 6.1. 선택적 실행 방법
: 서버에 접속할 때 GET/POST/COOKIE 중 하나를 이용해 아래의 값을 전달한다.

* XDEBUG_SESSION
 : 리모트 디버깅의 시작을 지시한다.<br>
* XDEBUG_PROFILE
 : 프로파일링 데이터를 생성하라고 지시한다.<br>
* XDEBUG_TRACE
 : Trace를 실행하라고 지시한다.<br>

 <div class="breaker"></div>
### 6.2. 확장 기능
: 브라우저마다의 확장기능-*cookie를 이용한다*-을 이용하면 편리하게 선택적 실행을 수행할 수 있다.<br>

* <a href="https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc">Xdebug Helper for Chrome</a>
* <a href="https://github.com/benmatselby/xdebug-toggler">Xdebug Toggler for safari</a>

---
[1]: /assets/images/스크린샷2018-06-01-1.jpg
[2]: /assets/images/스크린샷2018-06-01-2.jpg
[3]: /assets/images/1219.jpg
[4]: /assets/images/스크린샷2018-06-01-3.jpg
[5]: /assets/images/1225.gif
