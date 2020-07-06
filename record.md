### 解析 DOM 模板时的注意事项

    有些 HTML 元素，诸如 <ul>、<ol>、<table> 和 <select>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <li>、<tr> 和 <option>
    
### props的记录
    禁用 Attribute 继承
    v-bind="$attrs"

    type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认。例如，给定下列现成的构造函数：
    function Person 

### 异步组件
    对于异步组件的理解，dom节点渲染后开始调用组件

### 依赖注入
    $parent property 无法很好的扩展到更深层级的嵌套组件上。
    比如爷孙组件，或者更深层级组件

    this.$once('hook:beforeDestroy', function () {
        picker.destroy()
    })
    beforeDestroy() {

    }
    
### 模板定义的替代品

### X-Template

### 开发一个插件