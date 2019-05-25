const state = {
  // 放置初始状态 app启动的时候的全局的初始值
  nm : '北京',
  id : 1
};

const actions = {


};

const mutations = {
  //方法
  CITY_INFO(state,payload){
    state.nm = payload.nm;
    state.id = payload.id;
  }

};

export default {
  namespace : true,
  state,
  actions,
  mutations
}