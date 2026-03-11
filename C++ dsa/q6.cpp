#include <iostream>
using namespace std;
int main(){

    int n =4 ;
    
    for (int i = 0; i<n ; i++){

        
        for(int j=0;j<i+1;j++){  //outer loop = kitni line print krni h 

            cout<<i+1<< " ";     //inner loop = kitne char print krne h 
            
        }
        cout<<endl;
    }
      return 0;
    
}