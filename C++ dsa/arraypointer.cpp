#include<iostream>
using namespace std;
int main(){
    int arr[]={1,2,3,8,6,9};

    cout<<*arr<<endl;//pointer =1
    return 0;
    int a=10,b=5;
    int* ptr=&a;
    ptr=&b;
    return 0;
}