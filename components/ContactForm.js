var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
			<form className = {'contactForm'}>
				<label htmlFor={'name'}>Imię: </label>
				<input type = {'text'} id = {'name'}  value = {this.props.contact.firstName}></input>
				<label htmlFor={'surname'}> Nazwisko: </label>
				<input type = {'text'} id = {'surname'}  value = {this.props.contact.lastName}></input>
				<label htmlFor = {'email'}>Email:</label>
				<input type = {'text'} id = {'email'}  value = {this.props.contact.email}></input>
				<button	type = {'submit'}>Dodaj kontakt</button>
			</form> 
		);
	}
});