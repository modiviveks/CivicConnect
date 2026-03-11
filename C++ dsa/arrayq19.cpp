#include<iostream>
#include<climits>
using namespace std;
int main(){
int nums[]={1,5,6,8,4};
int largest =INT_MIN;
int size=5;
int thisindex;
for (int i=0;i<size;i++){
// largest=max(nums[i],largest);
if(nums[i]>largest){
    largest=nums[i];
     thisindex=i;//index of laregst number 
}

}

cout<<thisindex<<endl;

return 0;
}