#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main(){
vector<int> vec={1,3,2,5,4,6};
reverse(vec.begin(),vec.end());
reverse(vec.begin()+1,vec.begin()+3);

for(int val:vec){
    cout<<val<<endl;
}
cout<<*(max_element(vec.begin(),vec.end()));
cout<<binary_search(vec.begin(),vec.end(),5)<<endl;;
return 0;
}