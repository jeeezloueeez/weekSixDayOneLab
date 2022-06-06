const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide
} = require('./functions')

describe('Functions tests', ()=>{
  test('Should return the number value 2', ()=>{
    expect(returnTwo()).toBe(2);
  });

  test('should return proper greeting', ()=>{
    expect(greeting('James')).toBe('Hello, James.');
    expect(greeting('Jill')).toBe('Hello, Jill.');
  });

})

describe('Math functions', ()=>{
  test('should add correctly', ()=>{
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
  });

  test('should subtract correctly', ()=>{
    expect(subtract(8, 6)).toBe(2);
    expect(subtract(500, 400)).toBe(100);
  });

  test('should multiply correctly', ()=>{
    expect(multiply(98, 5)).toBe(490);
    expect(multiply(5236, 5498)).toBe(28787528);
  });

  test('should divide correctly', ()=>{
    expect(divide(50, 10)).toBe(5);
    expect(divide(854623, 5486)).toBe(155.78253736784544);
  });

})


