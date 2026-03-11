#include <iostream>
#include <climits> // Include this for INT_MAX
using namespace std;

int main() {
    int nums[] = {5, 15, 16, 17};
    int size = 4;

    int smallest = INT_MAX; // Now it will be recognized correctly
    for (int i = 0; i < size; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i];
        }
    }

    cout << "smallest = " << smallest << endl;
    return 0;
}
