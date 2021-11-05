<template>
  <div id="category">
    <nav-bar class="nav-bar"><template v-slot:center>商品分类</template></nav-bar>
    <div class="content">
    <tab-menu :categories="categories"
              @selectItem="selectItem"></tab-menu>
      <scroll id="tab-content" :data="[categoryData]">
      <div>
        <tab-content-category :subcategories="showSubcategory"></tab-content-category>
        <tab-control :titles="['综合','新品','销量']" @tabClick="tabClick"></tab-control>
        <TabContentDetail :categoryDetail="showCategoryDetail"></TabContentDetail>
        
      </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabMenu from './childComps/TabMenu.vue'
import TabContentCategory from './childComps/TabContentCategory.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
import TabControl from '../../components/content/tabControl/TabControl.vue';
import TabContentDetail from './childComps/TabContentDetail.vue';

import {getCategory, getSubcategory, getCategoryDetail} from "network/category";
import {POP, SELL, NEW} from "@/common/const";
import {tabControlMixin} from "@/common/mixin";

 export default {
		name: "Category",
    components: {
		  NavBar,
      TabMenu,
      Scroll,
      TabContentCategory,
        TabControl,
        TabContentDetail,
    },
    mixins:[tabControlMixin],
    data() {
		  return {
		    categories: [],
        categoryData: {
        },
        currentIndex: -1
      }
    },
    created() {
		  // 1.请求分类数据
      this._getCategory()
    },
    computed: {
		  showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail(){
        if(this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
      selectItem(index) {
        this._getSubcategories(index)
        
      },
		  _getCategory() {
		    getCategory().then(res => {
		      // 1.获取分类数据
		      this.categories = res.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0)
        })
      },
      //获取图标文字和链接方法
      _getSubcategories(index) {
        this.currentIndex = index;
		    const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail(POP)
          this._getCategoryDetail(SELL)
          this._getCategoryDetail(NEW)
        })
      },
      //获取相关商品推荐方法
      _getCategoryDetail(type) {
		    // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
		    getCategoryDetail(miniWallkey, type).then(res => {
		      // 3.将获取的数据保存下来
		      this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      /**
       * 事件响应相关的方法
       */
     
    }
	}
</script>


<style scoped>
 #category {
    height: 100vh;
  }
.nav-bar{
  background-color:var(--color-tint);
  font-weight: 700;
  color:white;
  z-index:10;
  
}
.content{
  position: absolute;
  left:0;
  right:0;
  top:44px;
  bottom:49px;
  display: flex;
  overflow: hidden;
}
 #tab-content {
    height: calc(100%-44px);
    flex: 1;
  }
</style>
