#include<iostream>
#include<vector>
using namespace std;
int main(){
    vector<int> vec ={1,2,3,4,5};

    vector<int> :: iterator it;
    //   vector<int> :: reverse_iterator it;
     for(it=vec.begin();it!=vec.end();it++){

        cout<<*(it)<<" ";
     }
    // for(auto it=vec.rbegin();it!=vec.rend();it++){
    //     cout<<*(it)<<endl;
    // }
   

    cout<<endl;

    return 0;
}
