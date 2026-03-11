#include <iostream>
using namespace std;

int primenumber(int n ){
    for (int i=2;i*i<=n;i++)//factors repeat
    //eg:
//12= 1*12,2*6,3*4,4*3,6*2,12*1 therefore i<root(n)
        

    
        {
          if (n%i==0){
            return false;
        }
      
    }
    return true;
}




int main(){
 cout<<primenumber(2);
}



