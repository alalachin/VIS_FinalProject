const color_Background="rgb(148,165,184)"
let data_number_tick=[140000,170000,200000, 240000,270000,300000, 340000,370000,400000, 
                      440000,470000,500000, 540000,570000,600000, 640000,670000,700000, 
                      740000,770000,800000, 840000,870000,900000, 940000,9700000,1000000, 
                      1040000,1070000,1100000, 1140000,1170000,1200000, 1240000,1270000,1300000, 
                      1340000,1370000,1400000, 1440000,1470000,1500000, 1540000, 1570000, 1600000];  
let data_number_tick_part=[140000,170000,200000, 240000,270000,300000, 340000,370000,400000, 
                      440000,470000,500000, 540000,570000,600000, 640000,670000,700000, 
                      740000,770000,800000, 840000,870000,900000];  

//用於長條圖判斷顏色區隔
const taiwan_poverty =  250000;//台灣貧窮線，是台灣總人口的1.32%，人數為16萬的1/3人口左右。
//const taiwan_poverty_household = 142611; //台灣低收入戶數，沒有用到。
const other_poverty = 443050; //OECD貧窮線
const america_poverty = 383520; //美國貧窮線
const life_poverty =  531660;//台灣最低生活費
//用於貧窮分隔線出現位置
var lineIndex_taiwan = 4;
var lineIndex_life =12;
var lineIndex_america =8;
var lineIndex_other = 10;

var first_in = true;
  
const groupData = [
                 { key: "小於20", values:
                                              [
                                                {grpName:'Team1', grpValue:72742, tick:140000},
                                                {grpName:'Team2', grpValue:72742, tick:170000},
                                                {grpName:'Team3', grpValue:72742, tick:200000}
                                              ]
                 },
                 { key: "20~30", values:
                                              [
                                                {grpName:'Team1', grpValue:243994, tick:240000},
                                                {grpName:'Team2', grpValue:243994, tick:270000},
                                                {grpName:'Team3', grpValue:243994, tick:300000}
                                              ]
                 },
                 { key: "30~40", values:
                                              [
                                                {grpName:'Team1', grpValue:366119, tick:340000},
                                                {grpName:'Team2', grpValue:366119, tick:370000},
                                                {grpName:'Team3', grpValue:366119, tick:400000}
                                              ]
                 },
                 { key: "40~50", values:
                                              [
                                                {grpName:'Team1', grpValue:425927, tick:440000},
                                                {grpName:'Team2', grpValue:425927, tick:470000},
                                                {grpName:'Team3', grpValue:425927, tick:500000}
                                              ]
                 },                      
                 { key: "50~60", values:
                                              [
                                                {grpName:'Team1', grpValue:490730, tick:540000},
                                                {grpName:'Team2', grpValue:490730, tick:570000},
                                                {grpName:'Team3', grpValue:490730, tick:600000}
                                              ]
                 },   
                 { key: "60~70", values:
                                              [
                                                {grpName:'Team1', grpValue:479973, tick:640000},
                                                {grpName:'Team2', grpValue:479973, tick:670000},
                                                {grpName:'Team3', grpValue:479973, tick:700000}
                                              ]
                 },
                 { key: "70~80", values:
                                              [
                                                {grpName:'Team1', grpValue:508476, tick:740000},
                                                {grpName:'Team2', grpValue:508476, tick:770000},
                                                {grpName:'Team3', grpValue:508476, tick:800000}
                                              ]
                 },
                 { key: "80~90", values:
                                              [
                                                {grpName:'Team1', grpValue:518644, tick:840000},
                                                {grpName:'Team2', grpValue:518644, tick:870000},
                                                {grpName:'Team3', grpValue:518644, tick:900000}
                                              ]
                 }];
 const rich =    [{ key: "90~100", values:
                                              [
                                                {grpName:'Team1', grpValue:550318, tick:940000},
                                                {grpName:'Team2', grpValue:550318, tick:970000},
                                                {grpName:'Team3', grpValue:550318, tick:1000000}
                                              ]
                 },
                 { key: "100~110", values:
                                              [
                                                {grpName:'Team1', grpValue:512133, tick:1040000},
                                                {grpName:'Team2', grpValue:512133, tick:1070000},
                                                {grpName:'Team3', grpValue:512133, tick:1100000}
                                              ]
                 },
                 { key: "110~120", values:
                                              [
                                                {grpName:'Team1', grpValue:478090, tick:1140000},
                                                {grpName:'Team2', grpValue:478090, tick:1170000},
                                                {grpName:'Team3', grpValue:478090, tick:1200000}
                                              ]
                 },
                 { key: "120~130", values:
                                              [
                                                {grpName:'Team1', grpValue:460862, tick:1240000},
                                                {grpName:'Team2', grpValue:460862, tick:1270000},
                                                {grpName:'Team3', grpValue:460862, tick:1300000}
                                              ]
                 },
                 { key: "130~140", values:
                                              [
                                                {grpName:'Team1', grpValue:431156, tick:1340000},
                                                {grpName:'Team2', grpValue:431156, tick:1370000},
                                                {grpName:'Team3', grpValue:431156, tick:1400000}
                                              ]
                 },
                 { key: "140~150", values:
                                              [
                                                {grpName:'Team1', grpValue:405414, tick:1440000},
                                                {grpName:'Team2', grpValue:405414, tick:1470000},
                                                {grpName:'Team3', grpValue:405414, tick:1500000}
                                              ]
                 },
                  { key: "大於150", values:
                                              [
                                                {grpName:'Team1', grpValue:4380843, tick:1540000},
                                                {grpName:'Team2', grpValue:4380843, tick:1570000},
                                                {grpName:'Team3', grpValue:4380843, tick:1600000}
                                              ]
                 }];
                 
