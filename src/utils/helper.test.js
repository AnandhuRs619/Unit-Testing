import { describe , it , test ,expect } from "vitest";
import { add } from "./helper";


describe(" test add function",()=>{
it("returns 1+1 = 2",()=>{
expect(add(1,1)).toBe(2)
});

})