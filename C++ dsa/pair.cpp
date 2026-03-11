#include<iostream>
#include<vector>
using namespace std;
int main(){
    // pair<int,int> p= { 1,2};
    // pair<string,int>p={"hello",5};
    // pair<int,pair<int,int>> p={1,{1,2}};
    // cout<<p.first<<endl;
    // cout<<p.second.first<<endl;
    vector<pair<int,int>> vec ={{1,2},{2,4},{3,5},{6,7}};
    vec.push_back({4,5});//insert
    vec.emplace_back(6,7);//in-place objects create 

    for(auto p :vec){

        cout<<p.first<<" "<<p.second<<endl;

    }



    return 0;
}