const groupDataALL = groupData.concat(rich)

// svg的大小
const svgWidth = 800,
    svgHeight = 600;

// svg對圖表的留白
const padding = {
    top: 20,
    bottom: 20,
    left: 60,
    right: 40
}
// 圖表group的大小
const width = svgWidth - padding.left - padding.right,
    height = svgHeight - padding.top - padding.bottom;


//只有大圖會用到
var max = d3.max(groupDataALL, function(key) { return d3.max(key.values, function(d) { return d.grpValue; }); })

var x0  = d3.scaleBand().range([0, width])
                        .paddingInner(0.1);
var x1  = d3.scaleBand();
//大圖的Y軸比例尺
var y_all   = d3.scaleLinear()
                .range([svgHeight - padding.bottom - 10-padding.top/2, svgHeight/10 +200, svgHeight/10 -20, 0+padding.top])
                .domain([0, 600000, 4000000, max]);
//小圖的Y軸比例尺
var y_part   = d3.scaleLinear()
                  .rangeRound([height, 0+padding.top])
                  .domain([0, 700000]);

//長條圖裡會用colorString操作
var colorList = ["taiwan_poverty", "america_poverty", "button_japan",
                 "button_korea", "button_hongkong","yellow","life_poverty","other_poverty"]
var Color = d3.scaleOrdinal()
              .domain(colorList)
              .range(d3.schemeSet2);

//所有顏色都用變數 不要再一個個調了！
const color_yAxis="black";
const color_xAxis="black"
const color_axisTitle=" #505050"
const color_lineT=Color("taiwan_poverty")
const color_lineL=Color("life_poverty")
const color_lineA=Color("america_poverty")
const color_lineO=Color("other_poverty")
const color_buttonText="#202020"
const color_buttonText1="white"
const color_buttonBack="white"
const color_buttonStroke=Color("yellow")

//apend svg && g
var svg = d3.select('#chart')
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .attr("id",'svg_poor');

var group = svg.append('g')
    // 讓圖表區位移
    .attr('transform', `translate(${padding.left},${padding.top})`)
    .attr("id","GROUP");

//XY軸title  
svg.append('text')
    .attr('x', width)
    .attr('y', height)
    .text('新台幣(萬元)').style("fill",color_axisTitle)

svg.append('text')
    .attr('text-anchor', 'left')
    .attr('x', 0)
    .attr('y', 0+padding.top)
    .text('家戶數(數)').style("fill",color_axisTitle)


//上一次slice的長寬XY，list要清空再裝新的
let lastHeight=[],lastWidth=[],lastX=[],lastY=[],lastColor=[],lastOpacity=[];

//貧窮線們，為了不重複append，所以宣告在funcion前面。
var line_taiwan = group.append("line").attr("id","taiwanLine")
var line_life = group.append("line").attr("id","lifeLine")
var line_america = group.append("line").attr("id","americaLine")
var line_oecd = group.append("line").attr("id","oecdLine")

//按鈕們和它的文字們，為了不重複append，所以宣告在funcion前面。
//有產生一些用不到的ID 但懶得清
let buttonList=["taiwan","life","america","oecd","button_korea","button_hongkong","button_japan"];
for(var i in buttonList){
  svg.append("rect").attr("id","circle_"+buttonList[i])
  svg.append("text").attr("id","text_"+buttonList[i])
}
//台灣貧窮線 鈕
for(var i=0;i<=4;i++){
    svg.append("rect").attr("id","circle_taiwan"+i)
}
//台灣貧窮線 鈕文字
for(var i=0;i<=4;i++){
    svg.append("text").attr("id","text_taiwan"+i)
}
//台灣最低生活費 鈕
for(var i=0;i<=6;i++){
    svg.append("rect").attr("id","circle_life"+i)
}
//台灣最低生活費 鈕文字
for(var i=0;i<=6;i++){
    svg.append("text").attr("id","text_life"+i)
}
//OECD 鈕
for(var i=0;i<=3;i++){
    svg.append("rect").attr("id","circle_oecd"+i)
}
//OECD 鈕文字
for(var i=0;i<=3;i++){
    svg.append("text").attr("id","text_oecd"+i)
}

