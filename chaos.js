(function(){
    width= 440;
    height=550;
    var page = document.createElement('span');
    page.style = `
    position: relative;
    overflow: hidden;
    display: block;
    width: ${width}px;
    height: ${height}px;
    background: red;
    `;
    imgs = [
        'pine.png',
        // 'steer.gif'
    ]
    for(var i = 0; i<5000;i++) {
        var w = Math.round((Math.random()*105)-5);
        var h = Math.round((Math.random()*105)-5);
        var img = document.createElement('img');
        img.style = `position: absolute;display:block;top: ${h}%;left: ${w}%`
        img.width = img.height = 64;
        img.src = imgs[Math.round((Math.random()*(imgs.length - 1)))]
        page.appendChild(img)
    }
    document.style = document.body.style = 'margin: 0;padding: 0'
    document.body.appendChild(page)
})()