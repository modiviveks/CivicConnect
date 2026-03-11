#include<iostream>
#include<climits>
using namespace std;
int main(){
    int arr[5]={1,2,3,4,5};
    int n =5;
    int max_sum=INT_MIN;
    for(int st=0;st<n;st++){
        int currsum=0;
        for(int end=st;end<n;end++){
            currsum+=arr[end];
            max_sum=max(currsum,max_sum);
        }
      

}
cout<<max_sum;
}