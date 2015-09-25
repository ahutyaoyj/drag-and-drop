# drag-and-drop
<b>简单介绍drag和drop事件</b>

<b>实现拖动：</b>
<ol>
<li>设置元素可拖放——设置元素属性 draggable="true"</li>
<li>拖动开始事件：dragstart→drag</li>
<li>拖动过程中事件：dargenter→dragover→dragleave</li>
<li>拖动结束事件：drop→dragend</li>
</ol>
<b>注意点：</b>
<ul>
<li>在使用dragstart事件时必须阻止事件的默认行为，否则drag事件不能触发，也就不能实现拖拽；</li>
<li>要触发drop事件，必须对dragover事件设置阻止默认事件，否则drop事件不会触发；</li>
<li>拖拽非js动态生成的元素，可使用ondrag、ondrop等事件，此时必须用event.preventDefault()阻止ondragstart事件的默认行为；</li>
<li>拖拽js动态生成的元素，必须用事件代理，否则拖拽不能实现。此时必须用event.stopPropagation()阻止dragstart事件的默认行为；</li>
<li>使用事件代理完成拖拽功能时，可在drop事件中使用return false解决Firefox中拖拽打开新标签的问题；</li>
<li>未使用事件代理，则需在drop事件同时使用event.stopPropagation()和return false解决Firefox中拖拽打开新标签的问题；</li>
</ul>
<b>关于拖动事件的dataTransfer对象：</b>
<p>在拖动事件中有一个event.dataTransfer对象（在使用事件代理时，为event.originalEvent.dataTransfer），该对象用于配置拖拽行为效果（effectAllowed），并且在拖拽过程中通过setData和getData为各事件间传递数据信息，目前我用到的就是这几个，还有其他属性大家可以在用到拖拽功能的时候试试</p>

<b>兼容性：</b>
<p>拖拽事件的兼容性很一般，文档里说的是在Internet Explorer 9、Firefox、Opera 12、Chrome 以及 Safari 5 支持拖放，目前我测的是在chrome、Firefox和IE10中可以兼容，另外有部分属性的兼容性还是有问题。虽然兼容性一般，但是在解决某些问题的时候，用HTML5的drag事件还是比较方便，比如拖拽填充表格，如果使用鼠标事件去模拟拖拽，就很难确定拖拽放下的位置，使用drag事件就很简单</p>
