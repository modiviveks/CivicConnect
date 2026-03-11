#include<iostream>
using namespace std;
int dectobin(int decnum){
int ans=0, pow=1;

while(decnum>0){
int rem = decnum%2 ;
decnum = decnum/2;
ans += (rem*pow);

pow=pow*10;//problem in this code has to be identified
}           //now its running properly 
return ans;
}

int main(){



for (int i =0;i<10;i++)
{
  cout<<dectobin(i)<<endl;
}


return 0;
}