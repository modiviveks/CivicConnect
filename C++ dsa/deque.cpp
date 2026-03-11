#include<iostream>
#include<deque>
using namespace std;

int main(){
deque<int> d={1,2,3};
for(int val:d){
    cout<<val<<" ";

}
cout<<endl;
cout<<d[2]<<endl;
return 0;
}
