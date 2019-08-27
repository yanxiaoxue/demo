<template>
  <!-- Register -->
    <div class="register">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">注册</h1>
            <p class="lead text-center">创建一个新的账号</p>
            <!-- autocomplete 自动记录 -->
            <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
              <div class="form-group">
                <input
                v-model="newUser.name"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                v-model="newUser.email"
                  type="email"
                  class="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                />
                <small className="form-text text-muted"
                  >This site uses Gravatar so if you want a profile image, use a
                  Gravatar email</small
                >
              </div>
              <div class="form-group">
                <input
                v-model="newUser.password"
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div class="form-group">
                <input
                v-model="newUser.password2"
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="password2"
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "register",
  data(){
    return {
      newUser:{
        name:"",
        email:"",
        password:"",
        password2:""
      },
      errors:{}
    }
  },
  methods:{
    handleSubmit(){
      // console.log(this.newUser);
      this.$axios.post("/api/users/register",this.newUser).then(res => {
        console.log(res);
        this.$router.push("/login")
        // this.$router.push({name:"login",params:{param:"helloworld"}})
        // this.$router.replace("./login")
        // this.$router.go(-1)

      })
      .catch(err => {
      this.errors = err.response.data;
        console.log(this.errors );
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


