---
title: "[Web1 - HTML & Internet] 웹서버 운영하기"
layout: post
date: 2018-04-24 16:40
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Web
- HTML
- Server
- Web1 - HTML & Internet
- 강의노트
star: false
category: blog
categories: Web
author: Dan
description: Web1 - HTML & Internet
---

## 방법 1. 웹호스팅 사이트(github pages) 이용하기


1. Repository 생성
2. 이전에 만들어 둔 웹페이지 파일들 업로드 & 커밋
3. Settings > Github Pages > Source > master branch 선택 & Save
4. 이후 표시된 주소로 이동
5. 페이지가 생성된 것을 볼 수 있다!!

* ***주소 클릭 시 404 error 페이지가 뜨는 경우***: REAME.md 파일의 이름을 readme.md 로 수정해주었더니 해결되었다!!

---
## 방법 2. 웹서버 직접 운영하기(Apache 이용)

### 1. 웹서버 설치
* 맥에는 Apache가 기본적으로 설치되어 있다!! 하지만 Apache를 이용하지 못할 경우를 대비해 해당 강좌에서는 Bitnami 라는 프로그램을 추가적으로 설치, 이를 이용해 수업을 진행하였다.

#### 1) Bitnami MAMP Stack 프로그램 다운로드 & 설치
https://bitnami.com/stack/mamp << 다운로드 사이트

#### 2) Bitnami Manager 프로그램 실행
: 웹 서버 제어 프로그램
    * ***Bitnami Manager 프로그램이 자동으로 실행되지 않을 경우***: Bitnami를 설치한 디렉토리-*보통 Application/mampstack-... 아래에 있다*-에서 manager-osx 프로그램을 실행하면 된다<br>

#### 3) Bitnami Manager 프로그램에서 'Go to Application' 버튼 클릭

#### 4) 아래와 같은 창이 나온다면 웹서버를 성공적으로 설치 완료한 것이다.
![Markdowm Image][1]
<figcaption class="caption">http://localhost:8080/</figcaption>

<br>
#### 5) 이제 Bitnami Manager 프로그램을 이용해 웹서버를 끄고 켤 수 있다
{% highlight raw %}
Manager Servers > Apache Web Server 선택 > Start or Stop
{% endhighlight %}


<div class="breaker"></div>

### 2. 웹서버와 HTTP

#### 1) 도메인 네임과 IP주소

* Bitnami Manager 프로그램에서 'Go to Application' 버튼을 누르면 '**localhost:8080**'이라는 주소가 뜬다. 이 때, 주소창에 '**http://localhost:8080/index.html**' 또는 '**http://127.0.0.1:8080/index.html**' 주소를 입력해도 모두 같은 창이 뜨는 것을 볼 수 있다.
* 위 주소들은 모두 내 컴퓨터에 있는 index.html 파일을 요청하는 주소이다.
* 위 주소의 요소들을 하나씩 살펴보면, <br>
1) **8080**: <span class="evidence">포트(port)</span>. 맥에는 기본적으로 웹서버가 설치되어 있기 때문에 기존의 웹서버와 Bitnami를 이용해서 내가 설치한 웹서버를 구별하기 위해서 나중에 설치한 웹서버에 포트 번호를 8080으로 부여한 것.  <br>cf) 기존 웹서버의 포트번호는 80이다.<br>
2) **localhost:** '내컴퓨터'를 가리키는 <span class="evidence">도메인 네임(domain name)</span><br>
3) **127.0.0.1**: <span class="evidence">ip 주소</span>(ip address, Internet Protocol Address)<br>

#### 2) 웹페이지 표시 과정
{% highlight raw %}
http://127.0.0.1:8080/index.html 을 웹브라우저에 입력
→ 웹브라우저가 같은 컴퓨터에 설치된 웹서버에게 index.html을 요청
→ 웹서버가  웹페이지를 저장하기로 약속된 디렉터리인 htdocs에서 index.html 파일의 코드를 읽어서 웹서버에게 전송
→ 웹서버는 코드를 해석해서 화면에 웹페이지를 표시
{% endhighlight %}

* ***자신이 만든 프로젝트를 표시하고자 할 때***: htdocs 디렉터리의 파일들을 모두 삭제하고 프로젝트 폴더에 있는 파일을 복사 → 리로드

#### 3) ip 주소 vs 파일 열기
* **ip 주소**: 웹페이지 전송에 관한 통신규약인 <span class="evidence">'http(HyperText Transfer Protocol)'</span>를 사용. 주소창의 주소가 http://로 시작하면 웹브라우저는 http 통신규약에 따라 웹서버에 접속한다.
* **파일 열기**: 주소창의 주소가 file://로 시작하면 웹브라우저는 파일을 직접 열어서 보여준다.

<div class="breaker"></div>

### 3. 웹서버와 웹브라우저의 통신
: 두 대의 컴퓨터가 서로 정보를 주고 받는 방법<br>

#### ip 주소 얻기
: 웹브라우저가 웹서버에 접속하기 위해서는 웹서버가 설치된 컴퓨터의 주소(ip 주소)를 알아야 한다!<br>

{% highlight raw %}
설정 > Network > 현재 연결된 방식(초록색 불이 켜져 있는 방식) 탭에서 '고급(Advanced)' 실행 > 'TCP/IP' 탭을 선택 > IPv4 항목에서 자신의 컴퓨터의 ip 주소를 확인
{% endhighlight %}

* 알아낸 ip 주소-*나의 경우, http://192.168.0.16:8080/index.html 이었다*-로 접속해보면, index.html 페이지가 나온다.

* 웹브라우저와 웹서버가 설치된 컴퓨터가 **같은 네트워크에 접속된 상태**에서 위에서 얻은 ip 주소로 접속하면, 역시나 웹서버에 저장된 index.html 페이지가 웹브라우저에 표시된다.

---

[1]: /assets/images/스크린샷.jpg
