//jquery 2.3 源码模块分析
(function(){
	
	(21,94)  定义了一些变量和函数    jquery=function(){}
	
	
	(96,283) 给jquery对象添加一些方法和属性
	
	(285, 347): extend的定义： 用于实现jquery的继承. 
	
	(349, 817): jQuery.extend():  工具方法的扩展
	
	(877, 2856):   sizzle:复杂选择器的实现，  sizzle本身是一个独立的模块，如果在项目中只要用jquery的sizzle功能，可以只要下载这个部分的代码. 
	
	(2880,3042) :   callbacks:  回调对象     函数的统一管理. 
	
	(3043,3183): Deferred: 延迟对象， 对异步操作的统一管理
	
	(3186, 3297): support:   浏览器功能检测
	
	(3308, 3652):  Data: 数据缓存
	
	 (3653,3797):  queue():   队列管理   -> 动画中的运动管理
	 
	 (3800,4299):  attr()  prop() val() addClass()等   : 操作元素属性
	 
	 (4300, 5128):   on()  trigger() : 事件操作
	 
	 (5130, 6060):   dom操作:  wrap(), append(),appendTo()....
	 
	 (6060,6623):    样式操作:   css()  
	 
	 (6624, 7857):   提交数据的建立和ajax().    ajax()   load()   getJson()   getScript()
	 
	 (7858, 8587):   运动.  
	 
	 (8588, 8802): 位置与尺寸
	 
	 （8804, 8821)： jquery模块化的模式
	
	(8828): window.jQuery=window.$=jQuery;
	
})( );