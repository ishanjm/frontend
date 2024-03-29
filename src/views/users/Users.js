import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
	CBadge,
	CCard,
	CCardBody,
	CCardHeader,
	CCol,
	CDataTable,
	CRow,
	CPagination
} from '@coreui/react';

import usersData from './UsersData';
import { connect } from 'react-redux';
import { requestUserList } from '../../behaviours/user/actions';

const getBadge = status => {
	switch (status) {
		case 'Active': return 'success';
		case 'Inactive': return 'secondary';
		case 'Pending': return 'warning';
		case 'Banned': return 'danger';
		default: return 'primary';
	}
};

const Users = ({ userInfo, requestUserList }) => {
	const history = useHistory();
	const queryPage = useLocation().search.match(/page=([0-9]+)/, '');
	const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
	const [page, setPage] = useState(currentPage);

	const pageChange = newPage => {
		currentPage !== newPage && history.push(`/users?page=${newPage}`);
	};

	useEffect(() => {
		currentPage !== page && setPage(currentPage);
	}, [currentPage, page]);

	useEffect(() => {
		requestUserList();
	}, []);

	return (
		<CRow>
			<CCol md={12}>
				<CCard>
					<CCardHeader>
						Users
						<small className="text-muted"> example</small>
					</CCardHeader>
					<CCardBody>
						<CDataTable
							items={userInfo}
							fields={[
								{ key: 'name', _classes: 'font-weight-bold' }, 'email',
								, 'createdAt', 'createdAt'
							]}
							hover
							columnFilter
							tableFilter
							itemsPerPageSelect
							sorter
							pagination
							striped
							itemsPerPage={5}
							activePage={page}
							clickableRows
							onRowClick={(item) => history.push(`/users/${item._id}`)}
						// scopedSlots={{
						// 	'status':
						// 		(item) => (
						// 			<td>
						// 				<CBadge color={getBadge(item.status)}>
						// 					{item.status}
						// 				</CBadge>
						// 			</td>
						// 		)
						// }}
						/>
						<CPagination
							activePage={page}
							onActivePageChange={pageChange}
							pages={5}
							doubleArrows={false}
							align="center"
						/>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	);
};
const mapStateToProps = state => ({
	userInfo: state.userDetails.users,
});
export default connect(mapStateToProps, { requestUserList })(Users);
