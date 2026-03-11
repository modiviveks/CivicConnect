#include<iostream>
#include<map>
using namespace std;
int main(){
multimap<string,int> m;//if we would have used map instead of multimap then only once tv would have been printed
m.emplace("tv",100);
m.emplace("tv",100);
m.emplace("tv",100);
m.emplace("tv",100);


m.erase(m.find("tv"));
for(auto p:m){
    cout<<p.first<<" "<<p.second<<endl;
}

return 0;
}