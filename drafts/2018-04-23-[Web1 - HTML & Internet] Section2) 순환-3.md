---
title: "[영리한 프로그래밍을 위한 알고리즘] Section2) 순환-3"
layout: post
date: 2018-04-23 15:45
image: /assets/images/markdown.jpg
headerImage: false
tag:
- 
- 강의노트
star: false
category: blog
categories: Algorithm
author: Dan
description: 영리한 프로그래밍을 위한 알고리즘
---

## 1. 순환(Recursion)의 개념과 기본 예제

### 3) Designing Recursion 순환 알고리즘의 설계

#### 순환적 알고리즘 설계

* 적어도 하나의 base case + 모든 case는 결국 base case로 수렴해야 함
* 암시적(implicit) 매개변수를 <span class="evidence">명시적(explicit) 매개변수</span>로 바꾸어야 함!!

---
#### 매개변수의 명시화 예제1) 순차 탐색

* 소스 코드1
{% highlight java %}
// 이 함수의 미션은 data[0] ~ data[n-1] 사이에서 target을 검색하는 것.
// 하지만 검색 구간 시작 인덱스 0은 보통 생략함. 즉, 암시적 매개변수
// 검색 구간의 끝(data[n-1])은 명시되어 있음
int search(int [] data, int n, int target)
{
  for (int i = 0; i < n; i++)
    if (data[i] == target)
      return i;

  return -1;
}
{% endhighlight %}

* 소스 코드2: 매개변수의 명시화
{% highlight java %}
// 이 함수의 미션은 data[begin] ~ data[end] 사이에서 target을 검색한다.
// 즉, 검색 구간의 시작점을 명시적으로 지정.
int search(int [] data, int begin, int end int target)
{
  if (begin > end)
    return -1;
  else if (target == data[begin])
      return begin;
  else
    return search(data, begin+1, end, target);
} // 이 함수를 search(data, 0, n-1, target)으로 호출한다면 앞 페이지의 함수와 완전히 동일한 일을 수행
{% endhighlight %}

* 순환 함수에서는 자기 자신을 다시 호출하면서 구간이 계속 변화하기 때문에
  시작점을 명시적으로 지정해주어야 한다.
* 위 소스 코드에서 end와 같이 수행 중 값이 변하지 않는 변수의 경우, 암시적으로 지정(ex. data.length -1)해줄 수 있음.

* 소스 코드3: 매개변수의 명시화2
{% highlight java %}
int search(int [] data, int begin, int end, int target)
{
  if (begin > end)
    return -1;
  else
  {
    int middle = (begin+end)/2;

    if (data[middle] == target)
      return middle;

    int index = search(data, begin, middle-1, target)

    if (index != -1)
      return index;
    else
      return search(data, middle+1, end, target);
  }
}
{% endhighlight %}

---
#### 매개변수의 명시화 예제2) 최대값 찾기

* 소스 코드1
{% highlight java %}
// 이 함수의 미션은 data[begin] ~ data[end] 사이에서 최대값을 찾아 반환한다.
// begin <= end 라고 가정.
int findMax(int [] data, int begin, int end)
{
  if (begin == end // Base case: data가 1개일 경우
    return data[begin];
  else
    return Math.max(data[begin], findMax(data, begin+1, end));
}
{% endhighlight %}

* 소스 코드2
{% highlight java %}
int findMax(int [] data, int begin, int end)
{
  if (begin == end)
    return data[begin];
  else
  {
    int middle = (begin+end)/2;
    int max1 = findMax(data, begin, middle);
    int max2 = findMax(data, middle+1, end);
    return Math.max(max1, max2);
  }
}
{% endhighlight %}

---
#### 매개변수의 명시화 예제3) Binary Search

* 소스 코드
{% highlight java %}
public static int binarySearch(String[] items, String target, int begin, int end)
{
  if (begin > end)
    return -1;
  else
  {
    int middle = (begin+end)/2;
    int compResult = target.compareTo(items[middle]);
    if (compResult == 0) // target == middle
      return middle;
    else if (compResult < 0) // target < middle
      return binarySearch(items, target, begin, middle-1);
    else // target > middle
      return binarySearch(items, target, middle+1, end);
  }
}
{% endhighlight %}
