#include<iostream>
#include<climits>
using namespace std;
int getMaxSum(int mat[][3],int rows,int columns ){
    int maxRowssum=INT_MIN;

    for(int i=0;i<rows;i++){
        int rowsumI=0;
        for(int j =0;j<columns;j++){
            rowsumI+=mat[i][j];

        }
        maxRowssum=max(maxRowssum,rowsumI);

    }

    return maxRowssum;


}
int main(){
    int matrix[3][3]={{1,2,3},{4,5,6},{7,8,9}};
    int rows=3;
    int columns=3;
    
    return 0;
}