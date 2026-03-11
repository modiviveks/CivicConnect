#include<iostream>
using namespace std;
void reversearray(int arr[],int sz){
int start=0,end=sz-1;
while(start<end){//mistake was end ki jagah sz lga rha tha 
swap(arr[start],arr[end]);
start++;
end--;

}
}//find the mistake in this code
int main(){
int arr[]={4,2,6,9,7,3,8};
int sz=7;


reversearray(arr,sz);

for (int i=0;i<sz;i++){
cout<< arr[i]<<endl;
}

return 0;
}