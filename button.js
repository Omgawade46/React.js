export const Test = () => {  
  
    const [isClick, setClick] = useState(false);  
    
    function onClick() {  
      console.log("onClick");  
      setClick(!isClick);  
    }  
    
    function onHover() {  
      console.log("onHover");  
    }  
    
    function onLeave(e) {  
      if (!isClick)  
        console.log("onLeave");  
    }  
    
    
    return (  
      <>  
        <button id="btnClick" onMouseOver={onHover} onMouseLeave={onLeave} onClick={onClick}>  
          Click Here</button>  
      </>  
    )  
  }  