//圖表切換鈕
svg.append("rect").attr("id","rect_all")
svg.append("text").attr("id","text_all")
svg.append("rect").attr("id","rect_part")
svg.append("text").attr("id","text_part")

//資訊卡背景
svg.append("rect").attr("id","INFOBACK")

//資訊卡 標題、內文(爛寫法)
svg.append("text").attr("id","INFO_title1").text("標準").style("opacity",0)
svg.append("text").attr("id","INFO_title2").text("算式").style("opacity",0)

for(var i=0;i<10;i++){
  svg.append("text").attr("id","INFO_line"+i)
}



//資訊內容
var preName="#INFO_line" //0~9，最多可以放九行內文，記得其他要清空
//大圖資訊欄/****************************************************設定一下*/
let info_life_all=["最低生活費用為審核低收入戶申請時的收入門檻。","家戶總收入平均分配給全家人口，","每人每月需低於地區最低生活費用標準。"];
let info_taiwan_all=["台灣實際得到政府補助的低收入戶數量佔總家戶比例。","家戶通過最低生活費用標準、家庭財產限制等審核後，",
                      "被認定為低收入戶，才能獲得福利。"];

//小圖資訊欄
let America1=["以台灣的平均每戶人數，","對照美國相應的貧窮線標準。"]
let America2=["台灣平均每戶人數為3人，","美國以3人為家戶單位的貧窮標準為19,985美元，","依當年匯率換算為新台幣599,550元。"];
let OECD1=["以台灣的可支配收入，","帶入日本、香港、OECD的標準：","「貧窮線是可支配收入的一半」。"];
let OECD2=["886,100*50%=443,050"];

//台灣貧窮線小圖資訊是隨便暫定的
let Taiwan1=["台灣實際得到政府補助的低收入戶數量","佔總家戶比例。"]
let Taiwan2=["家戶通過最低生活費用標準、","家庭財產限制等審核後，",
                      "被認定為低收入戶，才能獲得福利。"]
let Life1=["最近一年每人可支配所得中位數60％"];
let Life2=["886100*60%=531660"];




var colorMode="Taiwan";
var chartMode="ALL";
//initialize
view('ALL');
//view('PART');


