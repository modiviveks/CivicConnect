#include<iostream>
#include<vector>
using namespace std;
int main(){
// vector< int> vec={1,2,3};
// vector<int>vec(3,0);
// cout<<vec[0];
vector<char> vec={'a','c','d','s','d'};



cout<<"size="<<vec.size();
// vec.push_back('b');
// vec.pop_back();
// vec.front();
// vec.back();
// vec.at();
//vec.empty(); to check whether vector is empty
vec.erase(vec.begin()+2);
vec.insert(vec.begin()+2,100);

cout<<"size="<<vec.size();
for(char val:vec){//for each loop
    cout<<val<<endl;
}

return 0;
}