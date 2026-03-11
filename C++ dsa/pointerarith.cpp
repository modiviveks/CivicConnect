#include<iostream>
using namespace std;
int main(){
int arr[]={1,6,2,5,39};
int a =10;
// int* ptr= &a;
int*ptr2;
int* ptr1=ptr2+2;

cout<<*arr<<endl;
cout<<*(arr+1)<<endl;
cout<<*(arr+2)<<endl;
// cout<<ptr<<endl;
// ptr++;
// cout<<ptr<<endl;//add 1 integer that is 1byte  
// cout<<ptr1-ptr2<<endl;
return 0;
}