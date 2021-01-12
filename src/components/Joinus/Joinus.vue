<template>
  <el-container direction="vertical">
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">
          <img src="@/assets/wewantyou.jpg" style="width: 100%; border-radius: 10px"/>

          <el-divider><i class="el-icon-user"></i></el-divider>
          <h1>招收对象</h1>
          <p>硕士研究生和高年级本科生。</p>
          <ul>
            <li>
              <h4>科研类</h4>
              <p> 采用1+1+1的模式：为每1位优秀的研究生配备1位校外导师（国外优秀的研究学者，或企业研究人员，或校内高校优秀学者）和1位高年级的本科生</p>
            </li>

            <li>
              <h4>竞赛项目类</h4>
              <p>科研培预，以赛促研：本组每年5月份和11月份面向大二大三本科生招募，经过遴选后，按照能力和兴趣进入科研型课题组，培育0.5-1年，开始申报项目或组队参加比赛.</p>
            </li>
          </ul>

          <p>
            感兴趣的同学请发送简历至
            <el-link href="mailto:dr.wugang@sjtu.edu.cn" target="_blank">dr.wugang@sjtu.edu.cn</el-link>
          </p>
          <p> Welcome to join us! 🙂 </p>
          <el-divider><i class="el-icon-message"></i></el-divider>

        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Joinus"
}
</script>

<style scoped>

</style>
