const buttonStyle = {
    "fontFamily": "Montserrat",
    "color":"black",
    "backgroundColor":"transparent",
    "border":"2px solid black",
    "padding":"2%",
    "borderRadius":"50px"
}

function Component() {
    return (
      <div>
        <a href="https://bit.ly/hackfest24" target="blank">
            <button style={buttonStyle}>
                Register on UNSTOP
            </button>
        </a>
      </div>
    );
  }

export default Component;