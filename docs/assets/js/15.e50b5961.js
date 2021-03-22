(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{825:function(t,e,a){"use strict";a.r(e);var s=a(111),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"功能说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能说明"}},[t._v("#")]),t._v(" 功能说明")]),t._v(" "),a("ul",[a("li",[t._v("支持分布式保证单节点执行（按节点平均分配job）")]),t._v(" "),a("li",[t._v("支持failvoer，自动切换故障节点")]),t._v(" "),a("li",[t._v("支持多节点下并行计算")]),t._v(" "),a("li",[t._v("支持无注册中心单机模式")]),t._v(" "),a("li",[t._v("支持自定义重试策略")]),t._v(" "),a("li",[t._v("支持配置持久化（启动加载、变更保存）")]),t._v(" "),a("li",[t._v("支持控制台（"),a("a",{attrs:{href:"http://git.oschina.net/vakinge/jeesuite-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("jeesuite-admin"),a("OutboundLink")],1),t._v("）任务监控、开停、动态修改调度时间策略、手动触发执行")])]),t._v(" "),a("h3",{attrs:{id:"使用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[t._v("#")]),t._v(" 使用说明")]),t._v(" "),a("h4",{attrs:{id:"添加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[t._v("#")]),t._v(" 添加依赖")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<dependency>\n    <groupId>com.jeesuite</groupId>\n    <artifactId>jeesuite-scheduler</artifactId>\n    <version>[最新版本]</version>\n</dependency>\n")])])]),a("h4",{attrs:{id:"springboot集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot集成"}},[t._v("#")]),t._v(" springboot集成")]),t._v(" "),a("h5",{attrs:{id:"添加依赖-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖-2"}},[t._v("#")]),t._v(" 添加依赖")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<dependency>\n    <groupId>com.jeesuite</groupId>\n    <artifactId>jeesuite-springboot-starter</artifactId>\n    <version>[最新版本]</version>\n</dependency>\n")])])]),a("h5",{attrs:{id:"启动注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动注解"}},[t._v("#")]),t._v(" 启动注解")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@EnableJeesuiteSchedule\n")])])]),a("h5",{attrs:{id:"配置说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置说明"}},[t._v("#")]),t._v(" 配置说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jeesuite.task.registryType=zookeeper\njeesuite.task.registryServers=\njeesuite.task.groupName=\n#扫描@ScheduleConf注解的包\njeesuite.task.scanPackages=\njeesuite.task.threadPoolSize=\n")])])]),a("hr"),t._v(" "),a("h4",{attrs:{id:"编写一个定时任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写一个定时任务"}},[t._v("#")]),t._v(" 编写一个定时任务")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('public class DemoTask extends AbstractJob{\n\n\tint count = 1;\n\t@Override\n\tpublic void doJob(JobContext context) throws Exception {\n\t\tSystem.out.println("\\n=============\\nDemoTask1=====>"+count+"\\n===============\\n");\n\t\tThread.sleep(RandomUtils.nextLong(1000, 2000));\n\t\tcount++;\n\t}\n\n\t@Override\n\tpublic boolean parallelEnabled() {\n\t    // 分布式下开启并行计算返回true\n\t\treturn false;\n\t}\n\n}\n')])])]),a("h4",{attrs:{id:"怎么写一个并行计算的逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么写一个并行计算的逻辑"}},[t._v("#")]),t._v(" 怎么写一个并行计算的逻辑")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('public class DemoParallelTask extends AbstractJob{\n\n\tint count = 1;\n\t@Override\n\tpublic void doJob(JobContext context) throws Exception {\n\t\t//首先加载所有要处理的数据，譬如所有需要处理的用户\n\t\tList<Long> userids = new ArrayList<Long>(Arrays.asList(1001L,2001L,1002L,2002L,1003L,2003L));//load all\n\t\tfor (Long userId : userids) {\n\t\t\t//判断是否分配到当前节点执行\n\t\t\tif(!context.matchCurrentNode(userId)){\n\t\t\t\tSystem.out.println(">>>>>>not matchCurrentNode --ignore");\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\t// 处理具体业务逻辑\n\t\t\tSystem.out.println("<<<<<<<DemoTask2=====>"+count);\n\t\t}\n\t\tcount++;\n\t}\n\t\n\t@Override\n\tpublic boolean parallelEnabled() {\n\t\t//开启并行计算\n\t\treturn true;\n\t}\n\n}\n')])])]),a("h4",{attrs:{id:"spring配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring配置文件"}},[t._v("#")]),t._v(" spring配置文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' \x3c!-- 注册中心（集群管理） --\x3e\n    <bean id="jobRegistry" class="com.jeesuite.scheduler.registry.ZkJobRegistry">\n       <property name="zkServers" value="localhost:2181" />\n    </bean>\n   \n\t<bean class="com.jeesuite.scheduler.SchedulerFactoryBeanWrapper">\n\t    \x3c!-- 确保每个应用groupName唯一 --\x3e\n\t    <property name="groupName" value="demo" />\n\t    \x3c!--  --\x3e\n\t    <property name="configPersistHandler">\n\t       <bean class="com.jeesuite.test.sch.DbConfigPersistHandler" />\n\t    </property>\n\t    <property name="registry" ref="jobRegistry" />\n\t\t<property name="schedulers">\n\t\t\t<list>\n\t\t\t    \x3c!-- 以下配置每个任务列表 --\x3e\n\t\t\t\t<bean class="com.jeesuite.test.sch.DemoTask">\n\t\t\t\t\t<property name="jobName" value="demoTask" />\n\t\t\t\t\t<property name="retries" value="1" />\n\t\t\t\t\t<property name="cronExpr" value="0/30 * * * * ?" />\n\t\t\t\t\t\x3c!-- 启动完成立即执行一次 --\x3e\n\t\t\t\t\t<property name="executeOnStarted" value="false" />\n\t\t\t\t</bean>\n\t\t\t\t\n\t\t\t\t<bean class="com.jeesuite.test.sch.DemoTask2">\n\t\t\t\t\t<property name="jobName" value="demoTask2" />\n\t\t\t\t\t<property name="cronExpr" value="0/15 * * * * ?" />\n\t\t\t\t</bean>\n\t\t\t\t\n\t\t\t\t\x3c!-- <bean class="com.jeesuite.test.sch.DemoParallelTask">\n\t\t\t\t\t<property name="jobName" value="demoParallelTask" />\n\t\t\t\t\t<property name="cronExpr" value="0 0/15 * * * ?" />\n\t\t\t\t</bean> --\x3e\n\t\t\t</list>\n\t\t</property>\n\t</bean>\n\n')])])]),a("p",[t._v("全局参数说明：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("groupName")]),t._v(" 任务组，要确保和其他项目唯一 （必填）")]),t._v(" "),a("li",[a("code",[t._v("registry")]),t._v(" 注册中心，不配置则为单机模式 （选填）")]),t._v(" "),a("li",[a("code",[t._v("configPersistHandler")]),t._v(" 持久化配置支持，启动时合并配置和更新配置。（选填）")])]),t._v(" "),a("p",[t._v("job参数说明：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("jobName")]),t._v(" 任务名，确保同一groupName下唯一")]),t._v(" "),a("li",[a("code",[t._v("retries")]),t._v(" 重试次数，默认不重试")]),t._v(" "),a("li",[a("code",[t._v("cronExpr")]),t._v(" 执行时间策略，如果配置了"),a("code",[t._v("configPersistHandler")]),t._v("以merge后的为准。")])]),t._v(" "),a("p",[t._v("@EnableJeesuiteSchedule")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jeesuite.task.registryType=zookeeper\njeesuite.task.registryServers=\njeesuite.task.groupName=\n#扫描@ScheduleConf注解的包\njeesuite.task.scanPackages=\njeesuite.task.threadPoolSize=\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);