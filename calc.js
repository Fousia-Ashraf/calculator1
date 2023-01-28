function displaydata(data){
    display.value+=data
    }
    
    function allclear(){
        display.value=""
    }
    
    function equal(){
        
        display.value=eval(display.value)
    }
    function backsp(){
        data=display.value
        display.value=data.slice(0,-1)
    }