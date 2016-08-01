console.log('ho');
describe('stuff', function() {
  it('should pass this stuff', function() {
    expect(window.r).to.be(undefined);
    expect({ a: 'b' }).to.eql({ a: 'b' })
    expect(5).to.be.a('number');
    expect([]).to.be.an('array');
    expect(window).not.to.be.an(Image);
  });
  it('should not pass this stuff', function() {
    throw new Error('toast');
  })
});
console.log('hoo');
