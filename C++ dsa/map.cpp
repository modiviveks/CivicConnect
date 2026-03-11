#include<iostream>
#include<map>
using namespace  std;
int main(){

map<string,int> m;
m["tv"]=100;
m["laptop"]=100;
m["headphones"]=50;
m["tablet"]=120;
m["watch"]=50;

m.insert({"camera",25});//or emplace
m.erase("tv");

for(auto p: m){
    cout<<p.first<<" "<<p.second<<endl;
}

cout<<"count="<<m.count("laptop")<<endl;
cout<<m["laptop"]<<endl;

if(m.find("camera")!=m.end()){
    cout<<"found\n";
}else{
    cout<<"not found \n";
}


    return 0;
}