function view(version){

  var groupTHIS,TICKLIST;/*要先初始化嗎*/
  var SHOW,DISPLAY
  //Y軸比例尺、Y軸刻度
  var y,y_tick;

  if(version=="ALL"){
    console.log("into ALL")

    chartMode="ALL"
    groupTHIS=groupDataALL
    TICKLIST=data_number_tick
    //不顯示任何文字方塊、國家按鈕
    SHOW="NONE"
    DISPLAY="no"
    //Y軸比例尺
    y=y_all;
    y_tick=d3.axisLeft(y).tickValues([100000, 200000, 300000, 400000, 500000, 600000, 4000000, max]);


    d3.select("#rect_part").style("fill",color_buttonBack)
      .style("stroke",color_buttonStroke)
    d3.select("#rect_all").style("fill", color_buttonStroke)
      .style('stroke',color_buttonStroke)
    //here
  }
  else if (version=="PART"){
    console.log("into PART")
    chartMode="PART"
    groupTHIS=groupData
    TICKLIST=data_number_tick_part
    DISPLAY="yes"
    y=y_part;
    y_tick=d3.axisLeft(y);
    //移除大圖的省略符號
    d3.selectAll("#breakY1").remove();    
    d3.selectAll("#breakY2").remove();

    d3.select("#rect_all").style("fill",color_buttonBack)
      .style("stroke",color_buttonStroke)
    d3.select("#rect_part").style("fill", color_buttonStroke)
      .style('stroke',color_buttonStroke)
  }
  else{
    console.log("parameter error")
  }

  //XY軸設定
 var xAxis = d3.axisBottom(x0).tickValues(groupTHIS.map(d=>d.key));
  d3.selectAll("#YAXIS").remove();
  var yAxis = group.append('g')
                        .attr('color', color_yAxis)
                      //  .transition().duration(500)
                        .call(y_tick)
                        .attr('id',"YAXIS");  

  var categoriesNames = groupTHIS.map(function(d) { return d.key; });
  var rateNames       = groupTHIS[0].values.map(function(d) { return d.grpName; });
  x0.domain(categoriesNames);
  x1.domain(rateNames).rangeRound([0, x0.bandwidth()]);

  d3.selectAll("#XAXIS").remove()

  group.append("g")
        .attr("class", "x axis")
        .call(xAxis)
        .attr("transform",  `translate(0, ${height})`)
        .attr("id","XAXIS")

  //X軸顏色、透明度
  group.select('.x').style('opacity','1').attr('color', color_xAxis);

  // y軸上的斷裂區間，只能畫在Y軸產生之後，才能用白色Rect製造出斷裂的效果
  if(version=="ALL"){
      group.append("rect")
            .attr("x", padding.left - 70)
            .attr("y", y(2700000))
            .attr("height", 11)
            .attr("width", 25)
            .attr("fill", color_yAxis)
            .attr("id","breakY1");
      group.append("rect")
            .attr("x", padding.left - 70)
            .attr("y", y(2655000))
            .attr("height", 5)
            .attr("width", 25)
            .style("fill", color_Background)
            .attr("id","breakY2"); 
  }

  //移除上一張長條圖 因為要讀新的資料集
  group.selectAll(".g").remove()

  //在svg.g上掛一組一組的長條圖
  var slice = group.selectAll(".slice")
    .data(groupTHIS)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform",function(d) { return "translate(" + x0(d.key) + ",0)"; });

  //長條圖以甚麼區分顏色、變換甚麼顏色
  var Index,colorString;
  //分隔線的透明度
  var line_op_tl=1;
  var line_op_ao
  if(chartMode=="PART")
  line_op_ao=1;
  else line_op_ao=0

  switch(colorMode){
    //四條線在小圖裡
    case 'America':
      Index=america_poverty;
      colorString="america_poverty"
      break;
    case 'OECD':
      Index=other_poverty;
      colorString="other_poverty"
      break;
    case 'Taiwan':
      Index=taiwan_poverty;
      colorString="taiwan_poverty"
      break;
    case 'Life':
      Index=life_poverty;
      colorString="life_poverty"
      break;
   //兩條線在大圖裡
    case 'ALL_T':
      Index=taiwan_poverty;
      colorString="taiwan_poverty"
      //大圖不要美國、OECD的貧窮線
      var line_op_ao=0;
      d3.select("#tooltip").style('opacity',`0`)///////////////////html要處理掉
      break;
    case 'ALL_L':
      Index=life_poverty;
      colorString="life_poverty"
      //大圖不要美國、OECD的貧窮線
      var line_op_ao=0;
      d3.select("#tooltip").style('opacity',`0`)///////////////////html要處理掉
      break;
    default:
    /*color_line_op_A=0.9;
      color_line_op_O=0.5;
      color_line_op_T=0.5;
      color_line_op_L=0.5;*/
      break;
  }


  var oldX,oldY,oldH,oldW,oldC,oldO;
  //畫長條圖 //here
  slice.selectAll("rect")
        .data(function(d) { return d.values; })
        .enter()
        .append("rect")  .merge(slice)
        //上一張圖的長寬XY顏色設定、儲存在list
        .attr("x", function(d) { if(lastX.length!=0){oldX=lastX[0]; lastX.shift(); return x1(oldX); }else{ return x1(d.grpName); }})
        .attr("y", function(d) { if(lastY.length!=0){oldY=lastY[0]; lastY.shift(); return y(oldY);}else{return y(d.grpValue); }})
        .attr("width", function(d) { if(lastWidth.length!=0){oldW=lastWidth[0]; lastWidth.shift(); return oldW;}else{return x1.bandwidth(); }})
        .attr("height", function(d) {if(lastHeight.length!=0){ oldH=lastHeight[0]; lastHeight.shift(); return height-y(oldH);;}else{return height - y(d.grpValue); }})
        .attr("fill", function(d) {if(lastColor.length!=0){
                                    oldC=lastColor[0]; 
                                    lastColor.shift(); 
                                    return oldC; 
                                  }
                                  else{
                                    return Color(colorString);  
                                  }})
        .attr('opacity', function(d){ 
          if(lastOpacity.length!=0){oldO=lastOpacity[0]; lastOpacity.shift(); return oldO;}
          else{
            if(d.tick <= Index) {
              lastOpacity.push(1);
              return 1;
            }
             else{
              lastOpacity.push(0.5);
              return 0.5;
            }
           }});

  //再裝新的資料前先清空          
  lastX.length=0;
  lastY.length=0;
  lastWidth.length=0;
  lastColor.length=0;
  lastOpacity.length=0;

  slice.selectAll("rect")

//花了很久努力想要寫出很厲害的transition 但還是失敗了。因素可能有：讀不同檔、三個長條圖一組、自己太笨之類的...
//        .transition()
        //.delay(1000)
//        .duration(1000)
        //新的長寬XY設定
        .attr("x", function(d) {lastX.push(d.grpName); return x1(d.grpName); })
        .attr("y", function(d) {lastY.push(d.grpValue); return y(d.grpValue); })
        .attr("width", function(d) {lastWidth.push(x1.bandwidth()); return x1.bandwidth(); })
        .attr("height", function(d) {lastHeight.push(d.grpValue); return height - y(d.grpValue); })
        .attr("fill", function(d) {
            // if (first_in){
            //   return Color("taiwan_poverty");
            // }
            // else{
              lastColor.push(colorString); 
              return Color(colorString); 
            // }
            // here bar color
        })  //也許之後會調整顏色//////////////////////////
        .attr('opacity', function(d, i){
           if(d.tick <= Index) {
            lastOpacity.push(1);
            return 1;
          }
           else{
            lastOpacity.push(0.5);
            return 0.5;
          }
        })

  const x2 = d3.scaleBand()
                // 傳入原始資料需要對照的key
                .domain(TICKLIST)
                // 顯示時最小與最大的值
                .range([0, width])

  var line_taiwan = group.append("line").attr("id","taiwanLine")
  var line_life = group.append("line").attr("id","lifeLine")
  var line_america = group.append("line").attr("id","americaLine")
  var line_oecd = group.append("line").attr("id","oecdLine")
  //台灣貧窮線
  d3.select("#taiwanLine")
      .attr("x1", x2(x2.domain()[lineIndex_taiwan]))
      .attr("x2", x2(x2.domain()[lineIndex_taiwan]))
      .attr("y1", 20)
      .attr("y2", height)
      .style("stroke", color_lineT)
      .style("stroke-width", 3)
      .style("stroke-dasharray", "2")
      .style("opacity",line_op_tl)
  //台灣最低生活費  
  d3.select("#lifeLine")
      .attr("x1", x2(x2.domain()[lineIndex_life]))
      .attr("x2", x2(x2.domain()[lineIndex_life]))
      .attr("y1", 20)
      .attr("y2", height)
      .style("stroke", color_lineL)
      .style("stroke-width", 3)
      .style("opacity",line_op_tl)
  //美國貧窮線
  d3.select("#americaLine")
      .attr("x1", x2(x2.domain()[lineIndex_america]))
      .attr("x2", x2(x2.domain()[lineIndex_america]))
      .attr("y1", 20)
      .attr("y2", height)
      .style("stroke", color_lineA)
      .style("stroke-width", 3)
      .style("opacity",line_op_ao)
  //OECD貧窮線
  d3.select("#oecdLine")
      .attr("x1", x2(x2.domain()[lineIndex_other]))
      .attr("x2", x2(x2.domain()[lineIndex_other]))
      .attr("y1", 20)
      .attr("y2", height)
      .style("stroke", color_lineO)
      .style("stroke-width", 3)
      .style("opacity",line_op_ao)


//新增按鈕
//怕時間不夠(藉口)，所以全部展開(超醜的程式)...
  //台灣貧窮線
  for(var i =0;i<5;i++){
    d3.select("#circle_taiwan"+i)
      .attr("transform", "translate("+padding.left + ", 0 )")
      .attr("class", "button") 
      .attr("ry", "3")
    .attr("rx", "3")
      .attr("width", 30)
      .attr("height", 30)
      .attr("x", x2(x2.domain()[lineIndex_taiwan])-15)
      .attr("y", padding.top*1+i*20+20-5)
      .style("fill", function() {
          return Color("taiwan_poverty");
      })
      .on('click', function() {
        colorMode = "Taiwan";
        if(chartMode=="PART"){
          show("Taiwan");
        }
        else{
          show("Taiwan_all");
        }
      })
  }
  let textList_taiwan=["台","灣","貧","窮","線"]
  for(var i in textList_taiwan){
    d3.select("#text_taiwan"+i)
      .attr("transform", "translate("+padding.left + ", "+padding.top*0.8+" )")
      .attr("x", x2(x2.domain()[lineIndex_taiwan]))
      .attr("y", padding.top+20*i+20)
      .style("fill",color_buttonText)
      .style("cursor", "pointer")
      .style("font-size", "18px") // Change the font size
  //    .style("font-weight", "bold") // Change the font to bold
      .style("text-anchor", "middle") // center the legend
      .text(textList_taiwan[i])
      .on('click', function() {
        if(chartMode=="PART"){
        show("Taiwan")
      }
        else{show("Taiwan_all")}
      })      
      // .on('mouseover', function() {
      //   if(chartMode=="PART"){show("Taiwan")}
      //   else{show("Taiwan_all")}
      // })
      // .on('mouseout', function(){
      //   show("vanish")
      // })
  }
  //台灣最低生活費
  for(var i=0;i<=6;i++){
    d3.select("#circle_life"+i)
      .attr("transform", "translate("+padding.left + ", 0 )")
      .attr("class", "button") 
      .attr("ry", "3")
    .attr("rx", "3")
      .attr("width", 30)
      .attr("height", 30)
      .attr("x", x2(x2.domain()[lineIndex_life])-15)
      .attr("y", padding.top*1+i*20+20-5)
      .style("fill", function() {
          return Color("life_poverty");
      })
      .on('click', function() {
        if(chartMode=="PART"){
        show("Life")
      }
        else{show("Life_all")}
      })
  }
  let textList_life=["台","灣","最","低","生","活","費"]
  for(var i in textList_life){
    d3.select("#text_life"+i)
      .attr("transform", "translate("+padding.left + ", "+padding.top*0.8+" )")
      .attr("x", x2(x2.domain()[lineIndex_life]))
      .attr("y", padding.top+20*i+20)
      .style("fill",color_buttonText)
      .style("cursor", "pointer")
      .style("font-size", "18px") // Change the font size
    //  .style("font-weight", "bold") // Change the font to bold
      .style("text-anchor", "middle") // center the legend
      .text(textList_life[i])
      .on('click', function() {
        if(chartMode=="PART"){
        show("Life")
      }
        else{show("Life_all")}
      })
    }
  //美
  d3.select("#circle_america")
    .attr("transform", "translate("+ padding.left+ ", 0 )")
    .attr("class", "button") 
         .attr("ry", "3")
    .attr("rx", "3")
      .attr("width", 30)
      .attr("height", 30)
      .attr("x", x2(x2.domain()[lineIndex_america])-15)
    .attr("y", padding.top*1+20-5)
    .style("fill", function() {
        return Color("america_poverty");
    })
    .on('click', function() {
        if(chartMode=="PART"){
        show("America")
      }})
      .attr("opacity",function(){
        if(chartMode=="PART"){
        return 1;
      }
        else{return 0}
      })
      .style("visibility",function(){
        if(chartMode=="PART"){
        return "visible"
      }
        else{return "hidden"}
      })
  d3.select("#text_america")
    .attr("transform", "translate("+padding.left + ", "+padding.top*0.8+" )")
    .attr("x", x2(x2.domain()[lineIndex_america]))
    .attr("y", padding.top+20)
    .style("fill","white")
    .style("cursor", "pointer")
    .style("font-size", "18px") // Change the font size
  //  .style("font-weight", "bold") // Change the font to bold
    .style("text-anchor", "middle") // center the legend
    .text("美")
    .on('click', function() {
        if(chartMode=="PART"){
        show("America")
      }})
      .attr("opacity",function(){
        if(chartMode=="PART"){
        return 1;
      }
        else{return 0}
      })
      .style("visibility",function(){
        if(chartMode=="PART"){
        return "visible"
      }
        else{return "hidden"}
      })
  //OECD線會有四個鈕，日韓港、OECD
  //OECD
  for(var i=0;i<=3;i++){
    d3.select("#circle_oecd"+i)
        .attr("transform", "translate("+padding.left + ", 0 )")
        .attr("class", "button") 
                 .attr("ry", "3")
    .attr("rx", "3")
      .attr("width", 30)
      .attr("height", 30)
        .attr("x", x2(x2.domain()[lineIndex_other])-15)
        .attr("y", padding.top*1+60+i*20+20-5)
        .style("fill", function() {
            return Color("other_poverty");
        })
    .on('click', function() {
        if(chartMode=="PART"){
        show("OECD")
      }})
      .attr("opacity",function(){
        if(chartMode=="PART"){
        return 1;
      }
        else{return 0}
      })
      .style("visibility",function(){
        if(chartMode=="PART"){
        return "visible"
      }
        else{return "hidden"}
      })
  }
  let textList_oecd=["O","E","C","D"]
    for(var i=0;i<=3;i++){
      d3.select("#text_oecd"+i)
        .attr("transform", "translate("+padding.left + ", "+padding.top*0.8+" )")
        .attr("x", x2(x2.domain()[lineIndex_other]))
        .attr("y", padding.top+60+i*20+20)
        .style("fill",color_buttonText1)
        .style("cursor", "pointer")
        .style("font-size", "18px") // Change the font size
   //     .style("font-weight", "bold") // Change the font to bold
        .style("text-anchor", "middle") // center the legend
        .text(textList_oecd[i])
    .on('click', function() {
        if(chartMode=="PART"){
        show("OECD")
      }})
      .attr("opacity",function(){
        if(chartMode=="PART"){
        return 1;
      }
        else{return 0}
      })
      .style("visibility",function(){
        if(chartMode=="PART"){
        return "visible"
      }
        else{return "hidden"}
      })
  }  
  //香港
  d3.select("#circle_button_hongkong")
    .attr("transform", "translate("+padding.left + ", 0 )")
    .attr("class", "button") 
                 .attr("ry", "3")
    .attr("rx", "3")
      .attr("width", 30)
      .attr("height", 30)
    .attr("x", x2(x2.domain()[lineIndex_other])-15)
    .attr("y", padding.top*1+30+20-5)
    .style("fill", function() {
        return Color("button_hongkong");
    })
    .on('click', function() {
        if(chartMode=="PART"){
        show("OECD")
      }})
      .attr("opacity",function(){
        if(chartMode=="PART"){
        return 1;
      }
        else{return 0}
      })
      .style("visibility",function(){
        if(chartMode=="PART"){
        return "visible"
      }
        else{return "hidden"}
      })
  d3.select("#text_button_hongkong")
    .attr("transform", "translate("+padding.left + ", "+padding.top*0.8+" )")
    .attr("x", x2(x2.domain()[lineIndex_other]))
    .attr("y", padding.top+30+20)
    .style("fill",color_buttonText1)
    .style("cursor", "pointer")
    .style("font-size", "18px") // Change the font size
   // .style("font-weight", "bold") // Change the font to bold
    .style("text-anchor", "middle") // center the legend
    .text("港")
    .on('click', function() {
        if(chartMode=="PART"){
        show("OECD")
      }})
      .attr("opacity",function(){
        if(chartMode=="PART"){
        return 1;
      }
        else{return 0}
      })
      .style("visibility",function(){
        if(chartMode=="PART"){
        return "visible"
      }
        else{return "hidden"}
      })
/*沒有韓國
  //韓國
  d3.select("#circle_button_korea")
    .attr("transform", "translate("+padding.left + ", 0 )")
    .attr("class", "button") 
    .attr("r", 15)
    .attr("cx", x2(x2.domain()[lineIndex_other]))
    .attr("cy", padding.top*1.5+60)
    .style("fill", function() {
        return Color("button_korea");
    })
  d3.select("#text_button_korea")
    .attr("transform", "translate("+padding.left + ", "+padding.top*0.8+" )")
    .attr("x", x2(x2.domain()[lineIndex_other]))
    .attr("y", padding.top)
    .style("fill","white")
    .style("cursor", "pointer")
    .style("font-size", "18px") // Change the font size
    .style("font-weight", "bold") // Change the font to bold
    .style("text-anchor", "middle") // center the legend
    .text("韓")*/
  //日
  d3.select("#circle_button_japan")
    .attr("transform", "translate("+padding.left + ", 0 )")
    .attr("class", "button") 
                 .attr("ry", "3")
    .attr("rx", "3")
      .attr("width", 30)
      .attr("height", 30)
    .attr("x", x2(x2.domain()[lineIndex_other])-15)
    .attr("y", padding.top*1+20-5)
    .style("fill", function() {
        return Color("button_japan");
    })
    .on('click', function() {
        if(chartMode=="PART"){
        show("OECD")
      }})
      .attr("opacity",function(){
        if(chartMode=="PART"){
        return 1;
      }
        else{return 0}
      })
      .style("visibility",function(){
        if(chartMode=="PART"){
        return "visible"
      }
        else{return "hidden"}
      })
  d3.select("#text_button_japan")
    .attr("transform", "translate("+padding.left + ", "+padding.top*0.8+" )")
    .attr("x", x2(x2.domain()[lineIndex_other]))
    .attr("y", padding.top+20)
    .style("fill",color_buttonText1)
    .style("cursor", "pointer")
    .style("font-size", "18px") // Change the font size
 //   .style("font-weight", "bold") // Change the font to bold
    .style("text-anchor", "middle") // center the legend
    .text("日")
    .on('click', function() {
        if(chartMode=="PART"){
        show("OECD")
      }})
      .attr("opacity",function(){
        if(chartMode=="PART"){
        return 1;
      }
        else{return 0}
      })
      .style("visibility",function(){
        if(chartMode=="PART"){
        return "visible"
      }
        else{return "hidden"}
      })
}

