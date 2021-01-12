<template>
  <el-container direction="vertical">
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">
          <h1 style="font-size: 20px">常用链接</h1>
          <div>
            <ul>
              <li> <el-link href="https://www.ccf.org.cn/ccf/contentcore/resource/download?ID=144845" target="_blank">中国计算机学会推荐国际学术会议和期刊目录 - 2019</el-link></li>
              <li> <el-link href="https://www.sjtu.edu.cn/">上海交通大学</el-link></li>
              <li> <el-link href="http://www.se.sjtu.edu.cn/">上海交通大学软件学院</el-link></li>
              <li> <el-link href="http://www.seiee.sjtu.edu.cn/seiee/index.htm">上海交通大学电子信息与电器工程学院</el-link></li>
            </ul>
          </div>
          <h1 style="font-size: 20px">合作交流</h1>
          <div>
            <ul>
              <li> <el-link href="http://www.se.sjtu.edu.cn/teacher/teacherdetail.aspx?id=18" target="_blank">吴刚</el-link></li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Links"
}
</script>

<style scoped>

</style>
