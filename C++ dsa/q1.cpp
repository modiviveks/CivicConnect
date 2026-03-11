#include <iostream>

using namespace std;

int main()
{
    int n=4;

    for (int i=1;i<=n;i++){        // if want to print * pattern just output *

        for (int j =1;j<=n;j++){    //outer loops=kitni line print krwani h

            cout<<j;                  //inner loop = ek line m kitne chracters print krwane  h 
        }
        cout<<endl;
    }

   return 0;
}