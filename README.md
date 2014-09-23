# notiJ
#### A jQuery Notification Plugin

Is a simple notification plugin which can be plug and play with any jQuery based applications. This is specially designed for simple needs.

There are some more options will be added on future updates.  

## Documentation

#### Basic usage

```js
$.notij('hello there, hope this will help you.');

$('#btn').click(function(){
    $.notij('Ayubowan, Sri Lanka',{'type':'info'});
});
```

Use element as notifier

&lt;p&gt; Ayubowan Sri Lanka &lt;/p&gt;

```js
$('#btn').click(function(){
    $('p').notij();
});
```

## Default Options
```js
speed           : 'fast',       // fast, slow, or number eg: 100
multiple        : true,
autoclose       : 5000,         // set timeout speed
onfocusdelay    : true,         // keep dialog open on mouseover
theme           : 'default'     // Theme default, error, info
```

## CSS

Working with NotiJ CSS is simple: just change the css file attached as per your requirement. There are three color themes have been attached to css and you can add many more.

* `default` basic color theme.
* `error` can be use to prompt errors or special notifications.
* `info` colored with #33CCFF to show information.

```css
.theme_default {
    background:#414141;
}

.close_default {
    color:#999;
}
```


