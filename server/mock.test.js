jest.mock('./test/utils', () => ({
    getData: jest.fn(),
    getraw:jest.fn()
  }));
  const getData = require('./test/utils').getData;
  const processData = require('./test/process');
  const data = getData('test/data.json');
  test('mocked the process data',()=>{
    getData.mockReturnValue('mocked data')
    expect(process)
  })
  module.exports={getData,getaw}