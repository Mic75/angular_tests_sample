describe("Bigger factory", function(){

  beforeEach(module('autotest'));

  it("returns true when first params is bigger than the second", inject(function(bigger){
    expect(bigger(6,5)).toEqual(true);
  }));

  it("returns false when first params is lower than the second", inject(function(bigger){
    expect(bigger(5,6)).toEqual(false);
  }));

  it("returns false when first params is equal to the second", inject(function(bigger){
    expect(bigger(6,6)).toEqual(false);
  }));

})
