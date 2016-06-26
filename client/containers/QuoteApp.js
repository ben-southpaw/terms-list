import { connect } from 'react-redux'
import React from 'react'



const QuoteApp = React.createClass({

  getInitialState: function(){
    return {
      quote: "Loading...",
    };
  },
  componentDidMount: function(){
    this.getQuote();
  },
  getQuote: function(){
    var component = this;
    $.get('http://api.icndb.com/jokes/random?limitTo=[nerdy]', function(response){
      component.setState({
        quote: response.value.joke.replace(/&quot;/g,''),
        // author: component.authors[Math.floor(Math.random() * component.authors.length)]
      });
    });
  },

  render: function(){
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            "{this.state.quote}"
            <br/><br/>

          </div>
        </div>
      <button className="btn btn-success" onClick={this.getQuote}>Get More Wisdom</button>
      </div>
    );
  }
});


export default QuoteApp
