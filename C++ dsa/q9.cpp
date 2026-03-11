#include <iostream>
using namespace std;
int main(){

    int n =4 ;
    int num =1;                //floyds triangle
    for (int i = 0; i<n ; i++){

        
        for(int j=0;j<i+1;j++){  //outer loop = kitni line print krni h 

            cout<<num<< " ";     //inner loop = kitne char print krne h 
            num=num+1;
        }
        cout<<endl;
    }
      return 0;
    
}