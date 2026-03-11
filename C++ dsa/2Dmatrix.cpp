#include<iostream>
using namespace std;
int main(){
    int arr[5]={1,2,3,4,5};
    int matrix [4][5]={{1,2,3},{4,5,6},{7,8,9},{10,11,12}};//2d array
    int rows=4;
    int columns=5;
    //input
    for(int i=0;i<rows;i++){
        for(int j =0;j<columns;j++){
            cin>>matrix[i][j];
        }
    }
        for(int i=0;i<rows;i++){
        for(int j =0;j<columns;j++){
            cout<<matrix[i][j]<<' ';
        }
    }
    cout<<endl;

    return 0;
}
 