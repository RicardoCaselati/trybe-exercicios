import React from 'react'

class Card extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div class="row justify-content-center align-itmes-center">
        <div class="col-md-6">
          <article class="container card">
            <div class="row justify-content-center align-items-center ">
              <img src={this.props.image} alt="imagem de cada pokémon" />
              <div class="col-6 col-md-8 d-flex flex-column align-items-center ">
                <h2>{this.props.name}</h2>
                <h5>{this.props.type}</h5>
                <h5>{this.props.averageWeight} kg</h5>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default Card