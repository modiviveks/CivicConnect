#include<iostream>
using namespace std;
int bintodec(int binnum){
    int ans=0,pow=1;
     
    while (binnum>0)
    {
    int rem=binnum%10;
    ans+=rem*pow;

    binnum/=10;
    pow*= 2;


    }
    return ans;

}

int main(){
    cout<<bintodec(1010)<<endl;
    return 0;

}