//圖表切換鈕，這裡有用到灰色的字，但懶得設const   
d3.select("#rect_all")
  .attr("transform", "translate("+-1*padding.left + ", 0 )")
  .attr("ry", "6")
  .attr("rx", "6")
  .attr("width", 110)
  .attr("height", 25)
  .attr("x", width/2-2.5)
  .attr("y", 0)
  .on('click', function() {
    for(var i=0;i<10;i++){
     d3.select(preName+i).style("opacity",0);
    }
    //資訊卡背景
    d3.select("#INFOBACK").style("opacity",0)
    colorMode="Taiwan"
    view("ALL")
  })
d3.select("#text_all")
  .attr("transform", "translate("+-1*padding.left + ", 0 )")
  .attr("x", width/2-2.5)
  .attr("y", padding.top)
  .style("fill",  "gray")
  .style("cursor", "pointer")
  .style("font-size", "18px") // Change the font size
 // .style("font-weight", "bold") // Change the font to bold
  .style("text-anchor", "left") // center the legend
  .text("綜覽全國人口")
  .on('click', function() {
    for(var i=0;i<10;i++){
      d3.select(preName+i).style("opacity",0);
    }
    //資訊卡背景
    d3.select("#INFOBACK").style("opacity",0)
    d3.select("#INFO_title1").style("opacity", 0)
    d3.select("#INFO_title2").style("opacity", 0)
    colorMode = "Taiwan"
    view("ALL")
  })

