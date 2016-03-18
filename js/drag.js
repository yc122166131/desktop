    	
        var mydrag = function(qq){
           
    	    var oDiv = document.getElementById(qq);
            var disX = 0 ;
            var disY = 0 ;

            oDiv.onmousedown = function(ev){

                    var oEvent = ev || event;

                    disX = oEvent.clientX - oDiv.offsetLeft;
                    disY = oEvent.clientY - oDiv.offsetTop;

                    document.onmousemove = function(e){

                        var oEvent = e || event;

                        var l = oEvent.clientX-disX;
                        var t = oEvent.clientY-disY;

                        if(t<0){
                             t = 0;
                        }


                        oDiv.style.left = oEvent.clientX - disX + 'px';
                        oDiv.style.top  = oEvent.clientY - disY + 'px';

                       
                    }

                    document.onmouseup = function(ev){

                        document.onmousemove = null;
                        document.onmouseup = null;
                        /*(移动的快的话鼠标会出去,移动到边界处鼠标松开会出现图层依然会跟着鼠标的BUG，所以要改成上面的这种)
                            oDiv.onmousemove = null;
                            oDiv.onmouseup = null;
                        */
                    }

                    //屏蔽FireFox自带的BUG
                    return false;

            };
     
}
