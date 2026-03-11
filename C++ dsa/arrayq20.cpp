#include<iostream>//linear search 
using namespace std;
int linearSearch(int arr[],int target,int sz){

for(int i=0;i<sz;i++){
    if(arr[i]==target){
        return i; //found
    }

    

}
return -1   ; //means not found
}
int main(){
int arr[]={5,7,25,42,16};
int target = 25;
int sz=5;
cout<<linearSearch(arr,target,sz);

}









