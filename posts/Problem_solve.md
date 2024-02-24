---
title: Tutor class
excerpt: c++ is the best language
image: coding.png
isFeatured: true
date: '2024/2/24'
---

# 第一節課questions解答

[TOC]

## 第一題
```cpp=
#include<iostream>
using namespace std;
int main(){
    int input;
    cin >> input;
    if(input>=1 && input<=3){
        cout << "spring" << '\n';
    }else if(input>=4 && input<=6){
        cout << "summer" << '\n';
    }else if(input>=7 && input<=9){
        cout << "fall" << '\n';
    }else{
        cout << "winter" << '\n';
    }
    return 0;
}
```
## 第二題
```cpp=
#include<iostream>
using namespace std;
int main(){
    int input;
    cin >> input;
    if(input<=10){
        cout << input*6 << '\n';
    }else if(input>10 && input<=20){
        cout << 60 + (input-10)*2 << '\n';
    }else if(input>20 && input<=40){
        cout << 80 + (input-20) << '\n';
    }else{
        cout << 100 << '\n';
    }
    return 0;
}
```
:::warning
接下來這兩題其實有偷偷用到迴圈 嗚嗚
:::

## 第三題 
```cpp=
#include<iostream>
using namespace std;
int main(){
    int times, rem0=0, rem1=0, rem2=0;
    cin >> times;
    while(times--){   //共要執行times次
        int input;
        cin >> input;
        if(input%3==0)
            rem0++;
        else if(input%3==1)
            rem1++;
        else  
            rem2++;
    }
    cout << rem0 << " " << rem1 << " " << rem2 << '\n';
    return 0;
}
```
## 第四題
```cpp=
#include<iostream>
using namespace std;
int main(){
    int input, odd = 0, even = 0;
    cin >> input;
    bool check = true;  //用來輪流增加奇數位數字的總和以及偶數位數字的總和
    while(input){
        if(check){  //奇數位總和增加
            odd+=(input%10);
        }else{  //偶數位總和增加
            even+=(input%10);
        }
        input/=10;
        check = !check;
    }
    cout << abs(odd - even) << '\n';   // abs()為取絕對值
}
```
## 第五題
>這種題目之後會用array去實現，會簡易很多

無array
```cpp=
#include<iostream>
using namespace std;
int main(){
    int side_max, side1, side2, tmp1, tmp2, tmp3;
    cin >> tmp1 >> tmp2 >> tmp3;
    //這三個是在找最大值
    if(tmp1>=tmp2 && tmp1>=tmp3){
        side_max = tmp1;
        side1 = tmp2;
        side2 = tmp3;
    }else if(tmp2>=tmp1 && tmp2>=tmp3){
        side_max = tmp2;
        side1 = tmp1;
        side2 = tmp3;
    }else{
        side_max = tmp3;
        side1 = tmp1;
        side2 = tmp2;
    }
    //判斷是哪一種三角形
    if(side_max>=(side1+side2))
        cout << "No" << '\n';
    else if(side_max*side_max > side1*side1 + side2*side2)
        cout << "Obtuse" << '\n';
    else if(side_max*side_max == side1*side1 + side2*side2)
        cout << "Right" << '\n';
    else 
        cout << "Acute" << '\n';
    return 0;
}
```
有array
```cpp=
#include<iostream>
#include<algorithm>
using namespace std;
int main(){
    int arr[4];
    for(int i=0; i<3; i++) //輸入數字進陣列
        cin >> arr[i];
    sort(arr, arr+3, std::greater<int>()); //排序，使陣列由大到小排列

    //判斷是哪一種三角形
    if(arr[0]>=(arr[1]+arr[2]))
        cout << "No" << '\n';
    else if(arr[0]*arr[0] > arr[1]*arr[1] + arr[2]*arr[2])
        cout << "Obtuse" << '\n';
    else if(arr[0]*arr[0] == arr[1]*arr[1] + arr[2]*arr[2])
        cout << "Right" << '\n';
    else 
        cout << "Acute" << '\n';
    return 0;
}
```
## 挑戰題
:::warning
其實沒有多挑戰啦，只是要你知道，需要從1000、500往下找，就會是找最少零錢數的方法
:::
>跟上題一樣，有array會簡易許多

無array
``` cpp=
#include<iostream>
using namespace std;
int main(){
    int money=0, amount=0;
    cin >> money;
    if(money>1000){
        amount += (money/1000);
        money%=1000;
    }
    if(money>500){
        amount += (money/500);
        money%=500;
    }
    if(money>200){
        amount += (money/200);
        money%=200;
    }
    if(money>100){
        amount += (money/100);
        money%=100;
    }
    if(money>50){
        amount += (money/50);
        money%=50;
    }
    if(money>10){
        amount += (money/10);
        money%=10;
    }
    if(money>5){
        amount += (money/5);
        money%=5;
    }
    amount += money;
    cout << amount;
}
```
有array
```cpp=
#include<iostream>
using namespace std;
int main(){
    int arr[8]={1000, 500, 200, 100, 50, 10, 5};
    int money=0, amount=0;
    cin >> money;
    for(int i=0; i<7; i++){
        if(money>arr[i]){
            amount += (money/arr[i]);
            money%=arr[i];
        }
    }
    amount+=money;
    cout << amount;
}
```