d3.select("#rect_part")
  .attr("transform", "translate("+padding.left + ", 0 )")
  .attr("ry", "6")
  .attr("rx", "6")
  .attr("width", 130)
  .attr("height", 25)
  .attr("x", width/2+2.5)
  .attr("y",0)
  .on('click', function() {
    for(var i=0;i<10;i++){
      d3.select(preName+i).style("opacity",0);
    }
    //資訊卡背景
    d3.select("#INFOBACK").style("opacity",0)
    //另一個鈕要暗掉，寫在函式裡
    colorMode = "Taiwan"
    view("PART")
  })
d3.select("#text_part")
  .attr("transform", "translate("+padding.left + ", 0 )")
  .attr("x", width/2+2.5)
  .attr("y", padding.top)
  .style("fill","gray")
  .style("cursor", "pointer")
  .style("font-size", "18px")
 // .style("font-weight", "bold")
  .style("text-anchor", "left")
  .text("細看各國貧窮線")
  .on('click', function() {
     for(var i=0;i<10;i++){
        d3.select(preName+i).style("opacity",0);
      }
      //資訊卡背景
      d3.select("#INFOBACK").style("opacity",0)
      d3.select("#INFO_title1").style("opacity", 0)
      d3.select("#INFO_title2").style("opacity", 0)
      colorMode="Taiwan"
      view("PART")
  })

