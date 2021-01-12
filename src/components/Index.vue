<template>
  <el-container direction="vertical">
    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="14">

          <!--          <div class="group-wrapper animated bounceInDown">-->
          <!--&lt;!&ndash;            <el-image class="group-bg" fit="fill" src=""></el-image>&ndash;&gt;-->
          <!--            <el-image class="group-ph" src=""></el-image>-->
          <!--          </div>-->
          <el-carousel :interval="6000" type="card" height="320px">
            <el-carousel-item v-for="item in this.images" :key="item.url">
              <el-image :src="item.url"></el-image>
            </el-carousel-item>
          </el-carousel>

          <el-divider></el-divider>

          <h1>区块链研究组</h1>
          <p style="text-indent:2em">
            区块链研究组成立于2015年，致力于下一代海量、异构数据的分布式存储、管理、查询、分析和机器学习系统与算法的研究和应用。通过并行与分布式数据处理和云上系统资源管理，多场景、多模态、异构计算引擎融合统一系统智能与自治化，数据安全隐私计算等关键技术，为各行业、各场景提供高效的算法支持和安全、可靠、强有力的计算引擎。

            研究组负责人刘园副教授，1986年出生于吉林长春，博士，副教授，信息安全系主任。2015年10月通过东北大学引进人才的方式任教于软件学院信息安全系。
            2014年11月毕业于新加坡南洋理工大学计算机工程学院，获得博士学位，导师是 Associate professor Jie Zhang。 2010年7月毕业于哈尔滨工业大学，获得学士学位，导师肖立伊教授。
          </p>


          <el-divider><i class="el-icon-lock"></i></el-divider>

          <h1>研究方向</h1>

          <ul>
            <li>
              <h4>共识协议</h4>
              <p>
                针对混合共识方案、新型共识协议的工程实践、共识协议的性能提升等。混合共识方案主要基于学术界的最新成果提出创新与改进。新型共识协议的工程实践包括基于随机化算法的共识协议和基于DAG模式的共识协议。共识协议的性能提升，是指通过并行化处理传统共识协议，在维持协议正确性与活性的同时，高效利用多核机器的性能，进而使得传统BFT协议的性能获得提升，并适用于其他共识协议。
              </p>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
    import MyHeader from "./MyHeader";

    export default {
        name: "Index",
        data() {
            return{
                images:[
                    {url: require("../assets/group_photo1.jpg")},
                    {url: require("../assets/group_photo2.jpg")},
                    {url: require("../assets/group_photo3.jpg")},
                ]
            }

        },
        components: {MyHeader},
    }
</script>

<style scoped>

  h4 {
    margin: 20px 0 10px 0;
  }

  p {
    line-height: 1.7;
    color: #606266;
  }


  .group-wrapper {
    height: 400px;
    width: 100%;
    margin: 10px auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .group-bg {
    height: 100%;
    width: 100%;
    position: absolute;
    filter: blur(20px);
    transform: scale(1.1);
  }

  .group-ph {
    height: 400px;
    width: 800px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
