#include<iostream>
#include<string>
using namespace std;
int main(){
// string str1="hello ";
// string str2="world";

// string str3 =str1+str2;//concatenation 
// cout<<str3<<endl;
// string str1="Vivek";
// string str2="Modi";
// cout<<(str1==str2)<<endl;
// cout<<str1.length()<<endl;
// string str;
// getline(cin,str);
// cout<<"output :"<<str<<endl;
// return 0;
string str="hello world";
// for(int i=0;i<str.length();i++){
//     cout<<str[i]<<" ";
// }
for(char ch:str){
    cout<<ch<<" ";
}
cout<<endl;
return 0;
}