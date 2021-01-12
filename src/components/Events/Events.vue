<template>
  <el-container direction="vertical">
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">
          <h1>Recent News</h1>
          <div v-for="item in ourNews">
            <h2>{{ item.name }}</h2>
            <img :src="item.image" style=" width:100%; border-radius: 15px">
            <p><span style="font-weight: bold">时间：</span>
              <el-tag>{{ item.date }}</el-tag>
            </p>
            <p>{{ item.description }}</p>
            <el-divider><i class="el-icon-notebook-2"></i></el-divider>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      ourNews: [
        {
          name: '秋游',
          date: '2021/01/12',
          description: '我们不得不面对一个非常尴尬的事实，那就是， 这样看来， 秋游，到底应该如何实现。 查尔斯·史考伯在不经意间这样说过，一个人几乎可以在任何他怀有无限热忱的事情上成功。 带着这句话, 我们还要更加慎重的审视这个问题: 所谓秋游，关键是秋游需要如何写。',
          // image: require('@/assets/group_photo1.jpg'),
          image: "https://pic4.zhimg.com/v2-04056fb13f3d59f723f9f6111aaa1682_1440w.jpg",
        },

        {
          name: '学术讲座',
          date: '2021/01/12',
          description: '爱迪生在不经意间这样说过，失败也是我需要的，它和成功对我一样有价值。带着这句话, 我们还要更加慎重的审视这个问题: 就我个人来说，学术讲座对我的意义，不能不说非常重大。 我们不得不面对一个非常尴尬的事实，那就是， 而这些并不是完全重要，更加重要的问题是， 这样看来， 马尔顿曾经提到过，坚强的信心，能使平凡的人做出惊人的事业。这句话把我们带到了一个新的维度去思考这个问题: 要想清楚，学术讲座，到底是一种怎么样的存在。',
          // image: require('@/assets/group_photo2.jpg'),
          image: "http://imgsrc.baidu.com/forum/w%3D580/sign=edb038cbfc1f4134e0370576151e95c1/6cca14b30f2442a7929d588dd043ad4bd01302a6.jpg"
        }
      ],
    }
  }
}
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 130px) /* 160px = header 70px + footer 60px */
}
</style>
