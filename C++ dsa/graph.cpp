#include<iostream>
#include<map>
#include<list>
#include<unordered_map>
using namespace std;
class graph{
    public:
    unordered_map<int,list<int>> adj;
    void addEdge(int u,int v,bool direction){
        //direction 0->undirected
        //directiion 1 ->directed
        //create an edge from u to v 
        adj[u].push_back(v);  
        if(direction==0){
            adj[v].push_back(u);
        }
    }
    void printAdjlist(){
        for(auto i:adj){
            cout<<i.first<<" ->";
            for(auto j:i.second){
                cout<<j<<" ,";
            }
            cout<<endl;
        }
    }
};

int main(){
    int n ;
    cout<<"enter the number of nodes "<<endl;
    cin>>n;

    int m;
    cin>>m;
    cout<<"ente the number of edges"<< endl;
    graph g ;
    for(int i=0;i<m;i++){
        int u,v;
        cin>>u>>v;
        //created an undirected graph
        g.addEdge(u,v,0);


    }
   // printing graph 
    g.printAdjlist();
    return 0;
} 