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

$('p').notij();

&lt;p&gt; Ayubowan Sri Lanka &lt;/p&gt;

```js
$('#btn').click(function(){
    $('p').notij();
});
```

## Default Options

speed           : 'fast',       ( fast, slow, or number eg: 100 )
multiple        : true,
autoclose       : 5000,         ( set timeout speed )
onfocusdelay    : true,         ( keep dialog open on mouseover )
type            : 'default'     ( blank means default, other types error,info )

## CSS

Working with NotiJ CSS is simple: just change the css file attached as per your requirement. There are 3 color themes have been attached to css.

* `default` basic color theme.
* `error` can be use to prompt errors or special notifications.
* `info` colored with #33CCFF to show information.


