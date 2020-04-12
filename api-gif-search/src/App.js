import React, { Component } from 'react';

import SearchBar from './components/SearchBar/index';
import GifList from './components/List/index';
import Header from './components/Home/header';

import request from 'superagent';

class App extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            gifs: []
        }
    }

    handleTermChange(term){
      const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g,'+')}&api_key=1YIx5yclZNTG6Ghrm95crUchAdaNwTxl`
      
      request.get(url, (err, res) => {
          this.setState({ gifs: res.body.data })
      });
    }

    render(){
        return(
            <>
                <Header />
                <div>
                    <SearchBar onTermChange={term => this.handleTermChange(term)} />
                    <GifList gifs={this.state.gifs} />
                </div>
            </>
        );
    }

}

export default App;
