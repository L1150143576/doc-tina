class HistoryRoute {
  constructor() {
    this.current = null;
  }
}

class VueRouter {
  constructor(options) {
    this.mode = options.mode || "hash";
    this.routes = options.routes || [];
    this.history = new HistoryRoute();
    this.routesMap = this.createMap(this.routes);
    this.init();
  }
  init() {
    if (this.mode == "hash") {
      location.hash ? "" : (location.hash = "/");
      window.addEventListener("load", () => {
        this.history.current = location.hash.slice(1);
      });
      window.addEventListener("hashchange", () => {
        this.history.current = location.hash.slice(1);
      });
    } else {
      location.hash ? "" : (location.hash = "/");
      window.addEventListener("load", () => {
        this.history.current = location.pathname;
      });
      window.addEventListener("hashchange", () => {
        this.history.current = location.pathname;
      });
    }
  }
  //遍历路由
  createMap(routes) {
    return routes.reduce((meno, current) => {
      meno[current.path] = current.component;
      return meno;
    }, {});
  }
}
VueRouter.install = function(vue) {
  vue.mixin({
    //必须使用beforeCreate生命周期，因为此时数据还没创建
    beforeCreate() {
      if (this.$options && this.$options.router) {
        this._root = this;
        this._router = this.$options.router;
        //更新数据
        vue.util.defineReactive(this, "current", this._router.history);
      } else {
        //如果当前节点没有路由则会向上找
        this._root = this.$parent._root;
      }
    },
  });
  //渲染加载页面
  vue.component("router-view", {
    render(h) {
      let current = this._self._root._router.history.current;
      let routesMap = this._self._root._router.routesMap;
      return h(routesMap[current]);
    },
  });
};
export default VueRouter;
