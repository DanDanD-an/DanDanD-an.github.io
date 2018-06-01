---
title: "[PHP 기본수업] PHP Composer"
layout: post
date: 2018-05-30 17:31
image: /assets/images/markdown.jpg
headerImage: false
tag:
- PHP
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: PHP 기본 수업
---
### 목록
1. <a href="#one">Composer 설치하기</a><br>
2. <a href="#two">기본 사용법</a><br>
3. <a href="#three">의존성</a><br>
4. <a href="#four">Auto Load</a><br>


---
<div id="one"></div>
## 1. Composer 설치하기(MacOS)

### 1) Download - 아래 코드를 복사해 terminal(or iTerm)에 입력한다.
{% highlight raw %}
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
{% endhighlight %}

### 2) Globally - 아래 코드를 복사해 terminal(or iTerm)에 입력한다.
{% highlight raw %}
$ mv composer.phar /usr/local/bin/composer
{% endhighlight %}

### 3) terminal(or iTerm)에 'composer' 명령어를 입력해 아래와 같은 화면이 뜨는지 확인한다.
![Markdown Image][3]


---
<div id="two"></div>
## 2. 기본 사용법

### 1) 프로젝트를 위한 디렉토리 생성 > terminal(or iTerm)에서 해당 디렉토리로 이동

### 2) composer init 명령어 입력해 홈 디렉토리로 설정
{% highlight raw %}
$ composer init
{% endhighlight %}

### 3) package name 등을 설정
{% highlight raw %}
Package name (<vendor>/<name>) [dan/composer-app]: dan/composer-app
Description []:
Author [DanDanD-an <dandandan1002@gmail.com>, n to skip]:
Minimum Stability []:
Package Type (e.g. library, project, metapackage, composer-plugin) []:
License []:
{% endhighlight %}

### 4) 홈 디렉토리 아래에 'composer.json' 파일이 생성됨
![Markdown Image][3]

### 5) '<a href="https://packagist.org/">Packagist</a>' 홈페이지에서 require할 package 검색
![Markdown Image][4]
<figcaption class="caption">생활코딩의 PHP기본수업에서는 monolog 패키지를 예시로 사용하였다.</figcaption>

### 6) composer require 명령어 입력
{% highlight raw %}
$ composer require monolog/monolog
{% endhighlight %}

### 7) 'composer.json' 파일의 require{} 안에 패키지 버전이 기록된 것을 확인
![Markdown Image][5]

### 8) 홈 디렉토리 안에 'vendor' 폴더와 'composer.lock' 파일이 생성됨
![Markdown Image][6]

---
<div id="three"></div>
## 3. 의존성

### 1) Composer documentation의 basic usage 복사해  홈디렉토리 아래의 'index.php'에 붙이기
![Markdown Image][7]

### 2) autoload 이용해 vendor 폴더 아래의 Logger 와 StreamHandler 연결
### 3) 'app.log'의 주소를 갖는 StreamHandler 클래스 생성
{% highlight php %}
// composerApp/index.php
<?php
  // require_once __DIR__.'/vendor/monolog/monolog/src/Monolog/Logger.php';
  // require_once __DIR__.'/vendor/monolog/monolog/src/Monolog/Handler/StreamHandler.php';
  require_once __DIR__.'/vendor/autoload.php';

  use Monolog\Logger;
  use Monolog\Handler\StreamHandler;

  // create a log channel
  $log = new Logger('name');
  $log->pushHandler(new StreamHandler(__DIR__.'app.log', Logger::WARNING));

  // add records to the log
  $log->warning('Foo');
  $log->error('Bar');
 ?>
 {% endhighlight %}

### 4) 웹브라우저에서 'index.php' 파일 열기
### 5) 홈 디렉토리 아래에 StreamHandler로 지정한 파일이 생성되었음을 확인
![Markdown Image][8]

### 6) terminal(or iTerm)에서 tail 명령어 이용해 해당 파일의 내용 확인
{% highlight raw %}
$ tail -f app.log
{% endhighlight %}
![Markdown Image][9]

---
<div id="four"></div>
## 4. Auto Load
: autoload 기능을 제공하는 composer 에는 **vendor/autoload.php** 파일이 있어 이 파일을 include 하는 것만으로도 autoload 기능을 이용할 수 있다.

### 1) 'composer.json' 파일에 아래의 코드를 넣어준다.
{% highlight raw %}
{
    "autoload": {
        "psr-4": {"Acme\\": "src/"}
    }
}
{% endhighlight %}

### 2) autoload 정보 변경 사항을 저장하기 위해 terminal(or iTerm)에 composer install 명령어를 입력한다.
{% highlight raw %}
$ composer install
{% endhighlight %}

### 3) composerApp/vendor/composer 폴더의 autoload_psr4.php 파일과 autoload_static.php 파일의 변경사항을 확인한다. 



---
[1]: /assets/images/스크린샷2018-05-31-1.jpg
[3]: /assets/images/스크린샷2018-05-31-3.jpg
[4]: /assets/images/스크린샷2018-05-31-4.jpg
[5]: /assets/images/스크린샷2018-05-31-6.jpg
[6]: /assets/images/스크린샷2018-05-31-5.jpg
[7]: /assets/images/스크린샷2018-05-31-8.jpg
[8]: /assets/images/스크린샷2018-05-31-9.jpg
[9]: /assets/images/스크린샷2018-05-31-10.jpg
