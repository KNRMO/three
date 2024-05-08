var B=Object.defineProperty;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var o=(t,e,i)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,g=(t,e)=>{for(var i in e||(e={}))I.call(e,i)&&o(t,i,e[i]);if(p)for(var i of p(e))z.call(e,i)&&o(t,i,e[i]);return t};import{bi as G,aO as D}from"./vendor.-IAgWGvB1715174954944.js";const E={name:"AMapGIS",title:"结合高德API的GIS",intro:"基于高德地图的GIS应用例子",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],preview:[{src:"plugins/AMapGIS/preview/cubeMesh.png",type:"img",name:"cubeMesh",title:"正方体实例"},{src:"plugins/AMapGIS/preview/buildings.png",type:"img",name:"buildings",title:"建筑物"}]},m=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),q={name:"UIdemo",title:"UI界面相关",intro:"UI界面的例子，浏览器滚动，资源加载器Loading样式",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],creatTime:"2024-01-12",updateTime:"2024-03-19",preview:[{src:"plugins/UIdemo/preview/divSample.png",type:"img",name:"divSample",title:"简单DIV"},{src:"plugins/UIdemo/preview/divIllustrate.png",type:"img",name:"divIllustrate",title:"DIV说明样例"},{src:"plugins/UIdemo/preview/echartSample.png",type:"img",name:"echartSample",title:"Echart表格样例"},{src:"plugins/UIdemo/preview/sizeMark.png",type:"img",name:"sizeMark",title:"尺寸样式"},{src:"plugins/UIdemo/preview/scrollPartical.png",type:"img",name:"scrollPartical",title:"滚动粒子",referenceSource:{title:"MisterPrada",url:"https://github.com/MisterPrada/morph-particles"}},{src:"plugins/UIdemo/preview/loadingManagerStyle.png",type:"img",name:"loadingManagerStyle",title:"资源加载器Loading"}]},u=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),F={name:"basic",title:"原生功能展示",intro:"",version:"0.0.1",author:"地虎降天龙",website:"www.icegl.cn",state:"active",require:[],child:[{name:"base",title:"基础",intro:"基础功能展示",pNode:"basic",preview:[{src:"plugins/basic/base/preview/theGroups.png",type:"img",name:"theGroups",title:"组合Group"},{src:"plugins/basic/base/preview/theConditional.png",type:"img",name:"theConditional",title:"显隐v-if"},{src:"plugins/basic/base/preview/theBasic.png",type:"img",name:"theBasic",title:"基本"},{src:"plugins/basic/base/preview/theEvents.png",type:"img",name:"theEvents",title:"事件"},{src:"plugins/basic/base/preview/shaderParticles.png",type:"img",name:"shaderParticles",title:"着色器实践"},{src:"plugins/basic/base/preview/penetrateEvent.png",type:"img",name:"penetrateEvent",title:"穿透事件"},{src:"plugins/basic/base/preview/multipleScenes.png",type:"img",name:"multipleScenes",title:"多场景"}]},{name:"materials",title:"材质",intro:"各种衍生材质展示",pNode:"basic",preview:[{src:"plugins/basic/materials/preview/glassMaterial.png",type:"img",name:"glassMaterial",title:"玻璃材质"},{src:"plugins/basic/materials/preview/transmissionMaterial.png",type:"img",name:"transmissionMaterial",title:"玻璃材质2"},{src:"plugins/basic/materials/preview/wobbleMaterial.png",type:"img",name:"wobbleMaterial",title:"流体波动"},{src:"plugins/basic/materials/preview/clippingMaterial.png",type:"img",name:"clippingMaterial",title:"材质裁剪"},{src:"plugins/basic/materials/preview/layerMaterial.png",type:"img",name:"layerMaterial",title:"图层材质"},{src:"plugins/basic/materials/preview/outline.png",type:"img",name:"outline",title:"outline"}]},{name:"controls",title:"控制器",intro:"各种控制器",pNode:"basic",preview:[{src:"plugins/basic/controls/preview/cameraControls.png",type:"img",name:"cameraControls",title:"摄像头控制"},{src:"plugins/basic/controls/preview/orbitControls.png",type:"img",name:"orbitControls",title:"orbitControls"},{src:"plugins/basic/controls/preview/transformControls.png",type:"img",name:"transformControls",title:"变换控制器"},{src:"与OrbitControls类似，该控件用于从鸟瞰视角在地图上变换相机，但使用鼠标/触摸交互的特定预设，并在默认情况下禁用屏幕空间平移。",type:"text",name:"mapControls",title:"地图控制器"},{src:"第一人称视角，键盘控制视角。W、S、A、D：前后左右；空格：跳起；ESC：退出控制。",type:"text",name:"firstPersonControls",title:"第一人称键盘控制"},{src:"plugins/basic/controls/preview/scrollControls.png",type:"img",name:"scrollControls",title:"滚轮控制器"}]},{name:"htmls",title:"内嵌dom",intro:"内嵌网页元素",pNode:"basic",preview:[{src:"plugins/basic/htmls/preview/htmls.png",type:"img",name:"htmls",title:"简单dom"},{src:"plugins/basic/htmls/preview/website.png",type:"img",name:"website",title:"内嵌网页"},{src:"plugins/basic/htmls/preview/websiteReflector.png",type:"img",name:"websiteReflector",title:"网页电脑+镜面"}]},{name:"shine",title:"闪耀发光类",intro:"关于物体发光的简单例子",pNode:"basic",preview:[{src:"plugins/basic/shine/preview/spriteImage.png",type:"img",name:"spriteImage",title:"点精灵贴图"},{src:"plugins/basic/shine/preview/shader.png",type:"img",name:"shader",title:"着色器方式"},{src:"plugins/basic/shine/preview/fakeGlow.png",type:"img",name:"fakeGlow",title:"FakeGlow",referenceSource:{title:"FakeGlow",url:"https://r3f-fake-glow-material.vercel.app/"}},{src:"plugins/basic/shine/preview/bloomPass.png",type:"img",name:"bloomPass",title:"后期处理-效果叠加"},{src:"plugins/basic/shine/preview/MaskPass.png",type:"img",name:"MaskPass",title:"后期处理-掩膜通道"},{src:"plugins/basic/shine/preview/effectComposerLayers.png",type:"img",name:"effectComposerLayers",title:"后期处理-图层叠加"},{src:"plugins/basic/shine/preview/effectComposerShaderPass.png",type:"img",name:"effectComposerShaderPass",title:"后期处理-图层+ShaderPass",referenceSource:{title:"zerotoinfinity",url:"https://www.cnblogs.com/zerotoinfinity/p/15910759.html"}},{src:"plugins/basic/shine/preview/effectComposerMultiple.png",type:"img",name:"effectComposerMultiple",title:"后期处理-多个叠加"}]}]},v=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),L={name:"digitalCity",title:"数字城市",intro:"基于城市场景的可视化展示插件",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:["cannon-es"],preview:[{src:"plugins/digitalCity/preview/buildings.png",type:"img",name:"buildings",title:"建筑物"},{src:"plugins/digitalCity/preview/radars.png",type:"img",name:"radars",title:"雷达"},{src:"plugins/digitalCity/preview/weather.png",type:"img",name:"weather",title:"天气"},{src:"plugins/digitalCity/preview/clouds.png",type:"img",name:"clouds",title:"云☁️"},{src:"plugins/digitalCity/preview/clouds2.png",type:"img",name:"clouds2",title:"云彩2☁️"},{src:"plugins/digitalCity/preview/fog.png",type:"img",name:"fog",title:"迷雾"},{src:"plugins/digitalCity/preview/smoke.png",type:"img",name:"smoke",title:"烟"},{src:"plugins/digitalCity/preview/fireA.png",type:"img",name:"fireA",title:"火A🔥效果",referenceSource:{title:"jaimetorrealba",url:"https://lab.jaimetorrealba.com/fire_shaders_demos"}},{src:"plugins/digitalCity/preview/fireB.png",type:"img",name:"fireB",title:"火B🔥效果"},{src:"plugins/digitalCity/preview/fireC.png",type:"img",name:"fireC",title:"火C🔥效果"},{src:"plugins/digitalCity/preview/fireBall.png",type:"img",name:"fireBall",title:"火球🔥效果"},{src:"plugins/digitalCity/preview/heatmap.png",type:"img",name:"heatmap",title:"热力图"},{src:"plugins/digitalCity/preview/heatmap2.png",type:"img",name:"heatmap2",title:"建筑物-热力图"},{src:"plugins/digitalCity/preview/cityRiver.png",type:"img",name:"cityRiver",title:"城市河流"},{src:"plugins/digitalCity/preview/buildingsPassA.png",type:"img",name:"buildingsPassA",title:"建筑物后期A"},{src:"plugins/digitalCity/preview/buildingsEffectA.png",type:"img",name:"buildingsEffectA",title:"建筑物效果A"},{src:"plugins/digitalCity/preview/buildingsMarkA.png",type:"img",name:"buildingsMarkA",title:"建筑物标记A"},{src:"plugins/digitalCity/preview/roadLines.png",type:"img",name:"roadLines",title:"道路飞线"},{src:"plugins/digitalCity/preview/fence.png",type:"img",name:"fence",title:"围栏"},{src:"plugins/digitalCity/preview/regionGlow.png",type:"img",name:"regionGlow",title:"区域内发光"},{src:"plugins/digitalCity/preview/city2.gif",type:"img",name:"city2",title:"城市新模型"}]},y=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),$={name:"digitalPark",title:"数字园区",intro:"基于园区场景的可视化展示插件",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",creatTime:"2024-05-06",updateTime:"2024-05-06",require:[],preview:[{src:"plugins/digitalPark/preview/simplePark.png",type:"img",name:"simplePark",title:"简单园区"}]},d=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),R={name:"eCommerce",title:"电商场景",intro:"关于电商场景下的例子",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],preview:[{src:"plugins/eCommerce/preview/electricFan.png",type:"img",name:"electricFan",title:"电风扇",referenceSource:{title:"AlvaroSaburido",url:"https://lab.tresjs.org/experiments/product-landing-page"}},{src:"plugins/eCommerce/preview/ssrtGlass.png",type:"img",name:"ssrtGlass",title:"水晶玻璃化",referenceSource:{title:"Domenicobrz",url:"https://github.com/Domenicobrz/SS-refraction-through-depth-peeling-in-threejs?tab=readme-ov-file"}},{src:"plugins/eCommerce/preview/stencilMask.png",type:"img",name:"stencilMask",title:"多重门",referenceSource:{title:"jaimetorrealba",url:"https://lab.jaimetorrealba.com/stencilmask_demos"}},{src:"plugins/eCommerce/preview/sticker.png",type:"img",name:"sticker",title:"镭射塑料袋",referenceSource:{title:"nikuscs",url:"https://nikuscs.com/crafts/hybridly-sticker-effect/"}},{src:"plugins/eCommerce/preview/arrangement.png",type:"img",name:"arrangement",title:"桌面陈设",referenceSource:{title:"react-three-fiber",url:"https://codesandbox.io/s/szj6p7"}}]},f=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),U={name:"earthSample",title:"地球的简单例子",intro:"基于threeJS简单地球的例子",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],preview:[{src:"plugins/earthSample/preview/earthA.png",type:"img",name:"earthA",title:"样式A"},{src:"plugins/earthSample/preview/menuA.png",type:"img",name:"menuA",title:"菜单A"},{src:"plugins/earthSample/preview/lowpolyPlanet.png",type:"img",name:"lowpolyPlanet",title:"低像素多边形"}]},h=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),J={name:"floor",title:"地面地板实例",intro:"地面集合例子",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],preview:[{src:"plugins/floor/preview/simpleReflector.png",type:"img",name:"simpleReflector",title:"简单镜面"},{src:"plugins/floor/preview/reflectorShader.png",type:"img",name:"reflectorShader",title:"镜面材质着色器"},{src:"plugins/floor/preview/reflectorDiffuse.png",type:"img",name:"reflectorDiffuse",title:"fiber镜面"},{src:"plugins/floor/preview/reflectorDUDV.png",type:"img",name:"reflectorDUDV",title:"dudv镜面"},{src:"plugins/floor/preview/showFloor.png",type:"img",name:"showFloor",title:"地板模型拼接+镜面"},{src:"plugins/floor/preview/videoFloor.png",type:"img",name:"videoFloor",title:"video动态底座"},{src:"plugins/floor/preview/canvasFloor.png",type:"img",name:"canvasFloor",title:"canvas动态底座"},{src:"plugins/floor/preview/whiteFloor.png",type:"img",name:"whiteFloor",title:"白色边缘模糊"},{src:"plugins/floor/preview/gridPlus.png",type:"img",name:"gridPlus",title:"网格扩展"},{src:"plugins/floor/preview/grass.png",type:"img",name:"grass",title:"草地",referenceSource:{title:"react-three-fiber",url:"https://codesandbox.io/s/5xho4"}}]},w=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),N={name:"heatMap",title:"热流图实例",intro:"基于threeJS的热力图例子",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],preview:[{src:"plugins/heatMap/preview/simpleExample.png",type:"img",name:"simpleExample",title:"简单例子"},{src:"plugins/heatMap/preview/heatmapExample.png",type:"img",name:"heatmapExample",title:"heatmap.js例子"}]},b=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),V={name:"industry4",title:"工业4.0",intro:"工业4.0数字化例子",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],creatTime:"2023-11-12",updateTime:"2024-03-20",preview:[{src:"plugins/industry4/preview/deviceLight.png",type:"img",name:"deviceLight",title:"设备发光"},{src:"plugins/industry4/preview/deviceLightReflector.png",type:"img",name:"deviceLightReflector",title:"设备发光+镜面+表格说明"},{src:"plugins/industry4/preview/planeClipping.png",type:"img",name:"planeClipping",title:"飞机剖面"},{src:"plugins/industry4/preview/showCar.png",type:"img",name:"showCar",title:"911展示",referenceSource:{title:"react-three-fiber",url:"https://codesandbox.io/s/lwo219"}},{src:"plugins/industry4/preview/showLambo.png",type:"img",name:"showLambo",title:"Lambo展示",referenceSource:{title:"react-three-fiber",url:"https://codesandbox.io/s/e662p3"}},{src:"plugins/industry4/preview/su7.png",type:"img",name:"su7",title:"来吧，小米su7",referenceSource:{title:"gamemcu",url:"https://gamemcu.com/su7/"}}]},_=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),W={name:"medical",title:"医疗行业",intro:"医疗行业数字化例子",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],preview:[{src:"plugins/medical/preview/digitalBrain.png",type:"img",name:"digitalBrain",title:"数字大脑"},{src:"plugins/medical/preview/digitalBrainFloor.png",type:"img",name:"digitalBrainFloor",title:"数字大脑镜面"}]},j=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),H={name:"postProcessing",title:"后处理原理剖析",intro:"后处理原理剖析文档地址：完善中，待增加",version:"0.0.1",author:"Jsonco",website:"https://space.bilibili.com/410503457",state:"active",require:[],preview:[{src:"plugins/postProcessing/preview/webgl帧缓冲DEMO.png",type:"img",name:"webglFrameBuffer",title:"WebGL帧缓冲DEMO"},{src:"plugins/postProcessing/preview/webgl实现后处理.png",type:"img",name:"webglPostProcessing",title:"WebGL后处理DEMO"},{src:"plugins/postProcessing/preview/后处理编辑器.png",type:"img",name:"postProcessingEditor",title:"后处理编辑器"}]},S=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),X={name:"projectionShadow",title:"投射阴影",intro:"这里集合了 投射阴影 场景",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",creatTime:"2024-04-18",updateTime:"2024-04-18",require:[],preview:[{src:"plugins/projectionShadow/preview/accumulativeShadows.png",type:"img",name:"accumulativeShadows",title:"软阴影"},{src:"plugins/projectionShadow/preview/causticsDemo.png",type:"img",name:"causticsDemo",title:"投射"}]},M=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),K={name:"rayMarchingAndThreejs",title:"基于Threejs的光线行进",intro:"Threejs框架下的光线行进的应用案例",version:"0.0.1",author:"Jsonco",website:"https://space.bilibili.com/410503457",state:"active",creatTime:"2024-02-22",updateTime:"2024-03-10",require:[],preview:[{src:"plugins/rayMarchingAndThreejs/preview/光追基础框架.png",type:"img",name:"rayMarchingBasic",title:"光追基础框架"},{src:"plugins/rayMarchingAndThreejs/preview/位置变换.png",type:"img",name:"rayMarchingTranform",title:"光追基础变换"},{src:"plugins/rayMarchingAndThreejs/preview/多个sdf.png",type:"img",name:"rayMarchingCombination",title:"光追创建多个实体",referenceSource:{title:"Inigo Quilez  ",url:"https://iquilezles.org/articles/distfunctions/"}},{src:"plugins/rayMarchingAndThreejs/preview/创建复杂几何体.png",type:"img",name:"rayMarchingFract",title:"光追创建复杂几何体"},{src:"plugins/rayMarchingAndThreejs/preview/颜色赋值.png",type:"img",name:"rayMarchingColor",title:"颜色赋值"},{src:"plugins/rayMarchingAndThreejs/preview/蘑菇.png",type:"img",name:"rayMarchingMushroom",title:"光追构建蘑菇",referenceSource:{title:"XsBSzh",url:"https://www.shadertoy.com/view/XsBSzh"}},{src:"plugins/rayMarchingAndThreejs/preview/综合案例1.png",type:"img",name:"rayMarchingVIew",title:"光追构建复杂体"}]},k=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),Q={name:"shadertoyToThreejs",title:"shadertoyToThree",intro:"shadertoy转threejs案例",version:"0.0.1",author:"Jsonco",website:"https://space.bilibili.com/410503457",state:"active",require:[],preview:[{src:"plugins/shadertoyToThreejs/preview/细胞.png",type:"img",name:"argestCircle",title:"细胞"},{src:"plugins/shadertoyToThreejs/preview/shadertoyMaterial.png",type:"img",name:"shadertoyMaterial",title:"shadertoyMaterial"},{src:"plugins/shadertoyToThreejs/preview/后处理1.png",type:"img",name:"noiseContourPage",title:"噪音轮廓"},{src:"plugins/shadertoyToThreejs/preview/lightning.png",type:"img",name:"lightning",title:"闪电"}]},C=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Y={name:"simpleGIS",title:"简单的GIS例子",intro:"都是些GIS行业的应用简单例子",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],creatTime:"2024-02-12",updateTime:"2024-03-19",preview:[{src:"plugins/simpleGIS/preview/chinaMap.png",type:"img",name:"chinaMap",title:"中国地图展示"},{src:"plugins/simpleGIS/preview/jiangSuMap.png",type:"img",name:"jiangSuMap",title:"江苏地图展示",referenceSource:{title:"ouzexi",url:"https://github.com/ouzexi/threejs-guangdong-map"}},{src:"plugins/simpleGIS/preview/tileMap.png",type:"img",name:"tileMap",title:"地图瓦片展示",referenceSource:{title:"xianziljl",url:"https://github.com/xianziljl/three-satellite-map"}},{src:"plugins/simpleGIS/preview/renderer3DTiles.png",type:"img",name:"renderer3DTiles",title:"3DTiles展示",referenceSource:{title:"nasa-ammos",url:"https://nasa-ammos.github.io/3DTilesRendererJS/"}},{src:"plugins/simpleGIS/preview/mapBuildings.gif",type:"img",name:"mapBuildings",title:"地图和3DTiles结合"}]},T=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),Z={name:"skyBox",title:"天空盒",intro:"都是些天空盒的例子，直接根据需求选择一个享用吧",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],preview:[{src:"plugins/skyBox/preview/skyBox.png",type:"img",name:"skyBoxA",title:"单张:矩形图:着色器渲染"},{src:"plugins/skyBox/preview/skyBox.png",type:"img",name:"skyBoxD",title:"单张:矩形图:scene:env/background"},{src:"plugins/skyBox/preview/skyBox.png",type:"img",name:"skyBoxB",title:"单张:HDR渲染:着色器渲染"},{src:"plugins/skyBox/preview/skyBox.png",type:"img",name:"skyBoxC",title:"单张:HDR渲染:scene:env/background"},{src:"plugins/skyBox/preview/skyBox.png",type:"img",name:"skyBoxE",title:"多张:矩形图:scene:env/background"},{src:"plugins/skyBox/preview/skyBox.png",type:"img",name:"skyBoxF",title:"多张:HDR渲染:scene:env/background"},{src:"plugins/skyBox/preview/newEnvironment.png",type:"img",name:"newEnvironment",title:"移植R3F的Environment"}]},P=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),ee={name:"visualArts",title:"视觉艺术",intro:"这里展示一些视觉艺术的效果",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",creatTime:"2024-04-30",updateTime:"2024-04-30",require:[],preview:[{src:"plugins/visualArts/preview/volumetricLightGodray.png",type:"img",name:"volumetricLightGodray",title:"电影体积光",referenceSource:{title:"react-three-fiber",url:"https://codesandbox.io/s/yggpw5"}},{src:"plugins/visualArts/preview/roomup.png",type:"img",name:"roomup",title:"日式会厅",referenceSource:{title:"react-three-fiber",url:"https://codesandbox.io/s/ykfpwf"}}]},O=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),ie={name:"water",title:"水相关",intro:"河流、水域、海洋等场景",version:"0.0.1",author:"地虎降天龙",website:"https://gitee.com/hawk86104",state:"active",require:[],preview:[{src:"plugins/water/preview/tilingCaustics.png",type:"img",name:"tilingCaustics",title:"波纹A"},{src:"plugins/water/preview/threeExampleOcean.png",type:"img",name:"threeExampleOcean",title:"three例子-海洋"}]},x=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),A=t=>{const e=/\/([^/]+)(?=\/[^/]*$)/,i=t.match(e);return i&&i[1]?i[1]:null},ae=()=>{const t=Object.assign({"/src/plugins/AMapGIS/config.js":m,"/src/plugins/UIdemo/config.js":u,"/src/plugins/basic/config.js":v,"/src/plugins/digitalCity/config.js":y,"/src/plugins/digitalPark/config.js":d,"/src/plugins/eCommerce/config.js":f,"/src/plugins/earthSample/config.js":h,"/src/plugins/floor/config.js":w,"/src/plugins/heatMap/config.js":b,"/src/plugins/industry4/config.js":_,"/src/plugins/medical/config.js":j,"/src/plugins/postProcessing/config.js":S,"/src/plugins/projectionShadow/config.js":M,"/src/plugins/rayMarchingAndThreejs/config.js":k,"/src/plugins/shadertoyToThreejs/config.js":C,"/src/plugins/simpleGIS/config.js":T,"/src/plugins/skyBox/config.js":P,"/src/plugins/visualArts/config.js":O,"/src/plugins/water/config.js":x}),e={};for(const i of Object.keys(t)){const r=A(i);r&&(e[r]=t[i].default)}return e},te=(t,e)=>{const i=g({},e);for(const r in t){if(r==="basic")continue;const s=t[r],l=e[r];if(l){const a=new Map(l.preview.map(n=>[n.name,n]));s.preview.forEach(n=>{a.has(n.name)||(n.waitForGit=!0,i[r].preview.push(n),c())})}else s.waitForGit=!0,i[r]=s,c()}return i};function c(){var t,e;(e=(t=D).warning)==null||e.call(t,{content:"官网已经更新的插件功能，请git 更新代码!",colorful:!0,duration:5})}const pe=t=>{G("https://www.icegl.cn/addons/tvt/index/getRelaseMenuList",{},{method:"get"}).then(e=>{t.value=te(e.code.menuList.configs,t.value)}).catch(e=>{console.log(e,"请连接网络，获得插件的菜单更新")})},oe=(t,e,i)=>{const r=Object.assign({"/src/plugins/AMapGIS/config.js":m,"/src/plugins/UIdemo/config.js":u,"/src/plugins/basic/config.js":v,"/src/plugins/digitalCity/config.js":y,"/src/plugins/digitalPark/config.js":d,"/src/plugins/eCommerce/config.js":f,"/src/plugins/earthSample/config.js":h,"/src/plugins/floor/config.js":w,"/src/plugins/heatMap/config.js":b,"/src/plugins/industry4/config.js":_,"/src/plugins/medical/config.js":j,"/src/plugins/postProcessing/config.js":S,"/src/plugins/projectionShadow/config.js":M,"/src/plugins/rayMarchingAndThreejs/config.js":k,"/src/plugins/shadertoyToThreejs/config.js":C,"/src/plugins/simpleGIS/config.js":T,"/src/plugins/skyBox/config.js":P,"/src/plugins/visualArts/config.js":O,"/src/plugins/water/config.js":x});for(const s in r){const l=r[s].default;if(A(s)===t){if(e&&l.preview){const n=re(l.preview,e);if(n)return n}else if(i&&l.child){const n=ne(l.child,e,i);if(n)return n}return l}}return null};function re(t,e){return t.find(i=>i.name===e)}function ne(t,e,i){const r=t.find(s=>s.name===e);return r&&r.preview?r.preview.find(s=>s.name===i):null}export{ae as a,pe as b,oe as g};
