#include<iostream>
using namespace std;
// //  void changeA(int* ptr ){//pass by reference 
// //     *ptr=20;
//  }
void changeA(int &b){//pass by reference using alias  
    b=20;
}
int main(){
   int a=10;
   changeA(a);
   cout<<a<<endl;//for pass by reference &a 
   return 0;
}