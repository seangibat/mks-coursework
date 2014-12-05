var LinkedList = (function(){

  var LL = function(){
    this.start = undefined;
    this.end = undefined;
    this.length = 0;
  };

  LL.prototype.makeNode = function(value){
    return {
      value: value,
      next: undefined,
      prev: undefined
    }
  };

  LL.prototype.push = function(value){
    var holder;

    if (this.start === undefined) {
      this.start = this.makeNode(value);
      this.end = this.start;
    }
    else {
      holder = this.end;
      this.end.next = this.makeNode(value);
      this.end = this.end.next;
      this.end.prev = holder;
    }

    this.length++;

    return this;
  }

  LL.prototype.unshift = function(value){
    var holder;

    if (this.start === undefined) {
      this.start = this.makeNode(value);
      this.end = this.start;
    }
    else {
      holder = this.start;
      this.start.prev = this.makeNode(value);
      this.start = this.start.prev;
      this.start.next = holder;
    }

    this.length++;

    return this;
  }

  LL.prototype.pop = function(){
    var holder = this.end;

    if (this.end === undefined){
      return undefined;
    }

    this.end = this.end.prev;
    holder.next = undefined;
    holder.prev = undefined;
    this.length -= 1;

    if (this.end === undefined){
      this.start = undefined;
      return holder.value;
    }

    this.end.next = undefined;

    return holder.value;
  };

  LL.prototype.shift = function(value){
    var holder = this.start;
    
    if (this.start === undefined){
      return undefined;
    }

    this.start = this.start.next;
    holder.next = undefined;
    holder.prev = undefined;
    this.length -= 1;

    if (this.start === undefined){
      this.end = undefined;
      return holder.value;
    }

    this.start.prev = undefined;

    return holder.value;
  };

  LL.prototype.concat = function(list){
    var list = list.copy();
    if (this.start === undefined && this.end === undefined){
      var _this = this;
      _this = list;
      return list;
    }
    else if (list !== undefined && list.start !== undefined && list.end !== undefined){
      this.end.next = list.start;
      list.start.prev = this.end;
      this.end = list.end;
      this.length += list.length;
    }
    return this;
  };

  LL.prototype.concatToStart = function(list){
    var list = list.copy();
    if (this.start === undefined && this.end === undefined){
      var _this = this;
      _this = list;
      return list;
    }
    else if (list !== undefined && list.start !== undefined && list.end !== undefined){
      this.start.prev = list.end;
      list.end.next = this.start;
      this.start = list.start;
      this.length += list.length;
    }
    return this;
  };

  LL.prototype.peekStart = function(){
    return this.start.value;
  };

  LL.prototype.peekEnd =  function(){
    return this.end.value;
  };

  LL.prototype.forEach = function(callback){
    var item = this.start;
    while (item !== undefined) {
      callback(item);
      item = item.next;
    }
  };

  LL.prototype.toString = function(){
    var str = "";
    this.forEach(function(item){
      str += item.value + ", ";
    });
    str = str.substring(0,str.length-2);
    return str;
  };

  LL.prototype.valueOf = LL.prototype.toString;

  LL.prototype.copy = function(){
    var l = new LL();
    this.forEach(function(item){
      l.push(item.value);
    });
    return l;
  };

  LL.prototype.filter = function(callback){
    var l = new LL();
    this.forEach(function(item){
      if (callback(item))
        l.push(item.value);
    });
    return l;
  };

  LL.prototype.valueAtIndex = function(index){
    var item = this.start, n=0;
    while (item !== undefined && n++ < index){
      item = item.next;
    }
    return item ? item.value : undefined;
  };

  LL.prototype.indexOf = function(value){
    var item = this.start, n=0;
    while (item !== undefined){
      if (item.value == value)
        return n;
      item = item.next;
      n++;
    }
    return undefined;
  };



  return LL;
})();

module.exports = LinkedList;
