#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
int main(){
    string str="Vivek Modi ";

    reverse(str.begin(),str.end());//iterators
    cout<<str<<endl;
    return 0;
}