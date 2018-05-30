---
title: "[PHP 기본수업] PHP Composer"
layout: post
date: 2018-05-29 17:31
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
mv composer.phar /usr/local/bin/composer
{% endhighlight %}

### 3) terminal(or iTerm)에 'composer' 명령어를 입력해 아래와 같은 화면이 뜨는지 확인한다.
![Markdown Image][1]


---
<div id="two"></div>
## 2. 기본 사용법


---
<div id="three"></div>
## 3. 의존성


---
<div id="four"></div>
## 4. Auto Load


---
[1]: /assets/images/스크린샷2018-05-30-1.jpg
