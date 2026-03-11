#include<iostream>
#include<vector>
using namespace std;
void bubblesort(int arr[] ,int n ){//O(n^2)

    for (int i =0;i<n-1;i++){//n
        bool isSwap =false;
        for(int j =0;j<n-i-1;j++){//n*n
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
                isSwap=true;
            }
        }

        if(!isSwap){//array is already stored
            return;
        }
    }
}
void selectionsort(int arr[],int n ){
    for(int i=0;i<n;i++){//n-1 last element will not get printed 
        int smallestIdx = i;//unsorted part starting 
        for(int j =i+1;j<n;j++){
            if(arr[j]<arr[smallestIdx]){
                smallestIdx=j;
            }
        }

        swap(arr[i],arr[smallestIdx]);
    }}
void insertionsort(int arr[],int n ){
    for(int i =1;i<n;i++){
        int curr=arr[i];
        int prev =i-1;

        while(prev>=0&&arr[prev]>curr){
            arr[prev+1]=arr[prev];
            prev--;
        }
        arr[prev+1]=curr;
    }
}

void printArray(int arr[],int n ){
    for(int i=0;i<n-1;i++){
        cout<<arr[i]<<" ";

    }
    cout<<endl;
}

int main(){
    int n =5;
    int arr[]={4,1,5,2,3};

    insertionsort(arr,n);
    printArray(arr,n); 
    return 0;
}