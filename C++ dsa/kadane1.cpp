#include <iostream>
using namespace std;
int main(){
int n=5;
int arr[5]={1,2,3,9,60};

//print all subarrays through brute force approach
//subarrays are continuous part of arrays  
for (int st=0;st<n;st++){   
    for (int end=st;end<n;end++){
        for(int i=st;i<=end;i++){
            cout<<arr[i];
        }
        cout<<" ";
    }
    cout<<endl;
}
return  0;

// O(n):time complexity

}