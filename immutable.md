## 熟读immutablejs文档

http://facebook.github.io/immutable-js/

我们用到的也只有下面三种数据结构

* Record
* Map
* List

## 掌握以下函数

* fromJS
* toJS
* merge
* update
* delete
* clear
* set
* get

## 带in的函数和不带in的有什么区别？

如： get, getIn, set, setIn

## 带with的函数和不带with的函数有什么区别？

## 掌握以下集合操作函数

* map
* reduce
* every
* filter
* forEach
* first
* last
* find
* includes
* some
* count
* take

### 请说出map和forEach的区别？

## 嵌套结构和扁平结构的区别

### 观察以下代码的结果

```
let list = Immutable.List();
list = list.set('obj', {name: 'ywen', arr: ['first']});
list.get('obj');
list.getIn(['obj', 'arr', 0]);

let list = Immutable.fromJS({'obj': {name: 'ywen', arr: ['first']}});
list.get('obj');
list.getIn(['obj', 'arr', 0]);
```

### 看出上面代码的区别了吗？fromJS得到的是一个嵌套的Immutable对象

### 我们一律使用fromJS,并且除了打印log以外，不要使用toJS!!!!
