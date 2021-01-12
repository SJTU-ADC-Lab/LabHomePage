<template>
  <el-container direction="vertical">
    <el-main class="main-content">

      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">
          <h1>Achievements</h1>

          <ul>
            <li v-for="item in books" class="item">
              {{ item }}
            </li>
          </ul>

          <el-divider><i class="el-icon-notebook-2"></i></el-divider>
          <h1>Projects</h1>
          <ul>
            <li v-for="item in projects" class="item">
              {{ item }}
            </li>
          </ul>
          <el-divider><i class="el-icon-copy-document"></i></el-divider>
          <h1>Papers</h1>
          <h3>2020</h3>
          <ul>
            <li v-for="item in papers2020" class="item">
              {{ item }}
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Achievements",
  data() {
    return {
      books: [
        'Yadoop: an Elastic Resource Management Solution of YARN, IEEE SOSE2015, Mar30-Apr3, San Francisco,USA',
        'StreamBench: Towards Benchmarking Modern Distributed Stream Computing Framework, IEEE/ACM UCC2014, Page69-78, Dec8-11, 2014, London',
        'A decentralized approach for mining event correlations in distributed system monitoring, J. Parallel Distrib. Comput (JPDC). 73(3), 330-340, 2013',
        'CAR: Securing PCM Main Memory System with Cache Address Remapping, the 18th IEEE International Conference on Parallel and Distributed Systems (ICPADS), 17-19 Dec 2012, 628-635, Singapore, 2012.',
        'Improving PCM Endurance with Randomized Address Remapping in Hybrid Memory System, 2011 IEEE International Conference on Cluster Computing (CLUSTER), 26-30 Sept.2011, 503-507, Austin, USA, 2011.',
        'Detecting Resource Leaks through Dynamical Mining of Resource Usage Patterns, The IEEE/IFIP International Conference on Dependable Systems and Networks（DSN）, June27-30 2011, HongKong',
        'Cost Minimization with HPDFG and Data Mining for Heterogeneous DSP, J Sign Process Syst DOI 10.1007/s11265-010-0546-x, Springer, 2010，SCI',
        'Towards the efficiency of ontology-based context reasoning in virtual computing environment，ICPADS2010, Dec.8-10, Shanghai, China, EI',
        'Fault Tolerant Data Collection in Heterogeneous Intelligent Monitoring Networks, 5th IEEE International Conference on Networking, Architecture, and Storage (NAS2010), JULY 15-17 Macau, Macau SAR, China',
        'Energy Minimization and Latency Hiding for Heterogeneous Parallel Memory Modules, The 15th International Conference on Parallel and Distributed Systems(ICPADS2009), Page 503-509, Dec.8-11, Shenzhen',
      ],
      papers2020: [
        '1', '2'
      ],
      projects: [
        '国家863项目“可信的国家软件资源共享协同生产环境”二级测试子课题 （2011年）',
        '国家863项目“基于本体的网构软件环境感知体系与相关技术研究”（2009年-2010年）',
        '国家863项目“虚拟手术训练系统中视、听、触觉交互技术的实现"（2007年-2008年）',
        '国家自然科学基金项目“可成长的分布式系统体系结构关键技术研究”（2002年-2004年）',
        '国家自然科学基金项目“面向混合内存的系统软件机理与关键技术研究”（2015年-2017年）',
        '国家973项目“高效可信的虚拟计算环境基础研究”二级子课题（2011年-2015年）',
        '横向合作项目“医疗大数据处理与分析技术研究及开发”（2015年-2017年）',
        '横向合作项目“智慧环保监测云与数据分析系统”（2013年-2016年）',
        '横向合作项目“零售业ERP系统”、“零售业O2O支撑系统”、“零售业大数据分析与智能推荐系统”（2006年至今）',
        '横向合作项目“智慧工厂大数据集成与可视化系统”（2016年-2017年）'
      ]
    }
  },
}
</script>

<style scoped>
.item {
  margin: 10px 0;
}


li {
  color: #606266;
  text-align: justify;
  text-justify: inter-ideograph
}

.main-content {
  min-height: calc(100vh - 130px) /* 160px = header 70px + footer 60px */
}
</style>