//顯示文字方塊、移除他國貧窮線(line function)
//點選按鈕後出現文字的地方還沒調 考量到格式可能會跑掉 預計最後再調整
function show(country){
  //先把所有文字都隱藏
  for(var i=0;i<10;i++){
    d3.select(preName+i).style("opacity",0);
  }
//資訊卡背景
  d3.select("#INFOBACK")
  .attr("ry", "6")
  .attr("rx", "6")
  .attr("width", 450)
  .attr("height", 300)
  .attr("x", (width-padding.left-padding.right)/2-padding.left-25)
  .attr("y",(height-padding.top-padding.bottom)/2)
  .style("fill","white")
  .style("opacity",0.7)

  var info1="",info2="";
  var infoTitle;
  switch(country){
    case'vanish':
      info1=""
      info2=""
      infoTitle=false;
      break;
    case'America':
      colorMode="America";
      view("PART")
      info1=America1
      info2=America2
      infoTitle=true;
      break;
    //目前還沒有資料
    case'Taiwan':
      colorMode="Taiwan";
      view("PART")
    //  info1=Taiwan1
    //  info2=Taiwan2
      infoTitle=false;
      break;
    case'Life':
      colorMode="Life";
      view("PART")
      info1=Life1
      info2=Life2
      infoTitle=true;
      break;
    case'OECD':
      colorMode="OECD";
      view("PART")
      info1=OECD1
      info2=OECD2
      infoTitle=true;
      break;
    case 'Taiwan_all':
      colorMode="Taiwan";
      view("ALL")
      info1=info_taiwan_all
      info2="" //info2要歸零
      infoTitle=false;
      break;
    case 'Life_all':
      colorMode="Life";
      view("ALL")
      info1=info_life_all   
      info2="" //info2要歸零
      infoTitle=false;
      break;
  }
  if(infoTitle){
  //資訊卡標題 
    for(var i=1;i<3;i++){
      d3.select("#INFO_title"+i)
        .style("fill","black")
        .style("font-size", "20px")
   //     .style("font-weight", "bold")
        .attr("x", (width-padding.left-padding.right)/2-padding.left+5)
        .attr("y",(height-padding.top-padding.bottom)/2+padding.top+(i-1)*130+5)
   //     .style("font-weight", "bold")
        .style("opacity",1)
    }
  }
  else{
    for(var i=1;i<3;i++){
      d3.select("#INFO_title"+i)
        .style("opacity",0)
    }
    d3.select("#INFOBACK").attr("height",150)
  }

  //因為現在台灣PART沒有資料
  if(country=="Taiwan" | country=="vanish"){
    d3.select("#INFOBACK").style("opacity",0)
  }

  var i,j
  for(i=0;i<info1.length;i++){
    d3.select(preName+i)
        .attr("x", (width-padding.left-padding.right)/2-padding.left-15)
        .attr("y",(height-padding.top-padding.bottom)/2+padding.top+32+i*30)
    .style("fill","black")
    .style("font-size", "18px")
    .text(info1[i]).style("opacity",1);
  }
  for(j=0;j<info2.length;j++,i++){
    d3.select(preName+i)
    .attr("x", (width-padding.left-padding.right)/2-padding.left-15)
    .attr("y",(height-padding.top-padding.bottom)/2+padding.top+j*30+160+5)
    .style("fill","black")
    .style("font-size", "18px")
    .text(info2[j]).style("opacity",1);
  }


    
}

function buttonDisplay(yn){
    if(yn=="yes"){
        d3.select('#america').style('visibility','visible')
        d3.select('#oecd').style('visibility','visible')
        d3.select('#taiwan').style('visibility','visible')
        d3.select('#taiwan').style('visibility','visible')        
        d3.select('#life').style('visibility','visible')

        d3.select("#taiwan_all").style('visibility','hidden')
        d3.select("#life_all").style('visibility','hidden')
    }
    else if(yn=="no"){
        d3.select('#america').style('visibility','hidden')
        d3.select('#oecd').style('visibility','hidden')
        d3.select('#taiwan').style('visibility','hidden')
        d3.select('#life').style('visibility','hidden')

        d3.select("#taiwan_all").style('visibility','visible')        
        d3.select("#life_all").style('visibility','visible')

    }
    else{
      console.log("buttonDisplay parameter error")
    }
}