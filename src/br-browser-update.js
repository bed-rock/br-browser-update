    function disableOldVersion(lowerThan){
      pushHtml();
      var currentBrowser = getCurrentBrowser();      

      browserSplit = currentBrowser.split(" ");
      parseInt(browserSplit[1]); 
      
      if (browserSplit[0] == "MSIE" && browserSplit[1] < lowerThan) {

        var modal = document.getElementById("browser-update");        

        modal.className = "modal";
      };

    }

    function getCurrentBrowser(){

      return (function(){
        var ua= navigator.userAgent, tem, 
        M= ua.match(/(msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
          tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE '+(tem[1] || '');
        }
        
        if(M[1]=== 'Chrome'){
          tem= ua.match(/\bOPR\/(\d+)/);
          if(tem!= null) return 'Opera '+tem[1];
        }
        
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');

      })();

    }
    
    function pushHtml(){
      var html = [];
      html.push('<div class="modal-body">');
      html.push('<h1>Ops!!</h1>');
      html.push('<p>Lorem ipsum dolor sit amet</p>');
      html.push('<div class="stand-row">')
      html.push(' <div class="stand-column"><a href="https://www.google.com/chrome/browser/"><img src="../src/assets/chrome-logo.png" /></a></div>');
      html.push('<div class="stand-column"><a href="https://www.mozilla.org/pt-BR/"><img src="../src/assets/firefox-logo.png" /></a></div>');
      html.push('<div class="stand-column"><a href="http://www.opera.com/pt-br"><img src="../src/assets/opera-logo.png" /></a></div>');
      html.push('</div></div>');
      var target = document.getElementById('browser-update');
      target.innerHTML = html.join('');
      target.style.display = 'block';
    }