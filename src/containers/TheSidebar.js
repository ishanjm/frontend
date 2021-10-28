import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	CCreateElement,
	CSidebar,
	CSidebarBrand,
	CSidebarNav,
	CSidebarNavDivider,
	CSidebarNavTitle,
	CSidebarMinimizer,
	CSidebarNavDropdown,
	CSidebarNavItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

// sidebar nav config
import navigation from './_nav';
import axios from 'axios';

const TheSidebar = () => {
	const [name, setName] = useState('');
	const dispatch = useDispatch();
	const show = useSelector(state => state.applicationState.sidebarShow);
	useEffect(async () => {
		const { data } = await axios.get('api/getName');
		setName(data.name);
	}, [name]);

	return (
		<CSidebar
			show={show}
			onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
		>
			<CSidebarBrand className="d-md-down-none" to="/">
				<h5>{name}</h5>
				<CIcon
					className="c-sidebar-brand-minimized"
					name="sygnet"
					height={35}
				/>
			</CSidebarBrand>
			<CSidebarNav>

				<CCreateElement
					items={navigation}
					components={{
						CSidebarNavDivider,
						CSidebarNavDropdown,
						CSidebarNavItem,
						CSidebarNavTitle
					}}
				/>
			</CSidebarNav>
			<CSidebarMinimizer className="c-d-md-down-none" />
		</CSidebar>
	);
};

export default React.memo(TheSidebar);
