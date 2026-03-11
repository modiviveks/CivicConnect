#include<iostream>
using namespace std;
void fibonacci(int n ){
    int a =0,b=1,c;
    cout<<"fibonacci numbers:";
    for(int i =0;i< n;i++){
        cout<<a;
        c=a+b;
        a=b;
        b=c;
    }
   cout<<endl;
}
int main(){
int n ;
cout<<"enter the number of terms ";
cin>>n;
fibonacci(n);
return 0;

}