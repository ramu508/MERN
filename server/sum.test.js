const { sum }=reqire('./test/sum')
test('function should return 3',()=>{
    expect(sum(1,2)).toBe(3)
});
test('object in array',()=>{
    const data={one:1}
    data['two']=2
    expect(data).toEqual({one:1,two:2})
})
test('Value is Null',()=>{
    const n=null;
    expect(n).toBeNull();
})
test('Value is defined',()=>{
    const bool=true
    expect(bool).toBeTruthy();

})