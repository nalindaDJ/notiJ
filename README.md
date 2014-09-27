# notiJ - A jQuery Notification Plugin

notiJ is a small jQuery plugin to create animated and customizable notification which can be use with any jQuery based applications.

The plugin comes with 3 built-in notification themes for your practical needs: default, error and information.

## Documentation

#### How to use it

1. Load the jQuery library and the jQuery notiJ plugin on the web page.

```js
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="notiJ.js"></script>
```

2. Create your custom notification messages in the Javascript.

```js

$.notij('Your Message Here.',OPTIONS);

$('#btn').click(function(){
    $.notij('Ayubowan, Sri Lanka',{'theme':'info'});
});

```
3. Or load messages from a specific element. (Use elements as notifiers)

&lt;p&gt; Ayubowan Sri Lanka &lt;/p&gt;

```js

$('p').notij(OPTIONS);

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

Include the notiJ.css directly in the head section of your web page. Tweak or override the styles to change the color or position of the notification boxes to fit your needs.

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

## Demo

Find [notij-demo] here.

[notij-demo]:http://lankaweb.solutions/notiJ/index.html




