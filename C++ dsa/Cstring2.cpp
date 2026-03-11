#include<iostream>
#include<cstring>
using namespace std;
int main(){
    char str[100 ];
    
    cout<<"enter char array :";
    // cin>>str;
    // cout<<"output :"<<str<<endl;
    // return 0;
    cin.getline(str,12);

    for(char ch :str){
        cout<<ch<<" ";
    }

    cout<<endl;

    cout<<"output :"<<str<<endl;
    return 0;
}