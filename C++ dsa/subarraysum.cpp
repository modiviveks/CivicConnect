#include<iostream>
#include<climits>
using namespace std;
int main(){
int n =5;
int arr[5]={1,6,8,4,3};
int maxsum=INT_MIN;

for (int st=0;st<n;st++){
    int currsum=0;
    for (int end=st;end<n;end++){
        currsum+=arr[end];
        maxsum=max(currsum,maxsum);

    }
}
cout<<"max subarray sum="<<maxsum<<endl;

return 0;

}