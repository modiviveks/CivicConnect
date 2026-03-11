#include<iostream>
using namespace std;
int main(){
  int n ;
  int sum=0;
  cout<<"enter the number";
  cin>>n;
  for(int i=1;i<=n/2;i++){
    if(n%i==0){
        sum+=i;
    }
  }
  if(sum==n&&n>0){
    cout<<"perfect number ";
  }
    
}

