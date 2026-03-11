class Solution {
public:
    int singleNumber(vector<int>& nums) {
     int ans=0;
     for(int val:nums){
        ans=ans^val;
     }//or bitwise operator being used;
     //0^0=0,1^1=0,0^1=1,1^0=1
     return ans;
    }
};