import React, {Component} from 'react';
import Tile from './Tiles/TileUI';
import Search from './Search/Search';
import './App.css'
class App extends Component {
    state = {
        loading: true,
        paidConferences: [],
        freeConferences: []
    };

    async componentDidMount(){
        const url = "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({paidConferences: data.paid, freeConferences: data.free, loading:false});
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.paidConferences.length && !this.state.freeConferences.length) {
            return <div>No conference data available</div>;
        }
        
        const paidConferencesJSX = this.state.paidConferences.map(conference => (
            <div key={conference.conference_id} className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Tile imgsrc={conference.imageURL}
                        title={conference.confName} 
                        venue={conference.venue} 
                        start={conference.confStartDate}
                        end={conference.confEndDate} 
                        site={conference.confUrl} 
                        link={conference.confRegUrl} 
                        price={conference.entryType} />
                    </div>
                </div>
            </div>
        ));

        const freeConferencesJSX = this.state.freeConferences.map(conference => (
            <div key={conference.conference_id} className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Tile imgsrc={conference.imageURL} 
                        title={conference.confName} 
                        venue={conference.venue} 
                        start={conference.confStartDate} 
                        end={conference.confEndDate} 
                        site={conference.confUrl} 
                        link={conference.confRegUrl} 
                        price={conference.entryType} />
                    </div>
                </div>
            </div>
        ));

        return (
            <div>
                <Search />
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                        <span class="badge badge-info"><i class="fa fa-dollar "></i>Paidconferences List</span>
                         {paidConferencesJSX}
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                        <span class="badge badge-info">
                        Freeconferences List</span> {freeConferencesJSX}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;