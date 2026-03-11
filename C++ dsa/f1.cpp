#include <iostream>
using namespace std;
int sum(int a,int b){
    return a+b;
}


//pass by value 
int main(){
    int x =4 ,y=5;
   cout<< sum(x,y)<<endl;
    return 0;
}