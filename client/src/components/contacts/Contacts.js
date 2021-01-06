import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

function Contacts() {
	const { contacts } = useContext(ContactContext);

	return (
		<Fragment>
			{contacts.map((contact) => (
				<ContactItem key={contact.id} contact={contact} />
			))}
		</Fragment>
	);
}

export default Contacts;
