#include<iostream>

using namespace std;
 
int main(){

int n =3;
int num=1;
for (int i=0 ;i<n ; i++  ){   //outer loop = kitni line print krwani h 

    for (int j =0;j<n;j++){

        cout<<num<<" ";          // inner loop = kitne char print krwane h 
        num=num+1;
    }
    cout<<endl;
}
   return 0;

}