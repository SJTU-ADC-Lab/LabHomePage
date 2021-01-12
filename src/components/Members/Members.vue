<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(person, index) in this.peopleInfo" :key="person">
        <el-card :body-style="{ padding: '10px' }">
          <el-image :src="person.avatar" class="image"></el-image>
          <div style="padding: 15px;">
            <span>{{person.name}}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">{{person.introduce}}</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Members",
        data() {
            return{
                peopleInfo:[
                    {name:"杜文丽",avatar:require("../../assets/dwl.jpg"),introduce:"2020级研究生新生"},
                    {name:"冼健邦",avatar:require("../../assets/xjb.jpg"),introduce:"2020级研究生新生"},
                ]
            }
        }
    }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 70%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
