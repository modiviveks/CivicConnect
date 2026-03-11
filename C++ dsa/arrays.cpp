#include<iostream>
using namespace std;
int main(){
int marks[5]={99,100,54,36,42};
int size=5;
int sz = sizeof(marks)/sizeof(int);//sizeof(marks) will give the exact memory means storage of that particular array
cout<<sz;
return 0;



}