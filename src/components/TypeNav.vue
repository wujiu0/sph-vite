<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="leaveShow" @mouseenter="enterShow">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" v-show="show">
        <div class="all-sort-list2" @click.prevent="goSearch($event)">
          <div v-for="(c1,index) in categoryList" :key="c1.categoryId" class="item"
               :class="{cur: currentIndex === index}"
               @mouseenter="changeIndex(index)">
            <h3>
              <a href="" :data-category-id="c1.categoryId" :data-category-name="c1.categoryName">
                {{ c1.categoryName }}
              </a>
            </h3>
            <div class="item-list clearfix"
                 :style="{display: currentIndex === index? 'block': 'none'}">
              <div v-for="c2 in c1.categoryChild" :key="c2.categoryId"
                   class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="" :data-category-id="c2.categoryId" :data-category-name="c1.categoryName">
                      {{ c2.categoryName }}
                    </a>
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a href="" :data-category-id="c3.categoryId" :data-category-name="c1.categoryName">
                        {{ c3.categoryName }}
                      </a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import {defineComponent} from 'vue';
import {mapState} from 'vuex';

export default defineComponent({
    name: 'TypeNav',
    data() {
        return {
            currentIndex: -1,
            show: true,
        };
    },
    methods: {
        /*changeIndex(index) {
          this.currentIndex = index;
        },*/
        changeIndex: _.debounce(function (index) {
            this.currentIndex = index;
            _.isEqual({}, {});
        }, 10),
        goSearch(e) {
            if (e.target.tagName === 'A') {
                const location = {
                    name: 'search',
                    query: {
                        categoryName: e.target.dataset.categoryName,
                        categoryId: e.target.dataset.categoryId,
                    },
                    params: this.$route.params,
                };
                this.$router.push(location);
            }
        },
        leaveShow() {
            this.changeIndex(-1);
            if (this.$route.name !== 'home') {
                this.show = false;
            }
        },
        enterShow() {
            this.show = true;
        },
    },
    computed: {
        ...mapState({
            categoryList: state => state.home.categoryList,
        }),
    },
    mounted() {
        if (this.$route.name !== 'home') {
            this.show = false;
        }
    },
});
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .cur {
          background-color: lightskyblue;
        }

        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

        }
      }
    }
  }
}
</style>