const {fetchData,Mydata} = require('./test/async');

test('data expected is admin', (done) => {
  fetchData((data) => {
    try {
      expect(data).toBe('admin');
      done();
    } catch (error) {
      done(error);
    }
  });
});
test('Callback my data',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(10001);
            done()
        }catch(err){
            done(err);
        }
    }
    Mydata(callback);
})