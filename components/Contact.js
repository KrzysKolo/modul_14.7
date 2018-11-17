var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
  render: function(){
		return(
			<div className={'contactsList'}>
				<figure className={'contactLeft'}>
					<img className={'contactImage'} src={'https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128_1280.png'}></img>
				</figure>
	            <div className={'contactRight'}>
	                <p className={'contactLabel'}>Imię: {this.props.item.firstName}</p>
	                <p className={'contactLabel'}>Nazwisko: {this.props.item.lastName}</p>
	                <p className={'contactEmail'}
	                  href = {'mailto' + this.props.item.email}>Email: {this.props.item.email}
	                </p>
	            </div>
            </div>
		);
	}
});