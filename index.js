// ReactDOM.render(<h1 className="header">Hi may name is will</h1>, document.getElementById("root"))

function  Title(){
    return(
        <h1 className = "navbar-brad">El leon</h1>
    )



}
    
const navbar = (
    <nav>
    <h1>The Lion Store</h1>
    <ul>
        <li>pricing</li>
        <li>about</li>
        <li>contact</li>
    </ul>
</nav>

)
ReactDOM.render(navbar, document.getElementById("root"))


  

// ReactDOM.render(
//   <div>
//       <Title />
//   </div>,
//     document.getElementById("root"))


    // const h1 = document.createElement("h1")
    // h1.textContent = "This is an imperative way to program"
    // h1.className = "header"
    // document.getElementById("root").append(h1)