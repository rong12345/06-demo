# little-demo

## h2

### h3

#### h4

##### h5

###### h6

p 1606脱产小demo

1. 草莓
2. 樱桃
3. 桃子


- 海绵宝宝
  - 痞老板
- 派大星
- 蟹黄堡

[百度](http://www.baidu.com)

![显示不出来](http://obmf232cc.bkt.clouddn.com/home1.jpg)

**加粗**
__加粗__

*倾斜* _倾斜_

***
___

```js
console.log('aaa')
```

```js
import axios from 'axios';

function searchGit(add){
    let address = `https://api.github.com/users/&{add}`;
    return axios.get(address)
    .then((res) => (
      {getData:res.data}
    ))
    .catch(function (error) {
      alert(error);
    });
}
```

`内容有背景色`

| Header One     | Header Two     | 乌拉拉 |
| :------------- | :------------- | :--------- |
| Item One       | Item Two       | 乌拉乌拉嘞 |
| Item One       | Item Two       | 乌拉乌拉嘞 |
| Item One       | Item Two       | 乌拉乌拉嘞 |
| Item One       | Item Two       | 乌拉乌拉嘞 |
