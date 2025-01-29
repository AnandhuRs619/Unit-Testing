import { describe , it , test ,expect } from "vitest";
import { add,reverseString } from "./helper";


describe(" test add function",()=>{
it("returns 1+1 = 2",()=>{
expect(add(1,1)).toBe(2)
});
it("returns 500+500 = 1000",()=>{
    expect(add(500,500)).toBe(1000)
    });
it("checking string value",()=>{
    expect(add("1","1")).toBe(0)
    });
it("checking Array value",()=>{
    expect(add(["1"],["1"])).toBe(0)
    });

})


describe('Testing reverseString', () => {
  it(' checking if string reverses',()=>{
expect(reverseString("anandhu")).toBe("uhdnana")
  });
})
