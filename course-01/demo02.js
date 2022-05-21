const actionMap = {
  'men-1': () => {
    // do analysis thing 
  },
  'men-2': () => {
    // do analysis thing 
  },
  'men-3': () => {
    // do analysis thing 
  },
  'women-1': () => {
    // do analysis thing 
  },
  'women-2': () => {
    // do analysis thing 
  },
  'women-3': () => {
    // do analysis thing 
  }
}

const sexMap = {
  'men': actionMap,
  'women': actionMap
}

/**
 * 购物
 * @param { string } sex // men：男用户 women：女用户
 * @param { string } type // 1：西装  2：休闲装 3：T恤
 */
function shopping(sex, type) {
  sexMap[sex][`${sex}-${type}`]();
}