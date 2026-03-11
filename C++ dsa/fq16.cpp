#include <iostream>
using namespace std;

int main(){
int num=145;
int digsum=0;
while (num>0)//done by me [identify your mistake ]

{
   int lastdig=num%10;
   num/=10;
    digsum+=lastdig;
//   cout<<digsum;this was the mistake i was doing previousl
}
cout<<digsum;

}






