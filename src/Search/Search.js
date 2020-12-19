import React from 'react';
import './search.css';
import Tile from '../Tiles/TileUI';
class Search extends  React.Component {

	constructor(  ) {
		super( );

		this.state = {
			searchData: null,
			paidConferences: [],
			freeConferences: [],
			noData:false
           
		};

    }
	
	
	search(key){
	//	console.warn(key);
fetch("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences")
.then((response)=>{
  response.json().then((data)=>{
	  
	   this.setState({paidConferences: data.paid, freeConferences: data.free});
	  // console.warn("datapaid",data.paid);
	   if(data.paid.length>0){
		this.setState({searchData:data.paid})

	   }
	   else{
		   this.setState({noData:true,searchData:null})
	   }
	      })


})

	}
    
	render() {
    
        
		
		return (
			<div className="container">
				{/*Heading*/}
				<h2 className="heading"><marquee behavior="alternate">Pick your favourite conferences<i class="fa fa-group"></i></marquee></h2>

				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
                        name="query"
						
						id="search-input"
						placeholder="Search by name..."
                        onChange={(event)=>this.search(event.target.value)}
					/>
                       
                      
					<i className="fa fa-search search-icon"/>
				</label>
				<div>
					{
						this.setState.searchData?
						<div>
                             {this.setState.searchData.map((conference )=> 
                                 <div key={conference.conference_id} className="container-fluid d-flex justify-content-center">
								 <div className="row">
									 <div className="col-md-4">
										 <Tile 
										 title={conference.confName} 
										  />
									 </div>
								 </div>
							 </div>
							 )
							 }
						</div>
						:""
					}

					{
						this.state.noData?<h3>No Data Found</h3>:null
					}
				</div>
			</div>
			)
	}
}

export default Search;