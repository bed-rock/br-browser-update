    function enter(){
      console.log("entrei");
    }

    function disableOldVersion(lowerThan){
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