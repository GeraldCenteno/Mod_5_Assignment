function Institution(props){
    const institutionStyle = {
        backgroundColor: "lightblue"
    }

    return(<div style = {institutionStyle}>
        <h2>{props.name}</h2>
        <h3>{props.dates}</h3>
        <p>{props.details}</p>
    </div>)


}
export default Institution;
