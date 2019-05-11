import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import $ from "jquery";
import io from "socket.io-client";

var myChart_1 = echarts.init(document.getElementById("charts_1"));
var myChart_2 = echarts.init(document.getElementById("charts_2"));
var myChart_3 = echarts.init(document.getElementById("charts_3"));
var myChart_4 = echarts.init(document.getElementById("charts_4"));
// 绘制图表

myChart_1.setOption({
  title: {
    text: "预测值"
  },
  tooltip: {
    trigger: "axis"
  },
  xAxis: {
    data: []
  },
  yAxis: {
    splitLine: {
      show: false
    }
  },
  toolbox: {
    left: "center",
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      restore: {},
      saveAsImage: {}
    }
  },
  dataZoom: [
    {
      startValue: "0"
    },
    {
      type: "inside"
    }
  ],
  visualMap: {
    top: 10,
    right: 10,
    pieces: [
      {
        gt: 0,
        lte: 50,
        color: "#096"
      },
      {
        gt: 50,
        lte: 100,
        color: "#ffde33"
      },
      {
        gt: 100,
        lte: 150,
        color: "#ff9933"
      },
      {
        gt: 150,
        lte: 200,
        color: "#cc0033"
      },
      {
        gt: 200,
        lte: 300,
        color: "#660099"
      },
      {
        gt: 300,
        color: "#7e0023"
      }
    ],
    outOfRange: {
      color: "#999"
    }
  },
  series: {
    name: "预测值",
    type: "line",
    data: [],
    markLine: {
      silent: true,
      data: [
        {
          yAxis: 50
        },
        {
          yAxis: 100
        },
        {
          yAxis: 150
        },
        {
          yAxis: 200
        },
        {
          yAxis: 300
        }
      ]
    }
  }
});

myChart_2.setOption({
  title: {
    text: "真实值"
  },
  tooltip: {
    trigger: "axis"
  },
  xAxis: {
    data: []
  },
  yAxis: {
    splitLine: {
      show: false
    }
  },
  toolbox: {
    left: "center",
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      restore: {},
      saveAsImage: {}
    }
  },
  dataZoom: [
    {
      startValue: "0"
    },
    {
      type: "inside"
    }
  ],
  visualMap: {
    top: 10,
    right: 10,
    pieces: [
      {
        gt: 0,
        lte: 50,
        color: "#096"
      },
      {
        gt: 50,
        lte: 100,
        color: "#ffde33"
      },
      {
        gt: 100,
        lte: 150,
        color: "#ff9933"
      },
      {
        gt: 150,
        lte: 200,
        color: "#cc0033"
      },
      {
        gt: 200,
        lte: 300,
        color: "#660099"
      },
      {
        gt: 300,
        color: "#7e0023"
      }
    ],
    outOfRange: {
      color: "#999"
    }
  },
  series: {
    name: "真实值",
    type: "line",
    data: [],
    markLine: {
      silent: true,
      data: [
        {
          yAxis: 50
        },
        {
          yAxis: 100
        },
        {
          yAxis: 150
        },
        {
          yAxis: 200
        },
        {
          yAxis: 300
        }
      ]
    }
  }
});

myChart_3.setOption({
  title: {
    text: "误差"
  },
  tooltip: {
    trigger: "axis"
  },
  xAxis: {
    data: []
  },
  yAxis: {
    splitLine: {
      show: false
    }
  },
  toolbox: {
    left: "center",
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      restore: {},
      saveAsImage: {}
    }
  },
  dataZoom: [
    {
      startValue: "0"
    },
    {
      type: "inside"
    }
  ],
  visualMap: {
    top: 10,
    right: 10,
    pieces: [
      {
        gt: 0,
        lte: 50,
        color: "#096"
      },
      {
        gt: 50,
        lte: 100,
        color: "#ffde33"
      },
      {
        gt: 100,
        lte: 150,
        color: "#ff9933"
      },
      {
        gt: 150,
        lte: 200,
        color: "#cc0033"
      },
      {
        gt: 200,
        lte: 300,
        color: "#660099"
      },
      {
        gt: 300,
        color: "#7e0023"
      }
    ],
    outOfRange: {
      color: "#999"
    }
  },
  series: {
    name: "误差",
    type: "line",
    data: [],
    markLine: {
      silent: true,
      data: [
        {
          yAxis: 50
        },
        {
          yAxis: 100
        },
        {
          yAxis: 150
        },
        {
          yAxis: 200
        },
        {
          yAxis: 300
        }
      ]
    }
  }
});

