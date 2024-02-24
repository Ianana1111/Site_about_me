---
title: Tutor class
excerpt: c++ is the best language. gigigigigigig
image: loop.png
isFeatured: true
date: '2024/2/23'
---

# 第二節課questions_answer

[TOC]


## 第一題
```cpp=
#include<iostream>
using namespace std;

int main(){
    int n;
    cin >> n;
    while(n--){
        int a, b, c;
        cin >> a >> b>> c;
        switch(a){
            case 1:
                cout << b+c << '\n';
                break;
            case 2:
                cout << b-c << '\n';
                break;
            case 3:
                cout << b*c << '\n';
                break;
            case 4:
                cout << b/c << '\n';
                break;cout << b+c << '\n';
            default:
                break;
        }
    }
    return 0;
}
```
## 第二題
```cpp=
#include<iostream>
using namespace std;
#define ll long long //(將long long 以 ll 的 形勢表達)
int main(){
    int a;
    cin >> a;
    int count = 0;
    while(a){
        int tmp = a%10;
        if(count==0 && tmp!=0){
            cout << tmp;
        }else if(count!=0){
            cout << tmp;
        }
        a/=10;
        count++;
    }
    return 0;
}
```
## 第三題
```cpp=
#include<iostream>
using namespace std;

int main(){
    int count = 1;
    cout << '*' << '\n';
    for(int i=1; i<7; i++){
        if(i<=3){
            if(i%2==1)
                count+=2;
            else
                count+=3;
        }else{
            if(i%2==0)
                count-=2;
            else
                count-=3;
        }
        for(int j=0; j<count; j++)
            cout << '*';
        cout << '\n';
    }
    return 0;
}
```
## 第四題
```cpp=
#include<iostream>
using namespace std;
int main(){
    int a;
    cin >> a;
    for(int i=1; i<=a; i++){
        for(int j=1; j<=a-i; j++)
            cout << ' ';
        for(int j=1; j<=i; j++)
            cout << i ;
        cout << ' ';
        for(int j=1; j<=i; j++)
            cout << i ;
        for(int j=1; j<=a-i; j++)
            cout << ' ';
        cout << '\n';
    }
    return 0;
}
```
## 第五題
:::warning
偷偷跟你說，其實上週作業我不小心放到這題迴圈版本的答案，我在這就先不放了歐，但你還是可以練習一下（絕對不是因為懶）
:::
## 第六題
:::warning
這題看起來有點難，但其實沒很難(我在說幹話

你只需要在正常的for loop動手腳，即可知道要怎麼應對

提示：

1. 此題只需要4個for loop，而在初始化和條件式那兩格，會需要用到變形的if 。
2. 可以從一個迴圈開始，慢慢增加，最後再到4個迴圈，會比較知道如何運作。
:::
```cpp=
#include<iostream>
using namespace std;
int main(){
    int n;
    cin >> n;
    for(int i=1; i<=9; i++)
        for(int j = ( i-n<0? 0 : i-n ); j<=( i+n>9? 9 : i+n); j++)
            for(int k = ( j-n<0? 0 : j-n ); k<=( j+n>9? 9 : j+n); k++)
                for(int l = ( k-n<0? 0 : k-n ); l<=( k+n>9? 9 : k+n); l++)
                    cout << i << j << k << l << '\n';
    return 0;
}
```
