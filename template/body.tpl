<img src="{{=it.entryimg || 'http://dummyimage.com/320x180/2d8cf0/fff&text=joacycode'}}" width="100%"/>
<div class="title">标题：{{=it.title}}</div>
<div class="subtitle">副标题：{{=it.subtitle}}</div>
<div class="city">城市：{{=it.city}}</div>
<p>商品序号</p>
<ul class="skulist">
{{~it.list :value:index}}
<li>
{{=value}}
</li>
{{~}}
</ul>