myChart_4.setOption({
  title: {
    text: "准确度"
  },
  tooltip: {
    trigger: "axis"
  },
  xAxis: {
    data: []
  },
  yAxis: {
    splitLine: {
      show: false
    }
  },
  toolbox: {
    left: "center",
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      restore: {},
      saveAsImage: {}
    }
  },
  dataZoom: [
    {
      startValue: "0"
    },
    {
      type: "inside"
    }
  ],
  visualMap: {
    top: 10,
    right: 10,
    pieces: [
      {
        gt: 0,
        lte: 50,
        color: "#096"
      },
      {
        gt: 50,
        lte: 100,
        color: "#ffde33"
      },
      {
        gt: 100,
        lte: 150,
        color: "#ff9933"
      },
      {
        gt: 150,
        lte: 200,
        color: "#cc0033"
      },
      {
        gt: 200,
        lte: 300,
        color: "#660099"
      },
      {
        gt: 300,
        color: "#7e0023"
      }
    ],
    outOfRange: {
      color: "#999"
    }
  },
  series: {
    name: "准确度",
    type: "line",
    data: [],
    markLine: {
      silent: true,
      data: [
        {
          yAxis: 50
        },
        {
          yAxis: 100
        },
        {
          yAxis: 150
        },
        {
          yAxis: 200
        },
        {
          yAxis: 300
        }
      ]
    }
  }
});

var uploadFile = function(event) {
  event.preventDefault();
  var formData = new FormData($("#inputForm")[0]);
  /* var name = $("input").val();
  console.log($("#file")[0]);
  formData.append("file", $("#file")[0].files[0]);
  formData.append("name", name);
   */ $.ajax(
    {
      url: "/upload",
      data: formData,
      type: "POST",
      // 告诉jQuery不要去处理发送的数据
      processData: false,
      // 告诉jQuery不要去设置Content-Type请求头
      contentType: false,
      beforeSend: function() {
        console.log("正在进行，请稍候");
      },
      success: function(responseStr) {
        console.log("成功" + responseStr);
      },
      error: function(responseStr) {
        console.log("error");
      }
    }
  );
};

$("#inputForm").submit(uploadFile);

var data_1 = [];
var data_2 = [];
var data_3 = [];
var data_4 = [];
var xAxis = [];
var count = 0;

$(document).ready(function() {
  var socket = io.connect(`${window.location.protocol}//10.180.71.90:8000/ws`);

  socket.on("message", function(res) {
    var t = res.data;
    console.log(JSON.stringify(t));
  });

  socket.on("log", function(res) {
    var t = res.data;
    console.log("log " + JSON.stringify(t));
    $("#dialog_content").append(
      "<p class='log_style'>" + JSON.stringify(t) + "</p>"
    );
  });

  socket.on("data", function(res) {
    var t = res.data;
    console.log("data " + JSON.stringify(t));
    $("#data_content").html(
      `<p class='data_style'>predict: ${
        t.predict
      }</p><p class='data_style'>real: ${
        t.real
      }</p><p class='data_style'>error: ${
        t.error
      }</p><p class='data_style'>accurate: ${t.accurate}</p>`
    );
    xAxis.push(count++);
    data_1.push(t.predict);
    data_2.push(t.real);
    data_3.push(t.error);
    data_4.push(t.accurate);
    myChart_1.setOption({
      xAxis: {
        data: xAxis
      },
      series: {
        name: "预测值",
        data: data_1
      }
    });
    myChart_2.setOption({
      xAxis: {
        data: xAxis
      },
      series: {
        name: "真实值",
        data: data_2
      }
    });
    myChart_3.setOption({
      xAxis: {
        data: xAxis
      },
      series: {
        name: "误差",
        data: data_3
      }
    });
    myChart_4.setOption({
      xAxis: {
        data: xAxis
      },
      series: {
        name: "准确度",
        data: data_4
      }
    });
  });
});
