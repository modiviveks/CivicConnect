#include<iostream>
using namespace std;
class node{
public:
int data;
node* next;

node(int val){
    data=val;
    next=NULL;
}
};

class list{
    node* head;
    node* tail;


public:
    list(){
        head=tail=NULL;
    }
    void push_front(int val){
        node* newnode =new node(val) ;
        if(head==NULL){
            head=tail=newnode;
            return ;
        }else{
            newnode->next=head;
            head=newnode;
        }
    }

    void push_back(int val){
        node* newnode=new node(val);
        if(head==NULL){
            head=tail=newnode;
            return ;
        }else{
            tail->next=newnode;
            tail=newnode;

        }
    }

    void pop_front(){
        
    }




    void printll(){
        node*temp=head;
        while(temp!=NULL){
            cout<<temp->data<<" ";
            temp=temp->next;
        }
        cout<<"NULL"<<endl;
    }


};



int main(){



}