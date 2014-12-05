var LinkedList = require('../linkedList.js');

describe("Linked List: ", function(){
  var ll;

  beforeEach(function(){
    ll = new LinkedList();
  });

  describe("a new blank list", function(){
    it("contains an undefined start and end", function(){
      expect(ll.start).toBeUndefined();
      expect(ll.end).toBeUndefined();
    });

    it("has no length", function(){
      expect(ll.length).toEqual(0);
    });
  });

  describe("a one element list", function(){
    beforeEach(function(){
      ll.push(1);
    });

    it("has the same start and end",function(){
      expect(ll.start).toEqual(ll.end);
    });
    it("has a length of one",function(){
      expect(ll.length).toEqual(1);
    });
  });

  describe("a list of five elements", function(){
    beforeEach(function(){
      ll.push(1);
      ll.push(2);
      ll.push(3);
      ll.push(4);
      ll.push(5);
    });

    it("has a length of five", function(){
      expect(ll.length).toEqual(5);
    });

    it("can pop elements off the end", function(){
      var result = ll.pop();
      expect(result).toEqual(5);
      result = ll.pop();
      expect(result).toEqual(4);
      ll.pop();
      result = ll.pop();
      expect(result).toEqual(2);
      ll.pop();
      result = ll.pop();
      expect(result).toBeUndefined();
    });
  });

  describe("unshifting", function(){
    it("can add one element to an empty list", function(){
      expect(ll.length).toEqual(0);
      ll.unshift(99);
      expect(ll.length).toEqual(1);
      expect(ll.start.value).toEqual(99);
      expect(ll.end.value).toEqual(99);
    });

    it("adds elements to the start of the list", function(){
      ll.unshift(1);
      ll.unshift(2);
      ll.unshift(3);
      expect(ll.start.value).toEqual(3);
      expect(ll.end.value).toEqual(1);
    });

    it("can add elements to en emptied list", function(){
      ll.unshift(2);
      ll.pop();
      ll.unshift(3);
      expect(ll.start).toEqual(ll.end);
      expect(ll.length).toEqual(1);
      expect(ll.start.value).toEqual(3);
    });
  });

  describe("shifting", function(){
    beforeEach(function(){

    });

    it("can remove an element from the start", function(){

    });
  });
});


// describe
// * Noun - function, constructor, module
// context
// * scenario
// it
// * Exact tests
// * behaviors
// * state

// describe
// * LinkedList
// * add

// context
// * with no elements

// it
// * alters the length
// * changes the head
// * changes the tail