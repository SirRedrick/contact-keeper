import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

function Contacts() {
	const { contacts, filtered } = useContext(ContactContext);

	if (!contacts.length) {
		return <h4>Please add a contact</h4>;
	}

	return (
		<Fragment>
			{filtered !== null
				? filtered.map((contact) => <ContactItem key={contact.id} contact={contact} />)
				: contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)}
		</Fragment>
	);
}

export default Contacts;
