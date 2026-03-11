#include<iostream>
using namespace std;
int main(){
    int a,b,c,i,n;
    cout<<"enter the number you want to print in fibonacci";
    cin>>n;
    a=0;
    b=1;
    c=0;
    for(int i=0;i<n;i++){
        cout<<c<<endl;
        a=b;
        b=c;
        c=a+b;
    }
    return 0;
}