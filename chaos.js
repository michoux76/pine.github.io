(function(){
    width= 100;
    height=100;
    var page = document.createElement('span');
    page.style = `
    position: fixed;
    overflow: hidden;
    display: block;
    width: ${width}vw;
    height: ${height}vh;
    background: rgb(0,255,0);
    `;
    imgs = [
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_fc7de069b8154e868e4353bed9832d43/animated/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_ad20ef50f6a94a789efc2498f666a83c/static/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_84828fbbf0c8459b892c245a2b0af311/static/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_1720e766565d44fc89f3806b32421e42/static/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_9d8e3bab78ae4e8ab351e2ec433dc360/animated/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4addace5dada4a9b8f03e8a4e00aa75b/static/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f94e67faae7542db91616b7337f3a234/static/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_22a0e21350544e1d9ebcc59dd9116bb2/animated/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_cbe374b0a86440d096ddb2951e7b1a3a/animated/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_2aa9961e6312495abcff69db0e21403d/animated/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_9a0078339aad4e58b20e41394f47569e/static/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e6b599f12407429c9f5a3b6235998683/static/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_69a22ffa60564bd4a989e0e8a7ae5acb/static/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_aee005e137cb41499a7e989bccd95dc0/static/light/3.0",
        "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_6e3bc2e7f97f43e2a35f95ec7c2b6a36/animated/light/3.0"
    ]
    var i = 0;
    let time;
    function addImg() {
        var w = Math.round((Math.random()*105)-5);
        var h = Math.round((Math.random()*105)-5);
        var img = document.createElement('img');
        img.style = `position: absolute;display:block;top: ${h}%;left: ${w}%`
        img.width = img.height = 64;
        img.src = imgs[Math.round((i%(imgs.length - 1)))]
        page.appendChild(img);
        i=i+1;
        time = setTimeout(addImg,1)
    }
    time = setTimeout(addImg,1000)
    document.style = document.body.style = 'margin: 0;padding: 0'
    document.body.appendChild(page)
})()