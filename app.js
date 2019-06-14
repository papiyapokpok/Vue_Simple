var app = new Vue({
  el: "#vue-app",
  data: {
    inputData: {
      name: "",
      salary: ""
    },
    viewData: []
  },
  methods: {
    addData:function() {
      this.viewData.push({
        vName: this.inputData.name,
        vSalary: this.inputData.salary
      });
      this.inputData.name ="",
      this.inputData.salary =""
    },
    showMessage:function() {
      alert("Submit Complete...")
    }
  },
  computed: {
    sumData:function() {
      var sum = this.viewData.reduce(function(value, data) {
        return value + Number(data.vSalary)
      }, 0)
      return sum;
    },
    avgData:function() {
      var sum = this.viewData.reduce(function(value, data) {
        return value + Number(data.vSalary)
      }, 0)
      return sum/this.viewData.length;
    }
  },
  watch: {
    //เรียก Func sumData()
    sumData: function() {
      //ทำอะไรก็ได้ตรงนี้
      this.showMessage();    
    }
  },
})