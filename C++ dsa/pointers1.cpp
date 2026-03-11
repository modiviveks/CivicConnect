#include<iostream>
using namespace std;
int main(){
    int a =5;
    int* p=&a;
    int** q=&p;

    cout<<*p<<endl;
    cout<<**q<<endl;
    cout<<p<<endl;//dereference operator
    cout<<*q<<endl;
    cout<<&a<<endl;
}